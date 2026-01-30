import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Контакты - свяжитесь с нами для строительства дома',
  description: 'Контакты СТРОЙРЕМОНТ 156. Телефон: +7 (963) 180-10-34. Адрес: г. Оренбург. Консультация по строительству каркасных домов. Режим работы, адрес офиса на карте.',
  keywords: ['контакты стройремонт', 'телефон строительной компании', 'адрес офиса', 'заказать каркасный дом'],
  openGraph: {
    title: 'Контакты - СТРОЙРЕМОНТ 156',
    description: 'Свяжитесь с нами для консультации по строительству каркасных домов. Телефон: +7 (963) 180-10-34',
    url: 'https://stroiremont156rf.ru/contacts',
  },
  alternates: {
    canonical: '/contacts',
  },
}

export default function ContactsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
