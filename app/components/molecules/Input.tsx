import { FunctionComponent } from 'react'

const Input: FunctionComponent<{
	value: string | undefined
	setValue: (value: string) => void
	label: string
	long?: boolean
	className?: string
}> = ({ label, value, setValue, className = '', long = false }) => {
	return (
		<div className={`flex flex-col w-full ${className}`}>
			<label>{label}</label>
			{!long ? (
				<input
					className={`p-2 rounded-xl border-2 border-blue-950`}
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
			) : (
				<textarea
					rows={4}
					className={`p-2 rounded-xl border-2 border-blue-950 resize-none`}
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
			)}
		</div>
	)
}

export default Input
