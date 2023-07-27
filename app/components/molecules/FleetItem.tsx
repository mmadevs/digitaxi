import { FunctionComponent } from 'react'
import FleetItemTitle from '../atoms/FleetItemTitle'
import FleetItemImage from '../atoms/FleetItemImage'
import CardContainer from '../atoms/CardContainer'
import Text from '../atoms/Text'

const FleetItem: FunctionComponent<{
	image: string
	title: string
	subtitle: string
}> = ({ image, title, subtitle }) => {
	return (
		<CardContainer
			square
			className='text-center lg:min-w-[30%] max-sm:min-w-full'
		>
			<div className='relative flex-1'>
				<FleetItemImage value={image} />
			</div>
			<FleetItemTitle title={title} />
			<Text type='subtitle' className='text-lg'>
				{subtitle}
			</Text>
		</CardContainer>
	)
}

export default FleetItem
