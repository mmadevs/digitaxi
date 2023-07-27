import { FunctionComponent } from 'react'
import Text from './Text'

const CarouselItemText: FunctionComponent<{
	value: string
}> = ({ value }) => (
	<Text type='paragraph' className='text-white'>
		{value}
	</Text>
)

export default CarouselItemText
