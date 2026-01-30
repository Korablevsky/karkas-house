'use client'

import { Button } from '@/components/ui/button'
import { TELEPHONE } from '@/data/contacts'
import { Menu, Phone, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isWorkingHours, setIsWorkingHours] = useState(false)

  const navigationItems = [
    { href: '/', label: 'Главная' },
    { href: '/karkasnye-doma-pod-kluch', label: 'Проекты' },
    // { href: '/services', label: 'Услуги' },
    { href: '/about', label: 'О нас' },
    { href: '/contacts', label: 'Контакты' },
  ]

  // Проверка рабочего времени
  useEffect(() => {
    const checkWorkingHours = () => {
      const now = new Date()
      const hours = now.getHours()
      const day = now.getDay() // 0 = воскресенье, 6 = суббота
      
      // Рабочее время: пн-пт 9:00-18:00, сб 10:00-16:00
      const isWeekday = day >= 1 && day <= 5
      const isSaturday = day === 6
      const isSunday = day === 0
      
      if (isSunday) {
        setIsWorkingHours(false)
      } else if (isWeekday && hours >= 9 && hours < 20) {
        setIsWorkingHours(true)
      } else if (isSaturday && hours >= 10 && hours < 18) {
        setIsWorkingHours(true)
      } else {
        setIsWorkingHours(false)
      }
    }

    checkWorkingHours()
    // Проверяем каждую минуту
    const interval = setInterval(checkWorkingHours, 60000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Логотип */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <Image src="/logo.webp" alt="Каркасные дома под ключ - Стройремонт 156 дом под ключ не дорого" width={50} height={50} />
            {/* <Home className="h-6 w-6 text-primary" /> */}
            <span className="text-xl font-bold text-foreground">СТРОЙРЕМОНТ 156</span>
          </Link>

          {/* Десктопная навигация */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Контактная информация и кнопка */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex flex-col items-end gap-1">
              <Link
                href={`tel:${TELEPHONE}`}
                className="flex items-center space-x-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>{TELEPHONE}</span>
              </Link>
              <div className="flex items-center gap-1.5">
                <div className={`w-2 h-2 rounded-full ${isWorkingHours ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
                <span className="text-xs text-muted-foreground">
                  {isWorkingHours ? 'Сейчас работаем' : 'Оставьте заявку на звонок'}
                </span>
              </div>
            </div>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Заказать звонок
            </Button>
          </div>

          {/* Мобильное меню - кнопка */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:bg-accent rounded-md transition-colors"
            aria-label="Меню"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Мобильное меню - выдвижная панель */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur">
          <nav className="container mx-auto px-4 py-4 space-y-3">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-base font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
            
            <div className="pt-4 border-t border-border/40 space-y-3">
              <a
                href={`tel:${TELEPHONE}`}
                className="flex items-center space-x-2 py-2 text-base font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>{TELEPHONE}</span>
              </a>
              <div className="flex items-center gap-2.5 px-2 py-2 bg-accent/50 rounded-md">
                <div className={`w-3 h-3 rounded-full ${isWorkingHours ? 'bg-green-500 animate-pulse shadow-lg shadow-green-500/50' : 'bg-red-500'}`} />
                <span className="text-sm font-medium text-foreground">
                  {isWorkingHours ? 'Сейчас работаем' : 'Закажите звонок'}
                </span>
              </div>
              <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                Заказать звонок
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
