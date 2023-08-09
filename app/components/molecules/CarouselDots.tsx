import { FunctionComponent, ReactNode } from 'react'

const CarouselDots: FunctionComponent<{
	children: ReactNode[]
	className?: string
}> = ({ children, className }) => {
	return (
		<ul
			className={`absolute w-full bottom-0 mb-4 left-0 mx-auto flex gap-2 
			items-center justify-center ${className ?? ''}`}
		>
			{children}
		</ul>
	)
}

export default CarouselDots
