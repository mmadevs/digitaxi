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

	const clientsItems = [
		'/clients/image1.png',
		'/clients/image2.png',
		'/clients/image3.png',
		'/clients/image4.png',
		'/clients/image5.png',
		'/clients/image6.png',
		'/clients/image7.png',
		'/clients/image8.png',
		'/clients/image9.png',
		'/clients/image10.png',
		'/clients/image11.png'
	]

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
					Com orgulho apresentamos alguns dos clientes que já utilizam
					as soluções em transporte da Digitáxi.
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
