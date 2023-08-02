'use client'
import { FunctionComponent } from 'react'
import MenuItem from '../atoms/MenuItem'
import { AiFillCloseCircle } from 'react-icons/ai'

const Menu: FunctionComponent<{
	items: { label: string; route: string }[]
	className?: string
	close?: () => void
}> = ({ items, close, className }) => {
	return (
		<nav
			className={`z-50 fixed h-full overflow-visible inset-0 min-h-screen p-8 bg-blue-950 text-white flex flex-col max-md:animate-flip-down
			lg:static lg:h-auto lg:min-h-0 lg:rounded-xl lg:p-3 lg:px-8 ${className ?? ''}`}
		>
			<button
				className='bg-transparent text-white text-4xl py-5 place-self-end lg:hidden'
				onClick={close}
			>
				<AiFillCloseCircle
					className='fill-white text-white'
					color='#fff'
				/>
			</button>
			<ul className='gap-7 flex flex-col lg:flex-row'>
				{items.map((item) => (
					<MenuItem
						key={item.route}
						item={item}
						onClick={() => {
							close?.()
							document.querySelector(item.route)?.scrollIntoView({
								behavior: 'smooth',
								block: 'start'
							})
						}}
					/>
				))}
			</ul>
		</nav>
	)
}

export default Menu
