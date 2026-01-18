'use client'

import { Button } from '@/components/ui/button'
import { Home, Menu, Phone, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationItems = [
    { href: '/', label: 'Главная' },
    { href: '/vse-karkasnye-doma', label: 'Проекты' },
    { href: '/services', label: 'Услуги' },
    { href: '/about', label: 'О нас' },
    { href: '/contacts', label: 'Контакты' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Логотип */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Home className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-foreground">КаркасДом</span>
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
            <a
              href="tel:+79991234567"
              className="flex items-center space-x-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>+7 (999) 123-45-67</span>
            </a>
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
                href="tel:+79991234567"
                className="flex items-center space-x-2 py-2 text-base font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>+7 (999) 123-45-67</span>
              </a>
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
