import { FunctionComponent } from 'react'
import Text from './Text'

const CarouselItemTitle: FunctionComponent<{
	title?: string
}> = ({ title }) =>
	title ? (
		<Text
			type='subtitle'
			className={`text-blue-950 bg-white p-2 rounded-lg text-center font-bold 
						gap-2 flex flex-col`}
		>
			{title}
		</Text>
	) : (
		<></>
	)

export default CarouselItemTitle
