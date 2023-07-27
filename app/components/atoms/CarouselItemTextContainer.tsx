import { FunctionComponent, ReactNode } from 'react'

const CarouselItemTextContainer: FunctionComponent<{
	children: ReactNode | ReactNode[]
}> = ({ children }) => (
	<div
		className={`bg-blue-950 rounded-xl p-2 
					flex flex-col gap-1 min-h-full text-center`}
	>
		{children}
	</div>
)

export default CarouselItemTextContainer
