import { FunctionComponent, ReactNode } from 'react'

const CarouselItemContainer: FunctionComponent<{
	type: 'text' | 'image'
	children: ReactNode
}> = ({ type, children }) => (
	<li
		className={`rounded-xl min-w-full overflow-hidden snap-always 
		snap-center relative min-h-[8rem] 
			${type === 'text' ? 'p-1 sm:min-w-0 flex-1' : 'aspect-video'} 
			`}
	>
		{children}
	</li>
)

export default CarouselItemContainer
