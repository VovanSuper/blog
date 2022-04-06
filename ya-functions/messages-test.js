const { Driver, getCredentialsFromEnv, getLogger, MetadataAuthService } = require('ydb-sdk');
const { v4 } = require('uuid');

const logger = getLogger({ level: 'debug' });
const endpoint = process.env.DB_ENDPOINT;
const database = process.env.DB_NAME;
const TABLE = process.env.MSG_TABLE;
// const authService = getCredentialsFromEnv(logger);
const authService = new MetadataAuthService(database);

const driver = new Driver({ endpoint, database, authService, logger });

module.exports.handler = async function (event, context) {
	const { name, email, text } = event.body || {};

	if (!name || !email || !text.trim()) {
		throw new Error('Name, Email, Text should be provided');
	}

	try {
		if (!(await driver.ready(10000))) {
			logger.fatal(`Driver has not become ready in 10 seconds!`);
			process.exit(1);
		}

		await driver.tableClient.withSession(async session => {
			const prepQuery = `insert into ${TABLE}(id, sender_name, sender_email, text) values (${v4()}, ${name}, ${email}, ${text} })`;
			const queryRes = await session.executeQuery(prepQuery);
			return {
				statusCode: 201,
				body: JSON.stringify(queryRes.queryStats ?? queryRes.queryMeta),
			};
		});
	} catch (e) {
		console.error(e);
		return {
			body: JSON.stringify(e),
			statusCode: 500,
		};
	}
};
