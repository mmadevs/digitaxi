import { FunctionComponent } from 'react'
import { GiPhone } from 'react-icons/gi'
import { FiAtSign } from 'react-icons/fi'
import Text from '../atoms/Text'

const HeaderTopInfo: FunctionComponent = () => {
	return (
		<header className='w-full flex flex-wrap items-center py-3 px-1 lg:px-4 gap-4 lg:gap-8 justify-start bg-blue-950 text-white'>
			<Text className='max-md:hidden font-bold' type='smaller'>
				Fale conosco!
			</Text>
			<a
				href={'tel:+557136251725'}
				className='flex text-sm items-center gap-1'
			>
				<GiPhone />
				<Text type='smaller'>(71) 3625-1725</Text>
			</a>
			<a
				href={'mailto:atendimento@digitaxi.coop.br'}
				className='flex text-sm items-center gap-1'
			>
				<FiAtSign />
				<Text type='smaller'>atendimento@digitaxi.coop.br</Text>
			</a>
		</header>
	)
}

export default HeaderTopInfo
