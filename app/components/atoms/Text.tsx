import { FunctionComponent, ReactNode } from 'react'

interface TextProps {
	type: 'title' | 'label' | 'subtitle' | 'paragraph' | 'smaller'
	children: string | string[] | ReactNode
	className?: string
	id?: string
}

const Text: FunctionComponent<TextProps> = ({
	id,
	className,
	type,
	children
}) => {
	return type === 'title' ? (
		<h1
			id={id}
			className={`font-bold text-blue-950 text-xl ${
				className ?? ''
			} lg:text-4xl`}
		>
			{children}
		</h1>
	) : type === 'label' ? (
		<h2
			id={id}
			className={`font-bold text-blue-950 text-lg lg:text-xl ${
				className ?? ''
			}`}
		>
			{children}
		</h2>
	) : type === 'subtitle' ? (
		<h3 id={id} className={`${className ?? ''}`}>
			{children}
		</h3>
	) : type === 'paragraph' ? (
		<p id={id} className={`${className ?? ''} text-md lg:text-lg`}>
			{children}
		</p>
	) : type === 'smaller' ? (
		<small id={id} className={`${className ?? ''} text-xs lg:text-sm`}>
			{children}
		</small>
	) : (
		<></>
	)
}

export default Text
