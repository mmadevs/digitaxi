import { FunctionComponent } from 'react'
import Text from './Text'

const MenuItem: FunctionComponent<{
	item: { label: string; route: string }
	selected?: boolean
	onClick: () => void
}> = ({ item, onClick, selected = false }) => {
	return (
		<li
			className={`relative flex-1 basis-full px-2 cursor-pointer hover:text-lime-300 flex flex-col justify-center items-center text-3xl lg:text-lg`}
			onClick={onClick}
		>
			<Text type='subtitle'>{item.label}</Text>
			{selected && (
				<span className='absolute top-full w-32 h-1 bg-lime-300 lg:w-14' />
			)}
		</li>
	)
}

export default MenuItem
