import { FunctionComponent, ReactNode } from 'react'

interface TextProps {
	type: 'emphasis' | 'error'
	children: string | string[] | ReactNode
	className?: string
}

const ColouredText: FunctionComponent<TextProps> = ({
	className = '',
	type,
	children
}) => {
	return (
		<span
			className={
				type === 'emphasis'
					? 'text-yellow-500'
					: type === 'error'
					? 'text-red-900'
					: '' + className
			}
		>
			{children}
		</span>
	)
}

export default ColouredText
