import { FunctionComponent, ReactNode } from 'react'
import Text from '../atoms/Text'
import { IconBase } from 'react-icons/lib'

const AboutItem: FunctionComponent<{
	title: string
	subtitle: string
	children: ReactNode
}> = ({ children, title, subtitle }) => {
	return (
		<div className='w-full flex gap-2'>
			<IconBase className='fill-blue-950 text-blue-950 text-6xl'>
				{children}
			</IconBase>

			<div className='border-l-4 border-blue-950 flex-1 pl-2'>
				<Text type='label' className=''>
					{title}
				</Text>
				<Text type='paragraph' className=''>
					{subtitle}
				</Text>
			</div>
		</div>
	)
}

export default AboutItem
