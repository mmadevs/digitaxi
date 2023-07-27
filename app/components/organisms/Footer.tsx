import { FunctionComponent } from 'react'
import DevelopedBy from '../molecules/DevelopedBy'
import EnterpriseInfo from '../molecules/EnterpriseInfo'

const Footer: FunctionComponent = () => {
	return (
		<footer
			className={`w-full flex justify-center 
		md:justify-between gap-8 bg-white py-4 px-8 min-h-[7rem] flex-wrap`}
		>
			<DevelopedBy />
			<EnterpriseInfo />
		</footer>
	)
}

export default Footer
