import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Trigger } from '@/widgets/trigger'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

export default function ContactsPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Телефон',
      primary: '+7 (963) 180-10-34',
      secondary: 'Звонки принимаются ежедневно',
      href: 'tel:+79631801034',
      action: 'Позвонить'
    },
    {
      icon: Mail,
      title: 'Email',
      primary: 'info@stroiremont156rf.ru',
      secondary: 'Ответим в течение 24 часов',
      href: 'mailto:info@stroiremont156rf.ru',
      action: 'Написать'
    },
    {
      icon: MapPin,
      title: 'Адрес',
      primary: 'г. Оренбург',
      secondary: 'ул. Пушкина, д. 1',
      href: 'https://yandex.ru/maps/?pt=55.099836,51.768199&z=16&l=map',
      action: 'Открыть карту'
    }
  ]

  const workingHours = [
    { day: 'Понедельник - Пятница', time: '9:00 - 20:00' },
    { day: 'Суббота', time: '10:00 - 18:00' },
    { day: 'Воскресенье', time: 'Выходной' }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero секция */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Контакты
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Свяжитесь с нами любым удобным способом. Мы всегда рады ответить на ваши вопросы
              и помочь с выбором проекта дома.
            </p>
          </div>
        </div>
      </section>

      {/* Контактная информация */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon
              return (
                <Card key={index} className="border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{contact.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-lg font-semibold text-foreground mb-1">
                        {contact.primary}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {contact.secondary}
                      </p>
                    </div>
                    <Button asChild variant="outline" className="w-full">
                      <Link href={contact.href} target={contact.icon === MapPin ? '_blank' : undefined}>
                        {contact.action}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Часы работы */}
          <Card className="border-border/50 max-w-2xl mx-auto">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Режим работы</CardTitle>
                  <CardDescription>График приема звонков и визитов</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {workingHours.map((schedule, index) => (
                  <div 
                    key={index}
                    className="flex justify-between items-center p-3 rounded-lg bg-accent/30"
                  >
                    <span className="text-foreground font-medium">{schedule.day}</span>
                    <span className="text-primary font-semibold">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Карта */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="container mx-auto">
          <div className="mb-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Мы на карте
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Посетите наш офис для личной консультации и просмотра образцов материалов
            </p>
          </div>

          <Card className=" py-0 overflow-hidden border-border/50">
            <CardContent className="p-0">
              <div className="w-full aspect-video md:h-[500px] md:aspect-auto">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=55.099836%2C51.768199&z=16&pt=55.099836%2C51.768199%2Cpm2rdm"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block', minHeight: '350px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Карта расположения офиса"
                />
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 text-center">
            <Button size="lg" variant="outline" asChild>
              <Link href="https://yandex.ru/maps/?pt=55.099836,51.768199&z=16&l=map" target="_blank">
                <MapPin className="mr-2 h-5 w-5" />
                Открыть в Яндекс.Картах
              </Link>
            </Button>
          </div>
        </div>
      </section>

		
		<Trigger title="Готовы обсудить ваш проект?" description="Позвоните нам или оставьте заявку, и мы свяжемся с вами в ближайшее время" />
    </div>
  )
}
