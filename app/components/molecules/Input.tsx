import { FunctionComponent, useState, createRef } from 'react'
import InputMask from 'react-input-mask'

const Input: FunctionComponent<{
	value: string | undefined
	setValue: (value: string) => void
	label: string
	long?: boolean
	className?: string
	required?: boolean
	type?: 'text' | 'name' | 'tel' | 'email'
	mask?: string
}> = ({
	label,
	value,
	setValue,
	className = '',
	required = true,
	type = 'text',
	mask = ''
}) => {
	const [error, setError] = useState<string | undefined>()
	const inputRef = createRef<HTMLInputElement>()
	return (
		<div className={`flex flex-col w-full ${className}`}>
			<label htmlFor={`${label.replaceAll(' ', '')}-input`}>
				{label}
			</label>
			<div
				className='container cursor-text flex-1 rounded-xl border-2 border-blue-950 overflow-y-auto'
				onClick={() => inputRef?.current?.focus()}
			>
				<InputMask
					mask={mask}
					value={value}
					onChange={(e) => {
						const currentValue = e.target.value
						if (currentValue) setError(undefined)
						setValue(currentValue)
					}}
					onBlur={() => {
						const cleanedValue = value?.replace(/[^a-zA-Z0-9]/g, '')
						if (!cleanedValue && required) {
							setError('Este campo é obrigatório')
						} else {
							setError(undefined)
						}
					}}
				>
					<input
						ref={inputRef}
						id={`${label.replaceAll(' ', '')}-input`}
						type={type}
						className={`p-2 rounded-xl w-full h-auto bg-transparent`}
					/>
				</InputMask>
			</div>
			<small
				className={
					error
						? 'text-red-900'
						: 'text-white opacity-0 pointer-events-none'
				}
			>
				{error ?? ' .'}
			</small>
		</div>
	)
}

export default Input
