import { houses } from '@/data/houses'
import type { Metadata } from 'next'

type Props = {
  params: Promise<{ slug: string }>
  children: React.ReactNode
}

export async function generateStaticParams() {
  return houses.map((house) => ({
    slug: house.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const house = houses.find(h => h.slug === slug)

  if (!house) {
    return {
      title: 'Дом не найден',
    }
  }

  const title = `${house.name} - каркасный дом ${house.area} м² под ключ`
  const description = `${house.fullDescription} Площадь ${house.area} м², размер ${house.size.width}×${house.size.length} м. Строительство под ключ. ☎ Узнайте цену!`

  return {
    title,
    description,
    keywords: [
      `каркасный дом ${house.name}`,
      `дом ${house.area} м²`,
      'каркасный дом под ключ',
      `проект ${house.name}`,
      'купить каркасный дом',
      `дом ${house.size.width}x${house.size.length}`,
    ],
    openGraph: {
      title,
      description: house.shortDescription,
      url: `https://stroiremont156rf.ru/karkasnye-doma-pod-kluch/${house.slug}`,
      images: [
        {
          url: `https://stroiremont156rf.ru${house.images.preview}`,
          width: 1200,
          height: 630,
          alt: house.name,
        }
      ],
      type: 'article',
    },
    alternates: {
      canonical: `/karkasnye-doma-pod-kluch/${house.slug}`,
    },
  }
}

export default function HouseLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  )
}
