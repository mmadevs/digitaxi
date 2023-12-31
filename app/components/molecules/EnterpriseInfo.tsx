import { FunctionComponent } from 'react'
import Text from '../atoms/Text'
import Image from 'next/image'
import { GiPhone } from 'react-icons/gi'
import { FiAtSign } from 'react-icons/fi'
const EnterpriseInfo: FunctionComponent = () => {
	return (
		<div className='text-center flex flex-col md:items-end items-center min-h-[4rem]'>
			<div className='relative flex-1 w-32'>
				<Image
					className='object-scale-down'
					src={'/logo.svg'}
					alt='Logo da DigiTaxi'
					fill
				/>
			</div>
			<a
				href={'tel:+557136251725'}
				className='flex text-sm items-center gap-1'
			>
				<GiPhone className='text-sm' />
				<Text type='smaller'>(71) 3625-1725</Text>
			</a>
			<a
				href={'mailto:atendimento@digitaxi.coop.br'}
				className='flex text-sm items-center gap-1'
			>
				<FiAtSign className='text-sm' />
				<Text type='smaller'>atendimento@digitaxi.coop.br</Text>
			</a>
			<Text type='smaller'>Todos os direitos reservados | 2023</Text>
		</div>
	)
}

export default EnterpriseInfo
