import type { FC } from 'react';
import type { IArrowProps } from './Arrow';

interface IBigArrowProps extends IArrowProps {
	width: number;
}

const ArrowBig: FC<IBigArrowProps> = ({ group, width }) => (
	<div className='-mt-1'>
		<svg width={width} height='24' viewBox={`0 0 ${width} 24`} fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				className={`
      fill-linkWhite 
      group-hover:fill-linkBlack50
      `}
				d='M156.061 13.0607C156.646 12.4749 156.646 11.5251 156.061 10.9393L146.515 1.3934C145.929 0.807611 144.979 0.807611 144.393 1.3934C143.808 1.97919 143.808 2.92893 144.393 3.51472L152.879 12L144.393 20.4853C143.808 21.0711 143.808 22.0208 144.393 22.6066C144.979 23.1924 145.929 23.1924 146.515 22.6066L156.061 13.0607ZM0 13.5H155V10.5H0V13.5Z'
				fill='white'
			/>
		</svg>
	</div>
);
export default ArrowBig;
