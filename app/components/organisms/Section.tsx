'use client'
import { ReactNode, forwardRef, ForwardRefRenderFunction } from 'react'

interface SectionProps {
	id: string
	bg: 'white' | 'cyan' | 'darkblue'
	className?: string
	children: ReactNode[]
}

const Section: ForwardRefRenderFunction<HTMLDivElement, SectionProps> = (
	{ bg, children, id, className },
	ref
) => {
	return (
		<section
			id={id}
			className={`px-8 py-16 shadow-lg ${className}
		${bg === 'cyan' ? 'bg-blue-50' : bg === 'white' ? 'bg-white' : 'bg-blue-950'}
		`}
		>
			<div
				ref={ref}
				className={`animate-duration-1000
				flex flex-col gap-4 lg:gap-8 max-w-7xl mx-auto ${className ?? ''}`}
			>
				{children}
			</div>
		</section>
	)
}

export default forwardRef(Section)
