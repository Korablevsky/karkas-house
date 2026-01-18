import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Home, Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t mt-auto border-border/40 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* О компании */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Home className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-bold text-foreground">Каркас-Дом</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Строительство качественных каркасных домов под ключ. 
              Более 10 лет опыта и сотни довольных клиентов.
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" asChild>
                <a href="https://vk.com" target="_blank" rel="noopener noreferrer" aria-label="VK">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-.994-1.14-1.47-1.14-.337 0-.433.097-.433.566v1.577c0 .426-.134.682-1.261.682-1.851 0-3.906-1.12-5.354-3.207-2.182-3.078-2.772-5.398-2.772-5.876 0-.238.097-.458.565-.458h1.744c.423 0 .583.193.744.645.816 2.396 2.182 4.49 2.747 4.49.21 0 .304-.097.304-.628V9.364c-.062-1.045-.613-1.137-.613-1.51 0-.194.157-.387.41-.387h2.743c.354 0 .484.193.484.613v3.3c0 .356.16.483.258.483.21 0 .388-.127.776-.516 1.194-1.336 2.048-3.402 2.048-3.402.113-.242.306-.458.73-.458h1.744c.517 0 .63.268.517.63-.222.96-2.243 3.756-2.243 3.756-.178.29-.246.418 0 .74.178.242.764.746 1.155 1.198.725.822 1.284 1.51 1.432 1.99.146.483-.082.725-.597.725z"/>
                  </svg>
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://t.me" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.68c.223-.198-.054-.308-.346-.11l-6.4 4.03-2.76-.918c-.6-.187-.612-.6.125-.89l10.782-4.156c.5-.18.943.11.78.89z"/>
                  </svg>
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://wa.me" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
              </Button>
            </div>
          </div>

          {/* Навигация */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Навигация</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#projects" className="hover:text-primary transition-colors">
                  Проекты домов
                </Link>
              </li>
              <li>
                <Link href="#advantages" className="hover:text-primary transition-colors">
                  Преимущества
                </Link>
              </li>
              <li>
                <Link href="#steps" className="hover:text-primary transition-colors">
                  Этапы строительства
                </Link>
              </li>
              <li>
                <Link href="#reviews" className="hover:text-primary transition-colors">
                  Отзывы
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-primary transition-colors">
                  Галерея работ
                </Link>
              </li>
            </ul>
          </div>

          {/* Услуги */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Услуги</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Строительство под ключ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Проектирование
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Готовые проекты
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Индивидуальные проекты
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Отделка и ремонт
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Контакты</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <div>
                  <a href="tel:+79999999999" className="hover:text-primary transition-colors">
                    +7 (999) 999-99-99
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <div>
                  <a href="mailto:info@karkas-dom.ru" className="hover:text-primary transition-colors">
                    info@karkas-dom.ru
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <div>
                  г. Москва, ул. Строительная, д. 1
                </div>
              </li>
            </ul>
            <div className="pt-2">
              <p className="text-xs text-muted-foreground">
                Режим работы:<br />
                Пн-Пт: 9:00 - 18:00<br />
                Сб-Вс: 10:00 - 16:00
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Нижняя часть футера */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>
            <p>© {currentYear} Каркас-Дом. Все права защищены.</p>
          </div>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary transition-colors">
              Политика конфиденциальности
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Пользовательское соглашение
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
