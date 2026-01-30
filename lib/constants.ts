// Константы сайта для SEO и общего использования
// ВАЖНО: Замените на ваш реальный домен перед деплоем
export const SITE_CONFIG = {
  name: 'Стройремонт 156',
  url: 'https://stroiremont156rf.ru', // Замените на ваш домен
  description: 'Строительство каркасных домов под ключ. Более 10 лет опыта и сотни довольных клиентов.',
  locale: 'ru_RU',
  
  contact: {
    phone: '+7 (963) 180-10-34',
    phoneFormatted: '+79631801034',
    email: 'info@stroiremont156rf.ru',
    address: {
      city: 'Оренбург',
      street: 'ул. Пушкина, д. 1',
      postalCode: '460000',
      country: 'RU',
    },
  },
  
  social: {
    // Добавьте ссылки на ваши соцсети
    vk: '',
    telegram: '',
    instagram: '',
    whatsapp: '',
  },
  
  // Код верификации для Яндекс.Вебмастер
  // Получите код на https://webmaster.yandex.ru/
  yandexVerification: '', // Добавьте код верификации
  
  // ID счетчика Яндекс.Метрики
  yandexMetrikaId: '', // Добавьте ID счетчика
  
  // Google Analytics ID (опционально)
  googleAnalyticsId: '', // Добавьте GA ID
} as const

export const SITE_KEYWORDS: string[] = [
  'каркасные дома',
  'строительство домов',
  'дома под ключ',
  'каркасный дом цена',
  'купить каркасный дом',
  'строительство каркасных домов',
  'проекты каркасных домов',
  'каркасные дома под ключ',
  'строительство каркасных домов цена',
]
