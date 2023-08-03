'use client'
import { FunctionComponent } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'

const CloseButton: FunctionComponent<{
	className?: string
	padding?: string | number
	disabled?: boolean
	onClick?: () => void
}> = ({ onClick }) => {
	return (
		<button
			className='bg-transparent text-white text-4xl py-5 place-self-end lg:hidden'
			onClick={onClick}
		>
			<AiFillCloseCircle className='fill-white text-white' color='#fff' />
		</button>
	)
}

export default CloseButton
