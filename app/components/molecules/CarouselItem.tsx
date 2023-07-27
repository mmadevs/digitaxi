import { FunctionComponent } from 'react'
import CarouselItemTitle from '../atoms/CarouselItemTitle'
import CarouselItemText from '../atoms/CarouselItemText'
import { CarouselItemSpace } from '../atoms/CarouselItemSpace'
import CarouselItemImage from '../atoms/CarouselItemImage'
import CarouselItemContainer from '../atoms/CarouselItemContainer'
import CarouselItemTextContainer from '../atoms/CarouselItemTextContainer'

const CarouselItem: FunctionComponent<{
	item: { title?: string; type: 'text' | 'image'; value: string }
	selected?: boolean
}> = ({ item }) => {
	return (
		<CarouselItemContainer type={item.type}>
			{item.type === 'image' ? (
				<CarouselItemImage value={item.value} />
			) : (
				<CarouselItemTextContainer>
					<CarouselItemTitle title={item.title} />
					<CarouselItemSpace />
					<CarouselItemText value={item.value} />
					<CarouselItemSpace />
				</CarouselItemTextContainer>
			)}
		</CarouselItemContainer>
	)
}

export default CarouselItem
