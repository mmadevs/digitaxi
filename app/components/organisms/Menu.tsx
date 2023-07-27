'use client'
import { FunctionComponent, useState } from 'react'
import MenuItem from '../atoms/MenuItem'
import { AiFillCloseCircle } from 'react-icons/ai'
// import { GrClose } from 'react-icons/gr'

const Menu: FunctionComponent<{
	items: { label: string; route: string }[]
	className?: string
	close?: () => void
}> = ({ items, close, className }) => {
	const [selectedIndex, setSelectedIndex] = useState(0)

	return (
		<div
			className={`z-50 absolute h-full overflow-visible inset-0 min-h-screen p-8 bg-blue-950 text-white flex flex-col max-md:animate-flip-down
			lg:static lg:h-auto lg:min-h-0 lg:rounded-xl lg:p-5 lg:px-8 ${className ?? ''}`}
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
			<ul className='gap-10 flex flex-col lg:flex-row'>
				{items.map((item, i) => (
					<MenuItem
						key={item.route}
						item={item}
						selected={selectedIndex === i}
						onClick={() => {
							close?.()
							document.querySelector(item.route)?.scrollIntoView({
								behavior: 'smooth',
								block: 'start'
							})
							setSelectedIndex(i)
						}}
					/>
				))}
			</ul>
		</div>
	)
}

export default Menu
