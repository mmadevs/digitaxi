'use client'
import Text from '../atoms/Text'
import Section from '../organisms/Section'
import PageLayout from '../templates/PageLayout'
import { useInView } from 'react-intersection-observer'
import { PiTarget } from 'react-icons/pi'
import { TbScanEye } from 'react-icons/tb'
import AboutItem from '../molecules/AboutItem'
import ServicesItem from '../molecules/ServicesItem'
import { MdDiversity3, MdBalance } from 'react-icons/md'
import { FaUserTie, FaPeopleCarry } from 'react-icons/fa'

export default function About() {
	const { ref: focusSectionRef, inView: focusSectionInView } = useInView({
		initialInView: false,
		trackVisibility: true,
		delay: 100
	})
	const { ref: servicesSectionRef, inView: servicesSectionInView } =
		useInView({
			initialInView: false,
			trackVisibility: true,
			delay: 100
		})

	const aboutItems = [
		{
			icon: <PiTarget />,
			title: 'MISSÃO',
			subtitle: `Atender com excelência as demandas e necessidades dos nossos clientes, oferecendo serviços de transporte com uma 
			frota moderna de veículos seguros e confortáveis em conformidade com a legislação vigente de trânsito brasileiro.`
		},
		{
			icon: <TbScanEye />,
			title: 'VISÃO',
			subtitle: `Ser referência em qualidade e segurança na prestação de serviços de transporte, 
			para as empresas das mais diversas áreas de atuação na região metropolitana.`
		},
		{
			icon: <MdBalance />,
			title: 'VALORES',
			subtitle: `A DIGITÁXI é guiada por valores cooperativistas de ajuda mútua, honestidade, transparência, 
				gestão democrática, igualdade entre os cooperados, e responsabilidade social com seus concorrentes.`
		},
		{
			icon: <MdDiversity3 />,
			title: 'DIVERSIDADE',
			subtitle: `Respeitar a diversidade é compreender que todos somos iguais e, ao mesmo tempo, reconhecer a singularidade e as 
				diferenças de cada um. Somos engajados em cooperar diariamente com o respeito à todos.`
		}
	]

	return (
		<PageLayout id='sobre'>
			<Section
				bg='white'
				id='focus-section'
				ref={focusSectionRef}
				className={`
				${focusSectionInView ? `animate-fade-right` : 'opacity-0'}
			`}
			>
				<Text type='title' className=''>
					Nosso foco
				</Text>
				<Text type='paragraph' className='text-justify'>
					Nossa principal premissa consiste em fornecer soluções ágeis
					para os nossos clientes no segmento de transporte executivo
					e corporativo de passageiros.
				</Text>
				<ul className='flex flex-col gap-8'>
					{aboutItems.map((item) => (
						<AboutItem
							key={item.title}
							title={item.title}
							subtitle={item.subtitle}
						>
							{item.icon}
						</AboutItem>
					))}
				</ul>
			</Section>
			<Section
				bg='cyan'
				id='services-section'
				ref={servicesSectionRef}
				className={`
				${servicesSectionInView ? 'animate-fade-up' : 'opacity-0'}
			`}
			>
				<Text type='title' className=''>
					Nossos serviços
				</Text>
				<Text type='paragraph' className='text-justify'>
					Dispomos de soluções personalizadas para os nossos clientes
					nos ramos de transporte executivo e corporativo de
					passageiros.
				</Text>
				<div className='flex flex-wrap gap-8 px-8 justify-center items-center'>
					<ServicesItem title='Executivo'>
						<FaUserTie />
					</ServicesItem>
					<ServicesItem title='Corporativo'>
						<FaPeopleCarry />
					</ServicesItem>
				</div>
			</Section>
		</PageLayout>
	)
}
