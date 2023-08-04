'use client'
import Text from '../atoms/Text'
import FleetItem from '../molecules/FleetItem'
import Section from '../organisms/Section'
import PageLayout from '../templates/PageLayout'
import { useInView } from 'react-intersection-observer'

export default function Fleet() {
	const { ref: fleetSectionRef, inView: fleetSectionInView } = useInView({
		initialInView: false
	})

	return (
		<PageLayout id='frota'>
			<Section
				bg='cyan'
				id='fleet-section'
				ref={fleetSectionRef}
				className={`
				${fleetSectionInView ? 'animate-fade-left' : 'opacity-0'}
			`}
			>
				<Text type='title' className=''>
					Nossa frota
				</Text>
				<Text type='paragraph' className='text-justify'>
					Nossos veículos dispõem de conforto e segurança para
					qualquer demanda que o cliente desejar. Somos a maior
					cooperativa em atuação e com frota no Polo Petroquímico de
					Camaçari, essa presença reflete a confiança dos nossos
					clientes nos serviços da Digitaxi.
				</Text>
				<div className='flex flex-wrap gap-8 justify-center'>
					<FleetItem
						image='/fleet/image1.png'
						title='Sedan'
						subtitle='4 passageiros'
					/>
					<FleetItem
						image='/fleet/image2.png'
						title='Minivan'
						subtitle='6 passageiros'
					/>
				</div>
			</Section>
		</PageLayout>
	)
}
