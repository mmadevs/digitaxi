import Image from 'next/image'
import { FunctionComponent } from 'react'

const EnterpriseLogo: FunctionComponent = () => {
	return (
		<Image
			src={'/logo.svg'}
			alt='Logo da DigiTaxi'
			width={250}
			height={80}
		/>
	)
}

export default EnterpriseLogo
