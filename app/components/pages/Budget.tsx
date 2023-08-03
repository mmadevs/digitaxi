'use client'
import PrimaryButton from '../atoms/PrimaryButton'
import Section from '../organisms/Section'
import PageLayout from '../templates/PageLayout'
import Text from '../atoms/Text'
import { useInView } from 'react-intersection-observer'
import Input from '../molecules/Input'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { toast } from 'react-toastify'
import { send } from '@emailjs/browser'

interface InputLabel {
	key: 'name' | 'company' | 'email' | 'phone' | 'message'
	label: string
	className?: string
	long?: boolean
}

export default function Budget() {
	const [isSendButtonDisabled, setIsSendButtonDisabled] = useState(true)

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
		message: ''
	})

	const inputLabels: InputLabel[] = [
		{ label: 'Seu nome', key: 'name' },
		{ label: 'Empresa:', key: 'company' },
		{ label: 'E-mail:', key: 'email' },
		{ label: 'Telefone/Celular:', key: 'phone' },
		{
			label: 'O que você precisa?',
			key: 'message',
			className: 'col-span-2 row-span-2',
			long: true
		}
	]
	function recaptchaSuccessful(value: string | null) {
		value && setIsSendButtonDisabled(false)
	}
	async function sendMail() {
		try {
			setIsSendButtonDisabled(true)

			await send(
				process.env.NEXT_PUBLIC_SERVICE_KEY as string,
				process.env.NEXT_PUBLIC_TEMPLATE_KEY as string,
				formData,
				process.env.NEXT_PUBLIC_API_KEY as string
			)

			toast(`Sua solicitação foi enviada! Aguarde o nosso retorno.`, {
				type: 'success'
			})
		} catch (e: unknown) {
			toast(`Ocorreu um erro ao enviar sua solicitação!`, {
				type: 'success'
			})
			console.error((e as Error).stack, (e as Error).message)
		}
	}
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
                lg:grid lg:grid-cols-2 lg:grid-rows-6`}
				>
					{inputLabels.map((field) => (
						<Input
							key={field.key}
							label={field.label}
							long={field.long}
							className={field.className}
							value={(formData[field.key] as string) ?? ''}
							setValue={(value) =>
								setFormData((prev) => ({
									...prev,
									[field.key]: value
								}))
							}
						/>
					))}
					<div className='relative col-span-2 row-start-5 self-center place-self-center px-24'>
						<ReCAPTCHA
							className=''
							sitekey={
								process.env
									.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string
							}
							onChange={recaptchaSuccessful}
						/>
					</div>
					<PrimaryButton
						className='col-span-2 row-start-6 self-center place-self-center px-24'
						disabled={isSendButtonDisabled}
						onClick={sendMail}
					>
						Enviar
					</PrimaryButton>
				</form>
			</Section>
		</PageLayout>
	)
}
