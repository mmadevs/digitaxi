'use client'
import { FunctionComponent } from 'react'
import EnterpriseLogo from '../atoms/EnterpriseLogo'
import HeaderTopInfo from '../molecules/HeaderTopInfo'
import BurgerButton from '../molecules/BurgerButton'
import Menu from './Menu'
import ReactDOM from 'react-dom'
import { useMenu } from '@/app/context/Menu'

const Header: FunctionComponent = () => {
	const navItems = [
		{ label: 'Início', route: '#inicio' },
		{ label: 'Frota', route: '#frota' },
		{ label: 'Sobre', route: '#sobre' },
		{ label: 'Clientes', route: '#clientes' },
		{ label: 'Orçamento', route: '#orcamento' }
	]

	const { isMenuOpen, setIsMenuOpen } = useMenu()

	const CreateMenu = () => {
		const app = document.querySelector('#pages')
		if (app) {
			return ReactDOM.createPortal(
				<Menu
					className='lg:hidden'
					items={navItems}
					close={() => setIsMenuOpen(false)}
				/>,
				app
			)
		}
		return <></>
	}
	return (
		<header className='flex flex-col bg-blue-400 bg-opacity-10'>
			<HeaderTopInfo />
			<div className=' flex-1 flex flex-wrap items-center p-5 justify-between'>
				<div className='relative flex-1 min-h-[80px] max-w-[250px]'>
					<EnterpriseLogo />
				</div>
				<BurgerButton openMenu={() => setIsMenuOpen(true)} />
				{isMenuOpen && <CreateMenu />}
				<Menu className='hidden lg:block' items={navItems} />
			</div>
		</header>
	)
}

export default Header
