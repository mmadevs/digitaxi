import { NavBarItem } from '@/app/types/NavBarItem'
import { FunctionComponent } from 'react'
import MenuItem from '../atoms/MenuItem'

const MenuItems: FunctionComponent<{
	items: NavBarItem[]
}> = ({ items }) => {
	return (
		<ul className='gap-12 lg:gap-7 flex flex-col lg:flex-row'>
			{items.map((item) => (
				<MenuItem key={item.route} item={item} />
			))}
		</ul>
	)
}

export default MenuItems
