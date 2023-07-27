'use client'
import { FunctionComponent, ReactNode } from 'react'

const PrimaryButton: FunctionComponent<{
	children: ReactNode | ReactNode[] | string
	className?: string
	padding?: string | number
	onClick?: () => void
}> = ({ children, className, padding, onClick }) => {
	return (
		<button
			className={`rounded-full bg-blue-950 text-white flex justify-center 
			${padding ? `p-${padding}` : 'p-4'} 
			items-center font-bold text-xl 
			transition-all duration-200 ${className ?? ''} 
			hover:bg-blue-900`}
			onClick={onClick}
		>
			{children}
		</button>
	)
}

export default PrimaryButton
