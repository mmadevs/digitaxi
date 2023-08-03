import { FunctionComponent } from 'react'
import Text from './Text'
import { useMenu } from '@/app/context/Menu'
import { useEffect } from 'react'

const MenuItem: FunctionComponent<{
	item: { label: string; route: string }
}> = ({ item }) => {
	const { isMenuOpen, setIsMenuOpen } = useMenu()
	useEffect(() => {
		if (!isMenuOpen) {
			document.querySelector(item.route)?.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			})
		}
	}, [isMenuOpen, item])
	return (
		<li
			className={`relative flex-1 basis-full px-2 cursor-pointer hover:text-lime-300 flex flex-col justify-center items-center text-3xl lg:text-lg`}
			onClick={() => {
				setIsMenuOpen(false)
			}}
		>
			<Text type='paragraph'>{item.label}</Text>
		</li>
	)
}

export default MenuItem
