import { HousesList } from '@/components/houses-list'
import { houses } from '@/data/houses'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Каталог каркасных домов под ключ - все проекты',
	description: `Полный каталог каркасных домов под ключ. ${houses.length}+ готовых проектов домов различной площади и комплектации. Проекты эконом, комфорт и премиум класса. Строительство от 2 месяцев с гарантией.`,
	keywords: [
		'каталог каркасных домов',
		'проекты каркасных домов',
		'каркасные дома под ключ цены',
		'готовые проекты домов',
		'купить каркасный дом',
	],
	openGraph: {
		title: 'Каталог каркасных домов под ключ - все проекты',
		description: `${houses.length}+ готовых проектов каркасных домов. Эконом, комфорт и премиум класс. Строительство от 2 месяцев.`,
		url: 'https://stroiremont156rf.ru/karkasnye-doma-pod-kluch',
		images: [
			{
				url: '/karkas-dom2.jpg',
				width: 1200,
				height: 630,
				alt: 'Каталог каркасных домов',
			}
		],
	},
}

export default function AllKarkasHousesPage() {
  return (
    <div className="flex flex-col">
			<HousesList houses={houses} />
	</div>
  )
}
