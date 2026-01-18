'use client'

import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Separator } from '@/components/ui/separator'
import { houses } from '@/data/houses'
import {
	ArrowLeft,
	Check,
	ChevronLeft,
	ChevronRight,
	Home,
	Mail,
	Maximize,
	Maximize2,
	Phone,
	Ruler,
	Share2,
	X,
	ZoomIn
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { use, useState } from 'react'

export default function HousePage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = use(params)
	const house = houses.find(h => h.slug === slug)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [modalImageIndex, setModalImageIndex] = useState(0)

	if (!house) {
		notFound()
	}

	// Все изображения для галереи
	const allImages = [house.images.preview, ...house.images.gallery]
	if (house.images.plan) {
		allImages.push(house.images.plan)
	}

	// Открыть модальное окно с изображением
	const openImageModal = (imageUrl: string) => {
		const index = allImages.findIndex(img => img === imageUrl)
		setModalImageIndex(index >= 0 ? index : 0)
		setIsModalOpen(true)
	}

	// Навигация по изображениям в модальном окне
	const goToPrevImage = () => {
		setModalImageIndex((prev) => (prev > 0 ? prev - 1 : allImages.length - 1))
	}

	const goToNextImage = () => {
		setModalImageIndex((prev) => (prev < allImages.length - 1 ? prev + 1 : 0))
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

	return (
		<div className="flex flex-col min-h-screen">
			{/* Навигация назад */}
			<section className="py-4 px-4 sm:px-6 lg:px-8 bg-card/30">
				<div className="container mx-auto">
					<Link href="/vse-karkasnye-doma">
						<Button variant="ghost" className="gap-2">
							<ArrowLeft className="h-4 w-4" />
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
						<div className="space-y-4">
							{/* Карусель с главными изображениями */}
							<Carousel className="w-full">
								<CarouselContent>
									{allImages.map((img, index) => (
										<CarouselItem key={index}>
											<button
												onClick={() => openImageModal(img)}
												className="relative w-full aspect-4/3 overflow-hidden rounded-lg border border-border/50 group cursor-zoom-in"
											>
												<Image
													src={img}
													alt={`${house.name} - фото ${index + 1}`}
													fill
													className="object-cover transition-transform duration-300 group-hover:scale-105"
													sizes="(max-width: 1024px) 100vw, 50vw"
													priority={index === 0}
												/>
												{/* Иконка увеличения при наведении */}
												<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
													<ZoomIn className="h-12 w-12 text-white" />
												</div>
											</button>
										</CarouselItem>
									))}
								</CarouselContent>
								<CarouselPrevious className="left-4" />
								<CarouselNext className="right-4" />
							</Carousel>

							{/* Миниатюры */}
							<div className="grid grid-cols-4 md:grid-cols-5 gap-2">
								{allImages.map((img, index) => (
									<button
										key={index}
										onClick={() => openImageModal(img)}
										className="relative aspect-4/3 overflow-hidden rounded border-2 transition-all border-border/50 hover:border-primary/50 group"
									>
										<Image
											src={img}
											alt={`${house.name} - миниатюра ${index + 1}`}
											fill
											className="object-cover group-hover:scale-105 transition-transform"
											sizes="(max-width: 768px) 25vw, 10vw"
										/>
									</button>
								))}
							</div>
						</div>

						{/* Информация о доме */}
						<div className="space-y-6">
							{/* Заголовок */}
							<div>
								<div className="flex items-center gap-3 mb-4">
									<Badge variant={house.segment === 'premium' ? 'default' : 'secondary'}>
										{getSegmentName(house.segment)}
									</Badge>
									<Button variant="ghost" size="icon">
										<Share2 className="h-4 w-4" />
									</Button>
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
										<CardContent className="pt-2	 flex items-center gap-3">
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
								<Button size="lg" className="w-full gap-2">
									<Phone className="h-5 w-5" />
									Позвонить менеджеру
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
								<Link href={`/vse-karkasnye-doma/${similarHouse.slug}`} key={similarHouse.id}>
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
													{formatPrice(similarHouse.price)}
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
							<Button size="lg" className="gap-2">
								<Phone className="h-5 w-5" />
								Позвонить
							</Button>
							<Button size="lg" variant="outline" className="gap-2">
								<Mail className="h-5 w-5" />
								Написать нам
							</Button>
						</CardContent>
					</Card>
				</div>
			</section>

			{/* Модальное окно для просмотра изображений */}
			<AlertDialog open={isModalOpen} onOpenChange={setIsModalOpen}>
				<AlertDialogContent className="max-w-[98vw]! w-[98vw]! h-[98vh]! p-0 border-0 bg-black/95">
					{/* Скрытый заголовок для доступности */}
					<AlertDialogTitle className="sr-only">
						Просмотр изображения {modalImageIndex + 1} из {allImages.length}
					</AlertDialogTitle>
					
					<div className="relative w-full h-full">
						{/* Кнопка закрытия */}
						<button
							onClick={() => setIsModalOpen(false)}
							className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
						>
							<X className="h-6 w-6" />
						</button>

						{/* Изображение */}
						<div className="relative w-full h-full flex items-center justify-center p-4">
							<Image
								src={allImages[modalImageIndex]}
								alt={`${house.name} - фото ${modalImageIndex + 1}`}
								fill
								className="object-contain"
								sizes="100vw"
								priority
							/>
						</div>

						{/* Кнопки навигации */}
						{allImages.length > 1 && (
							<>
								<button
									onClick={goToPrevImage}
									className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
								>
									<ChevronLeft className="h-8 w-8" />
								</button>
								<button
									onClick={goToNextImage}
									className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
								>
									<ChevronRight className="h-8 w-8" />
								</button>
							</>
						)}

						{/* Индикатор изображения */}
						<div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-black/50 text-white text-sm">
							{modalImageIndex + 1} / {allImages.length}
						</div>

						{/* Миниатюры */}
						<div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-50 max-w-4xl w-full px-4">
							<div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide justify-center">
								{allImages.map((img, index) => (
									<button
										key={index}
										onClick={() => setModalImageIndex(index)}
										className={`relative shrink-0 w-16 h-16 rounded border-2 overflow-hidden transition-all ${
											index === modalImageIndex
												? 'border-primary scale-110'
												: 'border-white/30 hover:border-white/60'
										}`}
									>
										<Image
											src={img}
											alt={`Миниатюра ${index + 1}`}
											fill
											className="object-cover"
											sizes="64px"
										/>
									</button>
								))}
							</div>
						</div>
					</div>
				</AlertDialogContent>
			</AlertDialog>
		</div>
	)
}
