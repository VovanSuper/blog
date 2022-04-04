import type { KeyboardEvent, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import type { ICar } from 'types';
import { useMediaQuery } from 'utils';

const RANDOMIZER = 1000;
const PREFERRED_IMAGE_WIDTH = 384;
const MOBILE_PADDING = 16;
const ASPECT_RATIO_WIDTH = 16;
const ASPECT_RATIO_HEIGHT = 9;
const IMAGE_INDEX_BELOW_THE_FOLD = 3;

interface Properties {
	car: ICar;
	index: number;
}

export default function Car({ car, index }: Properties): ReactElement {
	const isTabletAndUp = useMediaQuery('(min-width: 600px)');

	const navigate = useNavigate();
	function onClick(): void {
		window.scrollTo(0, 0);
		navigate(car.name.toLowerCase());
	}

	function onKeyDown(event: KeyboardEvent): void {
		if (event.key === 'Enter') {
			onClick();
		}
	}

	const imageWidth = Math.min(PREFERRED_IMAGE_WIDTH, window.innerWidth - MOBILE_PADDING);
	const imageHeight = imageWidth / (ASPECT_RATIO_WIDTH / ASPECT_RATIO_HEIGHT);

	return (
		<div
			data-testid='FruitCard'
			className='focus:border-gray-300 focus:ring-gray-500 cursor-pointer select-none overflow-hidden rounded-lg shadow-lg focus:outline-none focus:ring focus:ring-opacity-50 dark:shadow-2xl'
			role='button'
			tabIndex={0}
			onClick={onClick}
			onKeyDown={onKeyDown}
		>
			<div className='relative'>
				<img
					data-testid='FruitCardImage'
					loading={!isTabletAndUp && index >= IMAGE_INDEX_BELOW_THE_FOLD ? 'lazy' : 'eager'}
					decoding={!isTabletAndUp && index >= IMAGE_INDEX_BELOW_THE_FOLD ? 'async' : 'sync'}
					width={imageWidth}
					height={imageHeight}
					style={{
						backgroundColor: car.color,
					}}
					src={`${car.image}?id=${Math.round(Math.random() * RANDOMIZER)}`}
					alt={car.name}
				/>
			</div>
			<h3 data-testid='FruitCardName' className='p-6 text-xl font-bold'>
				{car.name}
			</h3>
		</div>
	);
}
