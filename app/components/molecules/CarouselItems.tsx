import { FunctionComponent, ReactNode } from 'react'

const CarouselItems: FunctionComponent<{
	children: ReactNode[]
	_ref: React.LegacyRef<HTMLUListElement>
}> = ({ children, _ref }) => {
	return (
		<ul
			ref={_ref}
			className={`w-full flex overflow-x-auto 
		no-scrollbar scroll-smooth snap-mandatory snap-x gap-4 lg:gap-8`}
		>
			{children}
		</ul>
	)
}

export default CarouselItems
