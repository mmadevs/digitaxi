'use client'
import { FunctionComponent } from 'react'
import MenuItem from '../atoms/MenuItem'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useMenu } from '@/app/context/Menu'

const Menu: FunctionComponent<{
	items: { label: string; route: string }[]
	className?: string
}> = ({ items, className }) => {
	const { setIsMenuOpen } = useMenu()
	return (
		<nav
			className={`z-50 fixed h-full overflow-visible inset-0 min-h-screen p-8 bg-blue-950 text-white flex flex-col max-md:animate-flip-down
			lg:static lg:h-auto lg:min-h-0 lg:rounded-xl lg:p-3 lg:px-8 ${className ?? ''}`}
		>
			<button
				className='bg-transparent text-white text-4xl py-5 place-self-end lg:hidden'
				onClick={() => setIsMenuOpen(false)}
			>
				<AiFillCloseCircle
					className='fill-white text-white'
					color='#fff'
				/>
			</button>
			<ul className='gap-7 flex flex-col lg:flex-row'>
				{items.map((item) => (
					<MenuItem key={item.route} item={item} />
				))}
			</ul>
		</nav>
	)
}

export default Menu
