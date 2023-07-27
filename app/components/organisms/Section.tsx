'use client'
import { ReactNode, forwardRef, ForwardRefRenderFunction } from 'react'

interface SectionProps {
	id: string
	bg: 'white' | 'cyan'
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
			className={`px-8 py-16 ${className}
		${bg === 'cyan' ? 'bg-blue-400 bg-opacity-10' : 'bg-white'}
		`}
		>
			<div
				ref={ref}
				className={`animate-duration-1000
				flex flex-col gap-4 max-w-6xl mx-auto ${className ?? ''}`}
			>
				{children}
			</div>
		</section>
	)
}

export default forwardRef(Section)
