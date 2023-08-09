'use client'
import React, { FunctionComponent, useEffect, useState } from 'react'
import CarouselItems from '../molecules/CarouselItems'
import CarouselDots from '../molecules/CarouselDots'
import CarouselItem from '../molecules/CarouselItem'
import CarouselDot from '../atoms/CarouselDot'

const Carousel: FunctionComponent<{
	id: string
	className?: string
	items: { title?: string; value: string; type: 'text' | 'image' }[]
	dots?: boolean
}> = ({ id, items, className, dots = true }) => {
	const [selectedIndex, setSelectedIndex] = useState(1)
	const itemsRef = React.createRef<HTMLUListElement>()

	useEffect(() => {
		const scrollItems = () => {
			if (itemsRef.current && items.length) {
				console.log(itemsRef.current)
				const scrollWidth = itemsRef.current.scrollWidth
				const scrollLeft = itemsRef.current.scrollLeft
				const scrollOne = scrollWidth / items.length

				if (scrollLeft + scrollOne < scrollWidth) {
					itemsRef.current.scrollLeft += scrollOne
					const index =
						Math.ceil(scrollWidth / itemsRef.current.scrollLeft) - 1

					if (index < items.length) {
						setSelectedIndex(index)
					}
				} else {
					itemsRef.current.scrollLeft = 0
					setSelectedIndex(0)
				}
			}
		}
		const timer = setInterval(() => {
			scrollItems()
		}, 3000)

		return () => clearInterval(timer)
	}, [itemsRef, items])

	return (
		<div
			id={id}
			className={`relative p-1 min-h-0 h-min
				${className ?? ''}`}
		>
			<CarouselItems _ref={itemsRef}>
				{items.map((item, i) => (
					<CarouselItem
						key={item.value}
						item={item}
						selected={selectedIndex === i}
					/>
				))}
			</CarouselItems>
			{dots && (
				<CarouselDots
					className={`${items.some((item) =>
						item.type === 'text' ? '' : ''
					)}`}
				>
					{items.map((item, i) => (
						<CarouselDot
							key={item.value}
							isSelected={selectedIndex === i}
						/>
					))}
				</CarouselDots>
			)}
		</div>
	)
}

export default Carousel
