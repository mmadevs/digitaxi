'use client'
import React, { FunctionComponent } from 'react'
import PrimaryButton from '../atoms/PrimaryButton'
import { GiHamburgerMenu } from 'react-icons/gi'

const BurgerButton: FunctionComponent<{
	openMenu: () => void
}> = ({ openMenu }) => {
	return (
		<React.Fragment>
			<PrimaryButton
				padding={2}
				className='rounded-md mx-4 lg:hidden'
				onClick={openMenu}
			>
				<GiHamburgerMenu className='text-xl' />
			</PrimaryButton>
		</React.Fragment>
	)
}

export default BurgerButton
