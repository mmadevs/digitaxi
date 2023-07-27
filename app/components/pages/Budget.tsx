'use client'
import PrimaryButton from '../atoms/PrimaryButton'
import Section from '../organisms/Section'
import PageLayout from '../templates/PageLayout'
import Text from '../atoms/Text'
import { useInView } from 'react-intersection-observer'
import Input from '../molecules/Input'
import { useState } from 'react'

export default function Budget() {
	const { ref: budgetSectionRef, inView: budgetSectionInView } = useInView({
		initialInView: false,
		trackVisibility: true,
		delay: 100
	})

	const [formData, setFormData] = useState({
		name: '',
		company: '',
		email: '',
		phone: '',
		about: ''
	})

	return (
		<PageLayout id='orcamento' className=''>
			<Section
				ref={budgetSectionRef}
				id='budget-section'
				bg='cyan'
				className={`items-stretch justify-stretch py-8 ${
					budgetSectionInView ? `animate-fade-up` : 'opacity-0'
				}`}
			>
				<Text type='title' className=''>
					Solicitar orçamento
				</Text>
				<Text type='paragraph' className='text-justify'>
					Estamos prontos para entender a sua demanda e oferecer a
					melhor alternativa!
				</Text>
				<form
					className={`flex flex-col gap-2 
                lg:grid lg:grid-cols-2 lg:grid-rows-5`}
				>
					<Input
						label='Seu nome:'
						value={formData.name}
						setValue={(value) =>
							setFormData((prev) => ({ ...prev, name: value }))
						}
					/>
					<Input
						label='Empresa:'
						value={formData.company}
						setValue={(value) =>
							setFormData((prev) => ({ ...prev, company: value }))
						}
					/>
					<Input
						label='E-mail:'
						value={formData.email}
						setValue={(value) =>
							setFormData((prev) => ({ ...prev, email: value }))
						}
					/>
					<Input
						label='Telefone/Celular:'
						value={formData.phone}
						setValue={(value) =>
							setFormData((prev) => ({ ...prev, phone: value }))
						}
					/>
					<Input
						className='col-span-2 row-span-2'
						label='Conta um pouco sobre o que você precisa:'
						value={formData.about}
						long
						setValue={(value) =>
							setFormData((prev) => ({ ...prev, about: value }))
						}
					/>
					<PrimaryButton className='col-span-2 row-start-5 self-center place-self-center px-24'>
						Enviar
					</PrimaryButton>
				</form>
			</Section>
		</PageLayout>
	)
}
