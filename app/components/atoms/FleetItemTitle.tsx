import { FunctionComponent } from 'react'
import Text from './Text'

const CarouselItemTitle: FunctionComponent<{
	title: string
}> = ({ title }) => (
	<Text
		type='subtitle'
		className={`text-blue-950 text-center font-bold text-3xl`}
	>
		{title}
	</Text>
)

export default CarouselItemTitle
