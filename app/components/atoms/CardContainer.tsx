import { FunctionComponent, ReactNode } from 'react'

const CardContainer: FunctionComponent<{
	square?: boolean
	children?: ReactNode | ReactNode[]
	className?: string
}> = ({ children, className, square = false }) => (
	<div
		className={`rounded-xl flex border-2 border-blue-950 ${
			square ? 'aspect-square' : ''
		} ${className ?? ''} ${
			className?.includes('flex-row') ? '' : 'flex-col'
		} ${className?.includes('p-') ? '' : 'p-8'}`}
	>
		{children}
	</div>
)

export default CardContainer
