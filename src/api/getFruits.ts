import type { ICar } from 'types';

export default async function getCars(): Promise<ICar[]> {
	const response = await fetch('https://6246b1dce3450d61b001a878.mockapi.io/api/cars');
	return response.json() as Promise<ICar[]>;
}
