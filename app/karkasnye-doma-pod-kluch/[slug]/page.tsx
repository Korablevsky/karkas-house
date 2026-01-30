import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { HouseGallery } from '@/components/house-gallery'
import { ShareButton } from '@/components/share-button'
import { houses } from '@/data/houses'
import {
	Check,
	Home,
	Mail,
	Maximize,
	Maximize2,
	Phone,
	Ruler,
} from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// Генерация статических параметров для всех домов
export async function generateStaticParams() {
	return houses.map((house) => ({
		slug: house.slug,
	}))
}

// Генерация динамических метаданных для каждого дома
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
	const { slug } = await params
	const house = houses.find(h => h.slug === slug)

	if (!house) {
		return {
			title: 'Дом не найден',
		}
	}

	return {
		title: `${house.name} - каркасный дом ${house.area} м² под ключ`,
		description: house.fullDescription,
		keywords: [
			`каркасный дом ${house.name}`,
			`дом ${house.area} м²`,
			`каркасный дом ${house.size.width}x${house.size.length}`,
			'каркасный дом под ключ',
			'строительство каркасного дома',
		],
		openGraph: {
			title: `${house.name} - каркасный дом ${house.area} м²`,
			description: house.shortDescription,
			url: `https://stroiremont156rf.ru/karkasnye-doma-pod-kluch/${house.slug}`,
			images: [
				{
					url: house.images.preview,
					width: 1200,
					height: 630,
					alt: `Каркасный дом ${house.name}`,
				}
			],
		},
	}
}

