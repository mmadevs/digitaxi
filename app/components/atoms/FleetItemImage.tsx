import Image from 'next/image'
import { FunctionComponent } from 'react'

const FleetItemImage: FunctionComponent<{
	value: string
}> = ({ value }) => (
	<Image className={`object-scale-down`} src={value} alt='Veículos' fill />
)

export default FleetItemImage
