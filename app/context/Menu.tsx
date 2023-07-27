'use client'
import {
	Dispatch,
	FunctionComponent,
	ReactNode,
	SetStateAction,
	createContext,
	useContext,
	useState
} from 'react'

const MenuContext = createContext<{
	isMenuOpen: boolean
	setIsMenuOpen: Dispatch<SetStateAction<boolean>>
}>({ isMenuOpen: false, setIsMenuOpen: () => {} })

export const MenuProvider: FunctionComponent<{
	children: ReactNode | ReactNode[]
}> = ({ children }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	return (
		<MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
			{children}
		</MenuContext.Provider>
	)
}

export const useMenu = () => useContext(MenuContext)
