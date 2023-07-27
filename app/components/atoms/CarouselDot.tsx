import { FunctionComponent } from 'react'

const CarouselDot: FunctionComponent<{ isSelected: boolean }> = ({
	isSelected
}) => {
	return (
		<span
			className={`rounded-full bg-white flex-0 ${
				isSelected ? 'w-3 h-3' : 'w-2 h-2'
			}`}
		/>
	)
}

export default CarouselDot