export default async function HousePage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params
	const house = houses.find(h => h.slug === slug)

	if (!house) {
		notFound()
	}

	// Все изображения для галереи
	const allImages = [house.images.preview, ...house.images.gallery]
	if (house.images.plan) {
		allImages.push(house.images.plan)
	}

	// Форматирование цены
	const formatPrice = (price: number) => {
		if (price === 0) return 'По запросу'
		return `от ${(price / 1000000).toFixed(1)} млн ₽`
	}

	// Получить название сегмента
	const getSegmentName = (segment: string) => {
		switch (segment) {
			case 'economy':
				return 'Эконом'
			case 'comfort':
				return 'Комфорт'
			case 'premium':
				return 'Премиум'
			default:
				return segment
		}
	}

	// Получить стили Badge для сегмента
	const getSegmentStyles = (segment: string) => {
		switch (segment) {
			case 'economy':
				return 'bg-green-500/90 text-white border-green-600 hover:bg-green-600'
			case 'comfort':
				return 'bg-orange-500/90 text-white border-orange-600 hover:bg-orange-600'
			case 'premium':
				return 'bg-gradient-to-r from-amber-500 to-yellow-500 text-white border-amber-600 hover:from-amber-600 hover:to-yellow-600'
			default:
				return 'bg-gray-500 text-white'
		}
	}

	// JSON-LD структурированные данные для продукта
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Product',
		name: house.name,
		description: house.fullDescription,
		image: `https://stroiremont156rf.ru${house.images.preview}`,
		url: `https://stroiremont156rf.ru/karkasnye-doma-pod-kluch/${house.slug}`,
		brand: {
			'@type': 'Brand',
			name: 'Стройремонт 156'
		},
		offers: {
			'@type': 'Offer',
			priceCurrency: 'RUB',
			price: house.price || undefined,
			availability: 'https://schema.org/InStock',
			url: `https://stroiremont156rf.ru/karkasnye-doma-pod-kluch/${house.slug}`,
		},
		additionalProperty: [
			{
				'@type': 'PropertyValue',
				name: 'Площадь',
				value: `${house.area} м²`
			},
			{
				'@type': 'PropertyValue',
				name: 'Размер',
				value: `${house.size.width}×${house.size.length} м`
			},
			{
				'@type': 'PropertyValue',
				name: 'Высота этажа',
				value: `${house.floorHeight} м`
			}
		]
	}

	return (
		<div className="flex flex-col min-h-screen">
			{/* JSON-LD структурированные данные */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			
			{/* Навигация назад */}
			<section className="py-4 px-4 sm:px-6 lg:px-8 bg-card/30">
				<div className="container mx-auto">
					<Link href="/karkasnye-doma-pod-kluch">
						<Button variant="ghost" className="gap-2">
							<Home className="h-4 w-4" />
							Вернуться к каталогу
						</Button>
					</Link>
				</div>
			</section>

			{/* Основная информация */}
			<section className="py-6 md:py-10 px-4 sm:px-6 lg:px-8">
				<div className="container mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
						{/* Галерея с каруселью */}
						<HouseGallery 
							houseName={house.name}
							houseArea={house.area}
							allImages={allImages}
						/>

						{/* Информация о доме */}
						<div className="space-y-6">
							{/* Заголовок */}
							<div>
								<div className="flex items-center gap-3 mb-4">
									<Badge className={getSegmentStyles(house.segment)}>
										{getSegmentName(house.segment)}
									</Badge>
									<ShareButton 
										title={house.name}
										description={house.shortDescription}
									/>
								</div>
								<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
									{house.name}
								</h1>
								<p className="text-lg text-muted-foreground">
									{house.shortDescription}
								</p>
							</div>

							<Separator />

							{/* Основные характеристики */}
							<div>
								<h2 className="text-xl font-semibold mb-4">Основные характеристики</h2>
								<div className="grid grid-cols-2 gap-4">
									<Card className="border-border/50">
										<CardContent className="pt-2 flex items-center gap-3">
											<div className="p-3 bg-primary/10 rounded-lg">
												<Maximize className="h-6 w-6 text-primary" />
											</div>
											<div>
												<p className="text-sm text-muted-foreground">Площадь</p>
												<p className="text-2xl font-bold">{house.area} м²</p>
											</div>
										</CardContent>
									</Card>

									<Card className="border-border/50">
										<CardContent className="pt-2 flex items-center gap-3">
											<div className="p-3 bg-primary/10 rounded-lg">
												<Maximize2 className="h-6 w-6 text-primary" />
											</div>
											<div>
												<p className="text-sm text-muted-foreground">Размеры</p>
												<p className="text-2xl font-bold">
													{house.size.width} × {house.size.length}
												</p>
											</div>
										</CardContent>
									</Card>

									<Card className="border-border/50">
										<CardContent className="pt-2 flex items-center gap-3">
											<div className="p-3 bg-primary/10 rounded-lg">
												<Home className="h-6 w-6 text-primary" />
											</div>
											<div>
												<p className="text-sm text-muted-foreground">Высота потолков</p>
												<p className="text-2xl font-bold">{house.floorHeight} м</p>
											</div>
										</CardContent>
									</Card>

									<Card className="border-border/50 bg-primary/5">
										<CardContent className="pt-2 flex items-center gap-3">
											<div className="p-3 bg-primary/10 rounded-lg">
												<Ruler className="h-6 w-6 text-primary" />
											</div>
											<div>
												<p className="text-sm text-muted-foreground">Цена</p>
												<p className="text-xl font-bold text-primary">
													{formatPrice(house.price)}
												</p>
											</div>
										</CardContent>
									</Card>
								</div>
							</div>

							<Separator />

							{/* Кнопки действий */}
							<div className="space-y-3">
								<Button size="lg" className="w-full gap-2" asChild>
									<Link href="tel:+79631801034">
										<Phone className="h-5 w-5" />
										Позвонить менеджеру
									</Link>
								</Button>
								<Button size="lg" variant="outline" className="w-full gap-2">
									<Mail className="h-5 w-5" />
									Оставить заявку
								</Button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Полное описание */}
			<section className="py-6 md:py-10 px-4 sm:px-6 lg:px-8 bg-card/30">
				<div className="container mx-auto">
					<Card>
						<CardHeader>
							<CardTitle className="text-2xl">Описание проекта</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-base text-muted-foreground leading-relaxed">
								{house.fullDescription}
							</p>
						</CardContent>
					</Card>
				</div>
			</section>

			{/* Детальная спецификация */}
			<section className="py-6 md:py-10 px-4 sm:px-6 lg:px-8">
				<div className="container mx-auto">
					<div className="mb-8">
						<h2 className="text-3xl font-bold mb-2">Техническая спецификация</h2>
						<p className="text-muted-foreground">
							Подробная информация о материалах и комплектации
						</p>
					</div>

					<Card>
						<CardContent className="pt-6">
							<div className="space-y-1">
								{house.specification.map((spec, index) => (
									<div key={spec.id}>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
											<div className="flex items-start gap-3">
												<div className="mt-1">
													<Check className="h-5 w-5 text-primary" />
												</div>
												<div>
													<p className="font-semibold text-foreground">{spec.title}</p>
												</div>
											</div>
											<div>
												<p className="text-muted-foreground">{spec.value}</p>
											</div>
										</div>
										{index < house.specification.length - 1 && <Separator />}
									</div>
								))}
							</div>
						</CardContent>
					</Card>
				</div>
			</section>

			{/* Планировка (если есть) */}
			{house.images.plan && (
				<section className="py-6 md:py-10 px-4 sm:px-6 lg:px-8 bg-card/30">
					<div className="container mx-auto">
						<div className="mb-8">
							<h2 className="text-3xl font-bold mb-2">Планировка дома</h2>
							<p className="text-muted-foreground">
								Детальный план расположения комнат
							</p>
						</div>

						<Card className="overflow-hidden">
							<CardContent className="p-0">
								<div className="relative w-full aspect-video">
									<Image
										src={house.images.plan}
										alt={`Планировка ${house.name}`}
										fill
										className="object-contain bg-background"
										sizes="(max-width: 1200px) 100vw, 1200px"
									/>
								</div>
							</CardContent>
						</Card>
					</div>
				</section>
			)}

			{/* Похожие проекты */}
			<section className="py-6 md:py-10 px-4 sm:px-6 lg:px-8">
				<div className="container mx-auto">
					<div className="mb-8">
						<h2 className="text-3xl font-bold mb-2">Похожие проекты</h2>
						<p className="text-muted-foreground">
							Другие дома, которые могут вас заинтересовать
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{houses
							.filter(h => h.id !== house.id && h.segment === house.segment)
							.slice(0, 3)
							.map(similarHouse => (
								<Link href={`/karkasnye-doma-pod-kluch/${similarHouse.slug}`} key={similarHouse.id}>
									<Card className="overflow-hidden border-border/50 hover:shadow-lg hover:border-primary/30 transition-all duration-300 h-full group">
										<div className="relative w-full aspect-4/3 overflow-hidden">
											<Image
												src={similarHouse.images.preview}
												alt={similarHouse.name}
												fill
												className="object-cover group-hover:scale-105 transition-transform duration-300"
												sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
											/>
										</div>

										<CardHeader>
											<CardTitle className="text-xl">{similarHouse.name}</CardTitle>
											<CardDescription className="line-clamp-2">
												{similarHouse.shortDescription}
											</CardDescription>
										</CardHeader>

										<CardContent>
											<div className="flex items-center justify-between">
												<div className="flex items-center gap-2 text-sm text-muted-foreground">
													<Maximize className="h-4 w-4" />
													<span>{similarHouse.area} м²</span>
												</div>
												<span className="text-lg font-bold text-primary">
													По запросу
												</span>
											</div>
										</CardContent>
									</Card>
								</Link>
							))}
					</div>
				</div>
			</section>

			{/* CTA секция */}
			<section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
				<div className="container mx-auto">
					<Card className="border-primary/20">
						<CardHeader className="text-center">
							<CardTitle className="text-2xl md:text-3xl mb-2">
								Заинтересовал этот проект?
							</CardTitle>
							<CardDescription className="text-base">
								Свяжитесь с нами для получения подробной консультации и расчета стоимости
							</CardDescription>
						</CardHeader>
						<CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button size="lg" className="gap-2" asChild>
								<Link href="tel:+79631801034">
									<Phone className="h-5 w-5" />
									Позвонить 
								</Link>
							</Button>
							<Button size="lg" variant="outline" className="gap-2">
								<Mail className="h-5 w-5" />
								Написать нам
							</Button>
						</CardContent>
					</Card>
				</div>
			</section>
		</div>
	)
}
