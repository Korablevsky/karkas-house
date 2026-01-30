'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { CatalogFilters } from '@/components/catalog-filters'
import { House } from '@/data/houses'
import { Home, Maximize, Maximize2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface HousesListProps {
	houses: House[]
}

export function HousesList({ houses }: HousesListProps) {
	const [filteredHouses, setFilteredHouses] = useState<House[]>(houses)

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

	return (
		<>
			{/* Hero секция */}
			<section className="relative py-6 md:py-10 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-card/50 to-background">
				<div className="container mx-auto">
					<div className="max-w-4xl mx-auto text-center mb-8">
						<div className="flex items-center justify-center gap-2 mb-4">
							<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
								Каталог каркасных домов
							</h1>
						</div>
						<p className="text-lg text-muted-foreground">
							Более {houses.length} готовых проектов домов для комфортной жизни
						</p>
					</div>

					{/* Поиск и фильтры */}
					<CatalogFilters 
						houses={houses}
						onFilteredHousesChange={setFilteredHouses}
					/>
				</div>
			</section>

			{/* Список проектов */}
			<section className="py-6 md:py-10 px-4 sm:px-6 lg:px-8">
				<div className="container mx-auto">
					{filteredHouses.length > 0 ? (
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{filteredHouses.map((project: House) => (
								<Card 
									key={project.id} 
									className="pt-0 overflow-hidden border-border/50 hover:shadow-lg hover:border-primary/30 transition-all duration-300 flex flex-col h-full group"
								>
									<Link href={`/karkasnye-doma-pod-kluch/${project.slug}`} className="block">
										<div className="relative w-full aspect-4/3 overflow-hidden">
											<Image 
												src={project.images.preview} 
												alt={project.name} 
												fill
												className="object-cover group-hover:scale-105 transition-transform duration-300"
												sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
											/>
											<Badge 
												className={`absolute top-3 right-3 ${getSegmentStyles(project.segment)}`}
											>
												{getSegmentName(project.segment)}
											</Badge>
										</div>
									</Link>
									
									<CardHeader className="flex-none">
										<div className="flex items-start justify-between">
											<Link href={`/karkasnye-doma-pod-kluch/${project.slug}`}>
												<CardTitle className="text-2xl hover:text-primary transition-colors">
													{project.name}
												</CardTitle>
											</Link>
										</div>
										<CardDescription className="text-base line-clamp-2">
											{project.shortDescription}
										</CardDescription>
									</CardHeader>
									
									<CardContent className="flex-1 flex flex-col justify-between space-y-4">
										<div className="space-y-3">
											<Separator />
											
											<div className="grid grid-cols-2 gap-3 text-sm">
												<div className="flex items-center gap-2 text-muted-foreground">
													<Maximize className="h-4 w-4" />
													<span className="font-medium text-foreground">{project.area} м²</span>
												</div>
												<div className="flex items-center gap-2 text-muted-foreground">
													<Maximize2 className="h-4 w-4" />
													<span className="font-medium text-foreground">{project.size.width} x {project.size.length} м</span>
												</div>
												<div className="flex items-center gap-2 text-muted-foreground col-span-2">
													<Home className="h-4 w-4" />
													<span className="font-medium text-foreground">{project.floorHeight} м</span>
												</div>
											</div>

											<Separator />
											
											<div className="flex items-center justify-between">
												<span className="text-sm text-muted-foreground">Цена:</span>
												<span className="text-xl font-bold text-primary">
													По запросу
												</span>
											</div>
										</div>

										<div className="flex gap-2">
											<Link href={`/karkasnye-doma-pod-kluch/${project.slug}`} className="flex-1">
												<Button className="w-full">
													Подробнее
												</Button>
											</Link>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					) : (
						<Card className="border-dashed">
							<CardContent className="flex flex-col items-center justify-center py-16">
								<Home className="h-16 w-16 text-muted-foreground/50 mb-4" />
								<CardTitle className="text-xl mb-2">Проекты не найдены</CardTitle>
								<CardDescription className="text-center mb-4">
									Попробуйте изменить параметры поиска или сбросить фильтры
								</CardDescription>
							</CardContent>
						</Card>
					)}
				</div>
			</section>

			{/* CTA секция */}
			<section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
				<div className="container mx-auto">
					<Card className="border-primary/20">
						<CardHeader className="text-center">
							<CardTitle className="text-2xl md:text-3xl mb-2">
								Не нашли подходящий проект?
							</CardTitle>
							<CardDescription className="text-base">
								Мы разработаем индивидуальный проект специально для вас
							</CardDescription>
						</CardHeader>
						<CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button size="lg">
								Индивидуальный проект
							</Button>
							<Button size="lg" variant="outline">
								Получить консультацию
							</Button>
						</CardContent>
					</Card>
				</div>
			</section>
		</>
	)
}
