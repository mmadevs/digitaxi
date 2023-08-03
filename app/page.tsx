'use client'
import { useEffect } from 'react'
import Footer from './components/organisms/Footer'
import Header from './components/organisms/Header'
import About from './components/pages/About'
import Budget from './components/pages/Budget'
import Clients from './components/pages/Clients'
import Fleet from './components/pages/Fleet'
import Home from './components/pages/Home'
import { MenuProvider, useMenu } from './context/Menu'

const Page = () => (
	<MenuProvider>
		<Pages />
	</MenuProvider>
)

export default Page

function Pages() {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	const { isMenuOpen } = useMenu()
	return (
		<div
			id='pages'
			className={`${isMenuOpen ? '' : 'overflow-auto scroll-smooth'}
			`}
		>
			<Header />
			<Home />
			<Fleet />
			<About />
			<Clients />
			<Budget />
			<Footer />
		</div>
	)
}
