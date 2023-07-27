import { FunctionComponent } from 'react'
import Text from '../atoms/Text'
import Image from 'next/image'
import Link from 'next/link'

const DevelopedBy: FunctionComponent = () => {
	return (
		<div className='text-center flex flex-col items-center min-h-[3rem]'>
			<Text type='smaller'>Site desenvolvido por:</Text>
			<Link
				href='https://www.mmadevs.com.br'
				className='relative flex-1 w-full'
			>
				<Image
					src='/footer/developers.png'
					alt='MMA Devs'
					className='object-scale-down'
					fill
				/>
			</Link>
		</div>
	)
}

export default DevelopedBy
