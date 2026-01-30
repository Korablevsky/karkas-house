import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Trigger } from '@/widgets/trigger'
import {
    Award,
    Building2,
    CheckCircle2,
    Handshake,
    Heart,
    Shield,
    Target,
    Users
} from 'lucide-react'
import Image from 'next/image'

export default function AboutPage() {
  const companyValues = [
    {
      icon: Shield,
      title: 'Надежность',
      description: 'Используем только проверенные материалы и технологии строительства'
    },
    {
      icon: Heart,
      title: 'Забота о клиентах',
      description: 'Индивидуальный подход к каждому проекту и полное сопровождение'
    },
    {
      icon: Award,
      title: 'Качество',
      description: 'Контроль на каждом этапе строительства и гарантия до 10 лет'
    },
    {
      icon: Handshake,
      title: 'Честность',
      description: 'Прозрачное ценообразование и выполнение всех договорных обязательств'
    }
  ]

  const achievements = [
    { number: '12+', label: 'лет опыта', icon: Award },
    { number: '500+', label: 'построенных домов', icon: Building2 },
    { number: '450+', label: 'довольных клиентов', icon: Users },
    { number: '98%', label: 'рекомендаций', icon: Target }
  ]

  const whyChooseUs = [
    'Собственное производство деревянных конструкций',
    'Квалифицированная команда специалистов',
    'Фиксированная цена в договоре без скрытых платежей',
    'Соблюдение сроков строительства',
    'Гарантийное и постгарантийное обслуживание',
    'Помощь в оформлении документов и разрешений',
    'Возможность посещения строящихся объектов',
    'Рассрочка платежа и кредитование'
  ]

  return (
    <div className="flex flex-col">
      {/* Hero секция */}
      <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Фоновое изображение */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/karkas-dom.jpg"
            alt="Строительство каркасных домов - СТРОЙРЕМОНТ 156"
            fill
            className="object-cover blur-xs"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-background/80" />
        </div>

        {/* Контент поверх фона */}
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 drop-shadow-lg">
              О нашей компании
            </h1>
            <p className="text-lg md:text-xl text-foreground/90 drop-shadow-md">
              Мы строим не просто дома — мы создаем пространство для вашей счастливой жизни
            </p>
          </div>
        </div>
      </section>

      {/* О компании */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Строим с 2012 года
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground text-left">
                <p>
                  <span className="font-semibold text-foreground">СТРОЙРЕМОНТ</span> — это команда профессионалов, 
                  специализирующихся на строительстве каркасных домов по современным технологиям. 
                  За более чем 12 лет работы мы построили сотни домов по всей России, помогая семьям 
                  воплотить мечту о собственном уютном жилье.
                </p>
                <p>
                  Наша миссия — сделать качественное жилье доступным каждому. Мы верим, что каждая семья 
                  заслуживает комфортного, экологичного и энергоэффективного дома по разумной цене. 
                  Именно поэтому мы постоянно совершенствуем технологии строительства и оптимизируем процессы, 
                  не жертвуя при этом качеством.
                </p>
                <p>
                  Мы работаем только с проверенными материалами от надежных поставщиков, используем 
                  современное оборудование и следуем всем строительным нормам и стандартам. 
                  Каждый проект для нас — это возможность создать нечто особенное, учитывая пожелания 
                  и потребности наших клиентов.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Наши ценности */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Наши ценности
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Принципы, которыми мы руководствуемся в работе
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Достижения */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Наши достижения
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Цифры, которые говорят о нашем опыте и качестве работы
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <Card key={index} className="border-border/50 text-center hover:border-primary/50 transition-all hover:shadow-lg">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                      {achievement.number}
                    </div>
                    <p className="text-muted-foreground font-medium">
                      {achievement.label}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Почему выбирают нас */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Преимущества работы с нашей компанией
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {whyChooseUs.map((reason, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg border border-border/50 hover:border-primary/50 transition-colors bg-card"
                >
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <p className="text-foreground font-medium">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <Trigger 
        title="Хотите узнать больше о нашей работе?" 
        description="Посетите наш офис, посмотрите готовые проекты и пообщайтесь с нашими специалистами" 
      />
    </div>
  )
}
