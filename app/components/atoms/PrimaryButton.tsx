'use client'
import { FunctionComponent, ReactNode } from 'react'

const PrimaryButton: FunctionComponent<{
	children: ReactNode | ReactNode[] | string
	className?: string
	padding?: string | number
	disabled?: boolean
	onClick?: () => void
}> = ({ children, className, padding, onClick, disabled = false }) => {
	return (
		<button
			disabled={disabled}
			className={`rounded-full bg-blue-950 text-white flex justify-center 
			${padding ? `p-${padding}` : 'p-4'} 
			items-center font-bold text-xl 
			transition-all duration-200 ${className ?? ''} 
			hover:bg-blue-900
			disabled:opacity-70`}
			onClick={(e) => {
				e.preventDefault()
				onClick?.()
			}}
		>
			{children}
		</button>
	)
}

export default PrimaryButton
