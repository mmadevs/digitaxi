import { FunctionComponent, ReactNode } from 'react'
import Text from '../atoms/Text'
import { IconBase } from 'react-icons/lib'
import CardContainer from '../atoms/CardContainer'

const ServicesItem: FunctionComponent<{
	title: string
	children: ReactNode
}> = ({ children, title }) => {
	return (
		<CardContainer
			className={`flex flex-row w-full
		gap-2 items-center justify-center p-2 px-8 
		lg:flex-col lg:aspect-square lg:w-52`}
		>
			<IconBase className='fill-blue-950 text-blue-950 text-4xl lg:text-7xl'>
				{children}
			</IconBase>

			<Text type='label' className=''>
				{title}
			</Text>
		</CardContainer>
	)
}

export default ServicesItem
