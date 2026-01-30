import { houses } from '@/data/houses'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Каталог каркасных домов - все проекты и цены',
  description: `Каталог готовых проектов каркасных домов. Более ${houses.length} вариантов домов с ценами и характеристиками. Выбирайте дом своей мечты! Строительство от 2 месяцев.`,
  keywords: ['каталог каркасных домов', 'проекты каркасных домов', 'каркасные дома цены', 'готовые проекты домов', 'купить проект дома'],
  openGraph: {
    title: 'Каталог каркасных домов - все проекты',
    description: `Более ${houses.length} готовых проектов каркасных домов с ценами и характеристиками`,
    url: 'https://stroiremont156rf.ru/karkasnye-doma-pod-kluch',
  },
  alternates: {
    canonical: '/karkasnye-doma-pod-kluch',
  },
}

export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
