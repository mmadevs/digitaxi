import Image from 'next/image'
import { FunctionComponent } from 'react'

const CarouselItemImage: FunctionComponent<{
	value: string
}> = ({ value }) => (
	<Image
		className={`transition-opacity duration-300 object-cover`}
		src={value}
		alt='Veículos'
		priority
		fill
	/>
)

export default CarouselItemImage
