'use client'
import PrimaryButton from '../atoms/PrimaryButton'
import Carousel from '../organisms/Carousel'
import Section from '../organisms/Section'
import PageLayout from '../templates/PageLayout'
import Text from '../atoms/Text'
import { useInView } from 'react-intersection-observer'

export default function Home() {
	const carouselItems = {
		introduction: [
			'/home/introduction/image1.png',
			'/home/introduction/image2.png'
		],
		whyUs: [
			{
				title: 'Padronização',
				value: 'Dispomos de motoristas bem treinados, uniformizados e devidamente qualificados.'
			},
			{
				title: 'Frota',
				value: 'Possuímos veículos atualizados, confortáveis e seguros para proporcionar a melhor experiência possível.'
			},
			{
				title: 'Tecnologia',
				value: 'Investimos para atendê-lo de forma eficiente. Nosso app fornece todo controle que você precisa.'
			},
			{
				title: 'Adaptabilidade',
				value: 'Buscamos entender a sua demanda e oferecer alternativas econômicas e eficientes.'
			}
		]
	}

	const { ref: introductionSectionRef, inView: introductionSectionInView } =
		useInView({ initialInView: true })
	const { ref: whyUsSectionRef, inView: whyUsSectionInView } = useInView({
		initialInView: true
	})

	return (
		<PageLayout id='inicio' className=''>
			<Section
				ref={introductionSectionRef}
				id='introduction-section'
				bg='cyan'
				className={`md:flex-row items-stretch justify-stretch pt-8 ${
					introductionSectionInView ? `animate-fade-up` : 'opacity-0'
				}`}
			>
				<Carousel
					id='carousel_introduction'
					className=''
					items={carouselItems.introduction.map((x) => ({
						type: 'image',
						value: x
					}))}
				/>
				<div className='flex flex-col justify-around gap-8'>
					<Text type='title' className=''>
						O transporte que você precisa está aqui!
					</Text>
					<Text type='paragraph' className='text-justify'>
						Contamos com cooperados experientes no ramo de
						transporte e veículos 100% atualizados. Estamos prontos
						para oferecer a qualidade a altura da sua empresa.
					</Text>
					<PrimaryButton
						className='self-center'
						onClick={() => {
							document
								.querySelector('#orcamento')
								?.scrollIntoView({ behavior: 'smooth' })
						}}
					>
						Solicitar orçamento
					</PrimaryButton>
				</div>
			</Section>
			<Section
				id='why_us-section'
				bg='white'
				className={`${
					whyUsSectionInView ? 'animate-fade-up' : 'opacity-0'
				}`}
				ref={whyUsSectionRef}
			>
				<Text type='title' id='why_us-text' className=''>
					Por que escolher a Digitáxi?
				</Text>
				<Text type='paragraph' className='text-justify'>
					Possuímos ampla experiência em nosso segmento, estamos
					estabelecidos a mais de 26 anos no mercado e
					estratégicamente localizados na cidade de Dias {"d'Ávila "}
					para atender as necessidades de clientes dos mais diversos
					segmentos.
				</Text>
				<Carousel
					id='carousel_why_us'
					className='lg:text-xl'
					dots={false}
					items={carouselItems.whyUs.map((x) => ({
						type: 'text',
						title: x.title,
						value: x.value
					}))}
				/>
			</Section>
		</PageLayout>
	)
}
