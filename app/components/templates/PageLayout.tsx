'use client'
import { FunctionComponent, ReactNode } from 'react'

interface PageLayoutProps {
	id: string
	className?: string
	children: ReactNode | ReactNode[]
}

const PageLayout: FunctionComponent<PageLayoutProps> = ({
	id,
	className,
	children
}) => {
	return (
		<main
			id={id}
			className={`relative lg:p-4 py-4 gap-8 w-full 
			flex flex-col overflow-hidden bg-gray-50 text-black 
			${className ?? ''}`}
		>
			{children}
		</main>
	)
}

export default PageLayout
