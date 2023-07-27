import { FunctionComponent } from 'react'
import { GiPhone } from 'react-icons/gi'
import { FiAtSign } from 'react-icons/fi'
import Text from '../atoms/Text'

const HeaderTopInfo: FunctionComponent = () => {
	return (
		<header className='w-full flex flex-wrap items-center py-5 px-1 lg:px-4 gap-4 lg:gap-8 justify-start bg-blue-950 text-white'>
			<Text className='max-md:hidden font-bold' type='paragraph'>
				Fale conosco!
			</Text>
			<span className='flex text-sm items-center gap-1'>
				<GiPhone />
				<Text type='paragraph'>(71) 3625-1725</Text>
			</span>
			<span className='flex text-sm items-center gap-1'>
				<FiAtSign />
				<Text type='paragraph'>atendimento@digitaxi.coop.br</Text>
			</span>
		</header>
	)
}

export default HeaderTopInfo
