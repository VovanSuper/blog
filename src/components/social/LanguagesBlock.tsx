const LanguagesBlock = () => (
	<div className='skills grid  w-full'>
		<h4 className='border-b-4 border-x-linkBlack50 pb-1 font-bold'>LANGUAGES</h4>
		<section className='lang grid grid-cols-2'>
			<h5>Russian</h5>
			<span className='text-right font-semibold'>Native</span>
		</section>
		<section className='lang grid grid-cols-2'>
			<h5>English</h5>
			<span className='text-right font-light xl:font-bold'>Fluent/Bilingual</span>
		</section>
		<section className='lang grid grid-cols-2'>
			<h5>Finnish</h5>
			<span className='text-right font-semibold'>Basic</span>
		</section>
	</div>
);
export default LanguagesBlock;
