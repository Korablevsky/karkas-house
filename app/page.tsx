import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { houses } from '@/data/houses'
import { Trigger } from '@/widgets/trigger'
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  DollarSign,
  Home,
  Leaf,
  Phone,
  Shield,
  ThermometerSun
} from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Каркасные дома под ключ - строительство от 2 месяцев',
  description: 'Строительство каркасных домов под ключ от 2 месяцев. Экологичные, теплые и надежные дома по доступной цене. Более 50 готовых проектов. Гарантия до 10 лет. ☎ Звоните!',
  keywords: ['каркасные дома под ключ', 'строительство каркасных домов', 'купить каркасный дом', 'проекты каркасных домов', 'каркасный дом цена', 'быстрое строительство дома'],
  openGraph: {
    title: 'Каркасные дома под ключ - строительство от 2 месяцев',
    description: 'Строительство каркасных домов под ключ. Экологичные, теплые и надежные дома по доступной цене. Более 50 готовых проектов.',
    url: 'https://stroiremont156rf.ru',
    images: [
      {
        url: '/karkas-dom2.jpg',
        width: 1200,
        height: 630,
        alt: 'Каркасный дом под ключ',
      }
    ],
  },
}

export default function HomePage() {
  const advantages = [
    {
      icon: Clock,
      title: 'Быстрое строительство',
      description: 'Возведение дома за 2-3 месяца под ключ'
    },
    {
      icon: DollarSign,
      title: 'Выгодная цена',
      description: 'На 30-40% дешевле кирпичных аналогов'
    },
    {
      icon: Leaf,
      title: 'Экологичность',
      description: 'Натуральные материалы и безопасность'
    },
    {
      icon: ThermometerSun,
      title: 'Энергоэффективность',
      description: 'Отличная теплоизоляция и низкие расходы на отопление'
    },
    {
      icon: Shield,
      title: 'Надежность',
      description: 'Гарантия на работы до 10 лет'
    },
    {
      icon: Home,
      title: 'Готовые проекты',
      description: 'Более 50 типовых проектов или индивидуальный дизайн'
    }
  ]

  const steps = [
    'Выбор проекта и расчет стоимости',
    'Заключение договора и подготовка документов',
    'Закладка фундамента',
    'Возведение каркаса и стен',
    'Монтаж кровли и коммуникаций',
    'Внутренняя и внешняя отделка'
  ]

  // Структурированные данные JSON-LD для Яндекса и Google
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Стройремонт 156',
    description: 'Строительство каркасных домов под ключ',
    url: 'https://stroiremont156rf.ru',
    logo: 'https://stroiremont156rf.ru/karkas-dom2.jpg',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      areaServed: 'RU',
      availableLanguage: 'Russian'
    },
    sameAs: [
      // Добавьте ссылки на соцсети
    ],
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'RUB',
      offerCount: houses.length,
      offers: houses.slice(0, 5).map(house => ({
        '@type': 'Offer',
        name: house.name,
        description: house.shortDescription,
        url: `https://stroiremont156rf.ru/karkasnye-doma-pod-kluch/${house.slug}`,
        image: `https://stroiremont156rf.ru${house.images.preview}`,
      }))
    }
  }

  return (
    <div className="flex flex-col">
      {/* JSON-LD структурированные данные */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero секция */}
      <section className="relative py-20 md:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Фоновое изображение */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/karkas-dom2.jpg"
            alt="Каркасные дома под ключ - экологичное и доступное жилье"
            fill
            className="object-cover blur-xs"
            priority
            quality={90}
          />
          {/* Темный оверлей для читабельности текста */}
          <div className="absolute inset-0 bg-background/75 " />
        </div>

        {/* Контент поверх фона */}
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
           
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 drop-shadow-lg">
              Каркасные дома и бани под ключ
            </h1>
            <p className="text-lg md:text-xl text-foreground/90 mb-8 drop-shadow-md">
              Экологичные, теплые и надежные дома по доступной цене. 
              Строительство от 2 месяцев с гарантией качества.
            </p>
         
           
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base shadow-lg">
                <Phone className="mr-2 h-5 w-5" />
                Заказать звонок
              </Button>
              <Button size="lg" variant="outline" className="text-base backdrop-blur-sm bg-card/50 shadow-lg" asChild>
              <Link
                href="/karkasnye-doma-pod-kluch">
                Смотреть проекты
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Почему выбирают каркасные дома
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Современная технология строительства с множеством преимуществ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon
              return (
                <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{advantage.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {advantage.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Популярные проекты */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Популярные проекты
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Готовые решения для вашего комфорта
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {houses.slice(2, 5).map((house) => (
              <Card key={house.id} className="overflow-hidden pt-0 border-border/50 hover:shadow-lg transition-shadow flex flex-col h-full">
                <div className="relative w-full aspect-4/3 overflow-hidden">
                  <Image 
                    src={house.images.preview} 
                    alt={house.name} 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardHeader className="flex-none">
                  <CardTitle className="text-2xl">{house.name}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary">
                    по запросу
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Площадь:</span>
                      <span className="font-medium text-foreground">{house.area} м²</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Размер:</span>
                      <span className="font-medium text-foreground">{house.size.width}×{house.size.length} м</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4" variant="outline" asChild>
                    <Link href={`/karkasnye-doma-pod-kluch/${house.slug}`}>
                      Подробнее
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <Link href="/karkasnye-doma-pod-kluch">
                Все проекты
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Этапы строительства */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Этапы строительства
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Прозрачный процесс от проекта до сдачи дома
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg border border-border/50 hover:border-primary/50 transition-colors"
                >
                  <div className="shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-semibold">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-foreground font-medium">{step}</p>
                  </div>
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}


      <Trigger title="Готовы построить дом мечты?" description="Получите бесплатную консультацию и расчет стоимости" />
    
    </div>
  )
}
