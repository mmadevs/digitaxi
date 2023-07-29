import { FunctionComponent } from 'react'
import Text from './Text'

const MenuItem: FunctionComponent<{
	item: { label: string; route: string }
	onClick: () => void
}> = ({ item, onClick }) => {
	return (
		<li
			className={`relative flex-1 basis-full px-2 cursor-pointer hover:text-lime-300 flex flex-col justify-center items-center text-3xl lg:text-lg`}
			onClick={onClick}
		>
			<Text type='paragraph'>{item.label}</Text>
		</li>
	)
}

export default MenuItem
