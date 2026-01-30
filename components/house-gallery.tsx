'use client'

import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { ZoomIn } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { ImageModal } from './image-modal'

interface HouseGalleryProps {
	houseName: string
	houseArea: number
	allImages: string[]
}

export function HouseGallery({ houseName, houseArea, allImages }: HouseGalleryProps) {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [modalImageIndex, setModalImageIndex] = useState(0)

	const openImageModal = (imageUrl: string) => {
		const index = allImages.findIndex(img => img === imageUrl)
		setModalImageIndex(index >= 0 ? index : 0)
		setIsModalOpen(true)
	}

	return (
		<>
			<div className="space-y-4">
				{/* Карусель с главными изображениями */}
				<Carousel className="w-full">
					<CarouselContent>
						{allImages.map((img, index) => (
							<CarouselItem key={index}>
								<button
									onClick={() => openImageModal(img)}
									className="relative w-full aspect-4/3 overflow-hidden rounded-lg border border-border/50 group cursor-zoom-in"
								>
									<Image
										src={img}
										alt={`Каркасный дом ${houseName} ${houseArea} м² - фото ${index + 1}`}
										fill
										className="object-cover transition-transform duration-300 group-hover:scale-105"
										sizes="(max-width: 1024px) 100vw, 50vw"
										priority={index === 0}
									/>
									{/* Иконка увеличения при наведении */}
									<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
										<ZoomIn className="h-12 w-12 text-white" />
									</div>
								</button>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="left-4" />
					<CarouselNext className="right-4" />
				</Carousel>

				{/* Миниатюры */}
				<div className="grid grid-cols-4 md:grid-cols-5 gap-2">
					{allImages.map((img, index) => (
						<button
							key={index}
							onClick={() => openImageModal(img)}
							className="relative aspect-4/3 overflow-hidden rounded border-2 transition-all border-border/50 hover:border-primary/50 group"
						>
							<Image
								src={img}
								alt={`Миниатюра каркасного дома ${houseName} - фото ${index + 1}`}
								fill
								className="object-cover group-hover:scale-105 transition-transform"
								sizes="(max-width: 768px) 25vw, 10vw"
							/>
						</button>
					))}
				</div>
			</div>

			<ImageModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				images={allImages}
				currentIndex={modalImageIndex}
				onIndexChange={setModalImageIndex}
				houseName={houseName}
			/>
		</>
	)
}
