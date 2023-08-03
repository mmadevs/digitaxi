'use client'
import { FunctionComponent, useEffect, useState } from 'react'
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
				<Menu className='lg:hidden' items={navItems} />,
				app
			)
		}
		return <></>
	}

	const [scrollPosition, setScrollPosition] = useState(0)

	const handleScroll = () => {
		const position = window.scrollY
		setScrollPosition(position)
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true })

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<header className='flex flex-col bg-blue-400 bg-opacity-10 min-h-[160px]'>
			<HeaderTopInfo />
			<div
				className={`z-50 flex-1 flex flex-wrap items-center p-1 transition-all justify-between ${
					scrollPosition >= 160
						? 'fixed top-0 w-full bg-blue-950 drop-shadow-md'
						: ''
				}`}
			>
				<div className='relative px-4 flex-1 min-h-[40px] max-w-[250px]'>
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
