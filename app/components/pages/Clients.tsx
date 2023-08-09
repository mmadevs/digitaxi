'use client'
import Image from 'next/image'
import Text from '../atoms/Text'
import Section from '../organisms/Section'
import PageLayout from '../templates/PageLayout'
import { useInView } from 'react-intersection-observer'

export default function Clients() {
	const { ref: fleetSectionRef, inView: fleetSectionInView } = useInView({
		initialInView: false
	})

	const clientsItems: Array<string> = Array(14)
		.fill('')
		.map((_, i) => `/clients/image${i + 1}.png`)

	return (
		<PageLayout id='clientes'>
			<Section
				bg='white'
				id='fleet-section'
				ref={fleetSectionRef}
				className={`
				${fleetSectionInView ? 'animate-fade' : 'opacity-0'}
			`}
			>
				<Text type='title' className=''>
					Principais clientes
				</Text>
				<Text type='paragraph' className='text-justify'>
					A DIGITÁXI ao longo de 24 anos de dedicação, busca
					fortalecer a parceria com seus clientes, garantindo a
					melhoria contínua na prestação do serviço e consequentemente
					um bom atendimento. Com orgulho apresentamos alguns dos
					clientes que já utilizam as soluções em transporte da
					Digitáxi.
				</Text>
				<ul className='flex flex-wrap gap-4 justify-center items-center'>
					{clientsItems.map((item) => (
						<li
							key={item}
							className='rounded-xl bg-blue-100 bg-opacity-50 w-24 h-20 p-2 lg:w-36 lg:h-24'
						>
							<div className='relative w-full h-full'>
								<Image
									className='object-scale-down'
									src={item}
									alt='Cliente'
									fill
								/>
							</div>
						</li>
					))}
				</ul>
			</Section>
		</PageLayout>
	)
}
