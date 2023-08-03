'use client'
import { FunctionComponent } from 'react'
import { useMenu } from '@/app/context/Menu'
import { NavBarItem } from '@/app/types/NavBarItem'
import CloseButton from '../atoms/CloseButton'
import MenuItems from '../molecules/MenuItems'

const Menu: FunctionComponent<{
	items: NavBarItem[]
	className?: string
}> = ({ items, className }) => {
	const { isMenuOpen, setIsMenuOpen } = useMenu()
	return (
		<nav
			className={`z-50 fixed inset-0 max-h-screen p-8 
			bg-blue-950 text-white flex flex-col 
			animate-flip-down
			${isMenuOpen ? 'animate-none min-h-screen' : 'hidden'}
			lg:static lg:h-auto lg:min-h-0 lg:rounded-xl lg:p-3 lg:px-8 
			lg:animate-none lg:block
			${className ?? ''}`}
		>
			<CloseButton onClick={() => setIsMenuOpen(false)} />
			<MenuItems items={items} />
		</nav>
	)
}

export default Menu
