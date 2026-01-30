import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'О компании - строительство каркасных домов с 2012 года',
  description: 'СТРОЙРЕМОНТ - 12 лет опыта строительства каркасных домов. Более 500 построенных домов, 450+ довольных клиентов. Гарантия качества до 10 лет. Собственное производство.',
  keywords: ['о компании стройремонт', 'строительная компания', 'каркасные дома опыт', 'надежная строительная компания'],
  openGraph: {
    title: 'О компании - строительство каркасных домов с 2012 года',
    description: 'Более 12 лет опыта, 500+ построенных домов, гарантия качества до 10 лет',
    url: 'https://stroiremont156rf.ru/about',
  },
  alternates: {
    canonical: '/about',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
