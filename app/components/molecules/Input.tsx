import { FunctionComponent, useState } from 'react'

const Input: FunctionComponent<{
	value: string | undefined
	setValue: (value: string) => void
	label: string
	long?: boolean
	className?: string
	required?: boolean
}> = ({
	label,
	value,
	setValue,
	className = '',
	long = false,
	required = true
}) => {
	const [error, setError] = useState<string | undefined>()
	return (
		<div className={`flex flex-col w-full ${className}`}>
			<label htmlFor={`${label.replaceAll(' ', '')}-input`}>
				{label}
			</label>
			<textarea
				id={`${label.replaceAll(' ', '')}-input`}
				rows={long ? 4 : 1}
				className={`p-2 rounded-xl border-2 border-blue-950 resize-none`}
				value={value}
				onChange={(e) => {
					const currentValue = e.target.value
					if (currentValue) setError(undefined)
					setValue(currentValue)
				}}
				onBlur={() => {
					if (!value && required) {
						setError('Este campo é obrigatório')
					} else {
						setError(undefined)
					}
				}}
			/>
			{error && <small className='text-red-900'>{error}</small>}
		</div>
	)
}

export default Input
