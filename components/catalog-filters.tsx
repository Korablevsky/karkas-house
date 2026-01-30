'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { House } from '@/data/houses'
import {
	Bed,
	DollarSign,
	Maximize,
	Search,
	SlidersHorizontal,
	X
} from 'lucide-react'
import { useState } from 'react'

interface CatalogFiltersProps {
	houses: House[]
	onFilteredHousesChange: (houses: House[]) => void
}

export function CatalogFilters({ houses, onFilteredHousesChange }: CatalogFiltersProps) {
	const [searchQuery, setSearchQuery] = useState('')
	const [selectedBedrooms, setSelectedBedrooms] = useState<string>('all')
	const [selectedArea, setSelectedArea] = useState<string>('all')
	const [selectedPrice, setSelectedPrice] = useState<string>('all')
	const [sortBy, setSortBy] = useState<string>('popular')
	const [showFilters, setShowFilters] = useState(false)

	// Фильтрация проектов
	const applyFilters = () => {
		const filtered = houses.filter(project => {
			// Поиск по названию
			if (searchQuery && !project.name.toLowerCase().includes(searchQuery.toLowerCase())) {
				return false
			}

			// Фильтр по площади
			if (selectedArea !== 'all') {
				if (selectedArea === 'small' && project.area > 100) return false
				if (selectedArea === 'medium' && (project.area <= 100 || project.area > 150)) return false
				if (selectedArea === 'large' && project.area <= 150) return false
			}

			// Фильтр по цене
			if (selectedPrice !== 'all') {
				if (selectedPrice === 'low' && project.price > 3000000) return false
				if (selectedPrice === 'medium' && (project.price <= 3000000 || project.price > 4500000)) return false
				if (selectedPrice === 'high' && project.price <= 4500000) return false
			}

			return true
		})

		onFilteredHousesChange(filtered)
	}

	// Применяем фильтры при изменении
	const handleSearchChange = (value: string) => {
		setSearchQuery(value)
		// Применим фильтры после обновления состояния
		setTimeout(applyFilters, 0)
	}

	const handleBedroomsChange = (value: string) => {
		setSelectedBedrooms(value)
		setTimeout(applyFilters, 0)
	}

	const handleAreaChange = (value: string) => {
		setSelectedArea(value)
		setTimeout(applyFilters, 0)
	}

	const handlePriceChange = (value: string) => {
		setSelectedPrice(value)
		setTimeout(applyFilters, 0)
	}

	const resetFilters = () => {
		setSearchQuery('')
		setSelectedBedrooms('all')
		setSelectedArea('all')
		setSelectedPrice('all')
		onFilteredHousesChange(houses)
	}

	const hasActiveFilters = searchQuery || selectedBedrooms !== 'all' || selectedArea !== 'all' || selectedPrice !== 'all'

	// Получаем отфильтрованные проекты
	const filteredProjects = houses.filter(project => {
		if (searchQuery && !project.name.toLowerCase().includes(searchQuery.toLowerCase())) {
			return false
		}
		if (selectedArea !== 'all') {
			if (selectedArea === 'small' && project.area > 100) return false
			if (selectedArea === 'medium' && (project.area <= 100 || project.area > 150)) return false
			if (selectedArea === 'large' && project.area <= 150) return false
		}
		if (selectedPrice !== 'all') {
			if (selectedPrice === 'low' && project.price > 3000000) return false
			if (selectedPrice === 'medium' && (project.price <= 3000000 || project.price > 4500000)) return false
			if (selectedPrice === 'high' && project.price <= 4500000) return false
		}
		return true
	})

	return (
		<div className="max-w-6xl mx-auto space-y-4">
			{/* Строка поиска и основные действия */}
			<Card className="border-border/50 shadow-sm">
				<CardContent className="pt-2">
					<div className="flex flex-col lg:flex-row gap-4">
						{/* Поиск */}
						<div className="relative flex-1">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
							<Input
								placeholder="Поиск по названию проекта..."
								value={searchQuery}
								onChange={(e) => handleSearchChange(e.target.value)}
								className="pl-10 h-11"
							/>
						</div>
						
						{/* Кнопки управления */}
						<div className="flex gap-2">
							<Button
								variant={showFilters ? 'default' : 'outline'}
								onClick={() => setShowFilters(!showFilters)}
								className="flex-1 lg:flex-none h-11"
							>
								<SlidersHorizontal className="h-4 w-4 mr-2" />
								Фильтры
								{hasActiveFilters && (
									<Badge variant="secondary" className="ml-2 px-1.5 py-0 h-5 min-w-5">
										{[selectedBedrooms, selectedArea, selectedPrice].filter(f => f !== 'all').length}
									</Badge>
								)}
							</Button>
							{hasActiveFilters && (
								<Button
									variant="ghost"
									onClick={resetFilters}
									className="h-11"
									size="icon"
								>
									<X className="h-4 w-4" />
								</Button>
							)}
						</div>
					</div>
				</CardContent>
			</Card>

			{/* Расширенные фильтры */}
			{showFilters && (
				<Card className="border-border/50 shadow-sm bg-card/50">
					<CardContent className="pt-6">
						<div className="space-y-6">
							{/* Фильтры параметров */}
							<div>
								<h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
									<SlidersHorizontal className="h-4 w-4" />
									Параметры дома
								</h3>
								<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
									{/* Количество спален */}
									<div className="space-y-2">
										<label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
											<Bed className="h-3.5 w-3.5" />
											Количество спален
										</label>
										<Select value={selectedBedrooms} onValueChange={handleBedroomsChange}>
											<SelectTrigger className="h-10">
												<SelectValue />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="all">Любое количество</SelectItem>
												<SelectItem value="2">2 спальни</SelectItem>
												<SelectItem value="3">3 спальни</SelectItem>
												<SelectItem value="4">4 спальни</SelectItem>
												<SelectItem value="5">5+ спален</SelectItem>
											</SelectContent>
										</Select>
									</div>

									{/* Площадь */}
									<div className="space-y-2">
										<label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
											<Maximize className="h-3.5 w-3.5" />
											Площадь дома
										</label>
										<Select value={selectedArea} onValueChange={handleAreaChange}>
											<SelectTrigger className="h-10">
												<SelectValue />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="all">Любая площадь</SelectItem>
												<SelectItem value="small">Компактные (до 100 м²)</SelectItem>
												<SelectItem value="medium">Средние (100-150 м²)</SelectItem>
												<SelectItem value="large">Большие (более 150 м²)</SelectItem>
											</SelectContent>
										</Select>
									</div>

									{/* Цена */}
									<div className="space-y-2">
										<label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
											<DollarSign className="h-3.5 w-3.5" />
											Ценовой диапазон
										</label>
										<Select value={selectedPrice} onValueChange={handlePriceChange}>
											<SelectTrigger className="h-10">
												<SelectValue />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="all">Любая цена</SelectItem>
												<SelectItem value="low">До 3 млн ₽</SelectItem>
												<SelectItem value="medium">3-4.5 млн ₽</SelectItem>
												<SelectItem value="high">Более 4.5 млн ₽</SelectItem>
											</SelectContent>
										</Select>
									</div>
								</div>
							</div>

							<Separator />

							{/* Сортировка */}
							<div>
								<h3 className="text-sm font-semibold text-foreground mb-4">
									Сортировка результатов
								</h3>
								<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
									<div className="space-y-2">
										<Select value={sortBy} onValueChange={setSortBy}>
											<SelectTrigger className="h-10">
												<SelectValue />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="popular">По популярности</SelectItem>
												<SelectItem value="price-asc">Цена: от низкой к высокой</SelectItem>
												<SelectItem value="price-desc">Цена: от высокой к низкой</SelectItem>
												<SelectItem value="area-asc">Площадь: от меньшей к большей</SelectItem>
												<SelectItem value="area-desc">Площадь: от большей к меньшей</SelectItem>
											</SelectContent>
										</Select>
									</div>
								</div>
							</div>

							{/* Результаты и действия */}
							<div className="flex items-center justify-between pt-2 border-t">
								<div className="flex items-center gap-2">
									<p className="text-sm font-medium text-foreground">
										Найдено проектов: 
									</p>
									<Badge variant="secondary" className="text-sm">
										{filteredProjects.length}
									</Badge>
								</div>
								{hasActiveFilters && (
									<Button variant="outline" size="sm" onClick={resetFilters}>
										<X className="h-4 w-4 mr-2" />
										Сбросить все фильтры
									</Button>
								)}
							</div>
						</div>
					</CardContent>
				</Card>
			)}

			{/* Быстрые фильтры (активные бейджи) */}
			{hasActiveFilters && !showFilters && (
				<div className="flex flex-wrap gap-2">
					<span className="text-sm text-muted-foreground">Активные фильтры:</span>
					{selectedBedrooms !== 'all' && (
						<Badge variant="secondary" className="gap-2">
							<Bed className="h-3 w-3" />
							{selectedBedrooms} спален
							<button
								onClick={() => handleBedroomsChange('all')}
								className="hover:text-destructive"
							>
								<X className="h-3 w-3" />
							</button>
						</Badge>
					)}
					{selectedArea !== 'all' && (
						<Badge variant="secondary" className="gap-2">
							<Maximize className="h-3 w-3" />
							{selectedArea === 'small' && 'До 100 м²'}
							{selectedArea === 'medium' && '100-150 м²'}
							{selectedArea === 'large' && 'Более 150 м²'}
							<button
								onClick={() => handleAreaChange('all')}
								className="hover:text-destructive"
							>
								<X className="h-3 w-3" />
							</button>
						</Badge>
					)}
					{selectedPrice !== 'all' && (
						<Badge variant="secondary" className="gap-2">
							<DollarSign className="h-3 w-3" />
							{selectedPrice === 'low' && 'До 3 млн ₽'}
							{selectedPrice === 'medium' && '3-4.5 млн ₽'}
							{selectedPrice === 'high' && 'Более 4.5 млн ₽'}
							<button
								onClick={() => handlePriceChange('all')}
								className="hover:text-destructive"
							>
								<X className="h-3 w-3" />
							</button>
						</Badge>
					)}
				</div>
			)}
		</div>
	)
}
