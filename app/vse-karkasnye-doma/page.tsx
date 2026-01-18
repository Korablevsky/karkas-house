'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { House, houses } from '@/data/houses'
import {
	Bed,
	DollarSign,
	Home,
	Maximize,
	Maximize2,
	Ruler,
	Search,
	SlidersHorizontal,
	X
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

// Расширенный список проектов домов
// const allProjects = [
//   {
//     id: 1,
//     name: 'Скандинавия',
//     area: 120,
//     price: 3200000,
//     bedrooms: 3,
//     bathrooms: 2,
//     floors: 2,
//     image: '/png/variant/4.jpg',
//     description: 'Современный дом в скандинавском стиле с панорамными окнами',
//     popular: true
//   },
//   {
//     id: 2,
//     name: 'Лесной',
//     area: 150,
//     price: 4000000,
//     bedrooms: 4,
//     bathrooms: 2,
//     floors: 2,
//     image: '/png/variant/2.jpg',
//     description: 'Просторный дом для большой семьи с террасой',
//     popular: true
//   },
//   {
//     id: 3,
//     name: 'Уютный',
//     area: 90,
//     price: 2500000,
//     bedrooms: 2,
//     bathrooms: 1,
//     floors: 1,
//     image: '/png/variant/3.jpg',
//     description: 'Компактный одноэтажный дом для небольшой семьи',
//     popular: true
//   },
//   {
//     id: 4,
//     name: 'Модерн',
//     area: 180,
//     price: 4800000,
//     bedrooms: 4,
//     bathrooms: 3,
//     floors: 2,
//     image: '/karkas-dom.jpg',
//     description: 'Дом в современном стиле с гаражом на 2 машины',
//     popular: false
//   },
//   {
//     id: 5,
//     name: 'Семейный',
//     area: 140,
//     price: 3700000,
//     bedrooms: 3,
//     bathrooms: 2,
//     floors: 2,
//     image: '/karkas-dom2.jpg',
//     description: 'Классический двухэтажный дом с мансардой',
//     popular: false
//   },
//   {
//     id: 6,
//     name: 'Комфорт',
//     area: 110,
//     price: 3000000,
//     bedrooms: 3,
//     bathrooms: 2,
//     floors: 1,
//     image: '/png/variant/4.jpg',
//     description: 'Одноэтажный дом с просторной гостиной',
//     popular: false
//   },
//   {
//     id: 7,
//     name: 'Альпийский',
//     area: 160,
//     price: 4200000,
//     bedrooms: 4,
//     bathrooms: 2,
//     floors: 2,
//     image: '/png/variant/2.jpg',
//     description: 'Дом в альпийском стиле с балконами',
//     popular: false
//   },
//   {
//     id: 8,
//     name: 'Минимал',
//     area: 80,
//     price: 2200000,
//     bedrooms: 2,
//     bathrooms: 1,
//     floors: 1,
//     image: '/png/variant/3.jpg',
//     description: 'Минималистичный дом для молодой пары',
//     popular: false
//   },
//   {
//     id: 9,
//     name: 'Европа',
//     area: 200,
//     price: 5200000,
//     bedrooms: 5,
//     bathrooms: 3,
//     floors: 2,
//     image: '/karkas-dom.jpg',
//     description: 'Роскошный дом европейского уровня',
//     popular: false
//   }
// ]

export default function AllKarkasHousesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedBedrooms, setSelectedBedrooms] = useState<string>('all')
  const [selectedArea, setSelectedArea] = useState<string>('all')
  const [selectedPrice, setSelectedPrice] = useState<string>('all')
  const [sortBy, setSortBy] = useState<string>('popular')
  const [showFilters, setShowFilters] = useState(false)

  // Фильтрация проектов
  const filteredProjects = houses.filter(project => {
    // Поиск по названию
    if (searchQuery && !project.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
    }

    // Фильтр по спальням
    // if (selectedBedrooms !== 'all') {
    //   const bedroomCount = parseInt(selectedBedrooms)
    //   if (project.bedrooms !== bedroomCount) return false
    // }

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

  // Сортировка проектов
//   const sortedProjects = [...filteredProjects].sort((a, b) => {
//     if (sortBy === 'popular') return b.popular ? 1 : -1
//     if (sortBy === 'price-asc') return a.price - b.price
//     if (sortBy === 'price-desc') return b.price - a.price
//     if (sortBy === 'area-asc') return a.area - b.area
//     if (sortBy === 'area-desc') return b.area - a.area
//     return 0
//   })

  // Форматирование цены
  const formatPrice = (price: number) => {
    return `${(price / 1000000).toFixed(1)} млн ₽`
  }

  // Сброс фильтров
  const resetFilters = () => {
    setSearchQuery('')
    setSelectedBedrooms('all')
    setSelectedArea('all')
    setSelectedPrice('all')
  }

  const hasActiveFilters = searchQuery || selectedBedrooms !== 'all' || selectedArea !== 'all' || selectedPrice !== 'all'

  return (
    <div className="flex flex-col">
      {/* Hero секция */}
      <section className="relative py-6 md:py-10 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-card/50 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              {/* <Home className="h-8 w-8 text-primary" /> */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Каталог каркасных домов
              </h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Более {houses.length} готовых проектов домов для комфортной жизни
            </p>
          </div>

          {/* Поиск и фильтры */}
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
                      onChange={(e) => setSearchQuery(e.target.value)}
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
                          <Select value={selectedBedrooms} onValueChange={setSelectedBedrooms}>
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
                          <Select value={selectedArea} onValueChange={setSelectedArea}>
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
                          <Select value={selectedPrice} onValueChange={setSelectedPrice}>
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
                      onClick={() => setSelectedBedrooms('all')}
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
                      onClick={() => setSelectedArea('all')}
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
                      onClick={() => setSelectedPrice('all')}
                      className="hover:text-destructive"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Список проектов */}
      <section className="py-6 md:py-10 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project: House) => (
                <Card 
                  key={project.id} 
                  className="pt-0 overflow-hidden border-border/50 hover:shadow-lg hover:border-primary/30 transition-all duration-300 flex flex-col h-full group"
                >
                  <Link href={`/vse-karkasnye-doma/${project.slug}`} className="block">
                    <div className="relative w-full aspect-4/3 overflow-hidden">
                      <Image 
                        src={project.images.preview} 
                        alt={project.name} 
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {project.segment === 'premium' && (
                        <Badge className="absolute top-3 right-3 bg-primary">
                          Премиум
                        </Badge>
                      )}
                    </div>
                  </Link>
                  
                  <CardHeader className="flex-none">
                    <div className="flex items-start justify-between">
                      <Link href={`/vse-karkasnye-doma/${project.slug}`}>
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
                          <Maximize2  className="h-4 w-4" />
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
                          от {formatPrice(project.price)}
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Link href={`/vse-karkasnye-doma/${project.slug}`} className="flex-1">
                        <Button className="w-full">
                          Подробнее
                        </Button>
                      </Link>
                      <Button variant="outline" size="icon">
                        <Ruler className="h-4 w-4" />
                      </Button>
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
                <Button variant="outline" onClick={resetFilters}>
                  Сбросить фильтры
                </Button>
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
	</div>
  )
}
