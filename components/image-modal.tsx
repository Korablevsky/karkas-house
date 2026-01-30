'use client'

import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import Image from 'next/image'

interface ImageModalProps {
	isOpen: boolean
	onClose: () => void
	images: string[]
	currentIndex: number
	onIndexChange: (index: number) => void
	houseName: string
}

export function ImageModal({
	isOpen,
	onClose,
	images,
	currentIndex,
	onIndexChange,
	houseName
}: ImageModalProps) {
	const goToPrevImage = () => {
		onIndexChange(currentIndex > 0 ? currentIndex - 1 : images.length - 1)
	}

	const goToNextImage = () => {
		onIndexChange(currentIndex < images.length - 1 ? currentIndex + 1 : 0)
	}

	return (
		<AlertDialog open={isOpen} onOpenChange={onClose}>
			<AlertDialogContent className="max-w-[98vw]! w-[98vw]! h-[98vh]! p-0 border-0 bg-black/95">
				{/* Скрытый заголовок для доступности */}
				<AlertDialogTitle className="sr-only">
					Просмотр изображения {currentIndex + 1} из {images.length}
				</AlertDialogTitle>
				
				<div className="relative w-full h-full">
					{/* Кнопка закрытия */}
					<button
						onClick={onClose}
						className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
					>
						<X className="h-6 w-6" />
					</button>

					{/* Изображение */}
					<div className="relative w-full h-full flex items-center justify-center p-4">
						<Image
							src={images[currentIndex]}
							alt={`${houseName} - фото ${currentIndex + 1}`}
							fill
							className="object-contain"
							sizes="100vw"
							priority
						/>
					</div>

					{/* Кнопки навигации */}
					{images.length > 1 && (
						<>
							<button
								onClick={goToPrevImage}
								className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
							>
								<ChevronLeft className="h-8 w-8" />
							</button>
							<button
								onClick={goToNextImage}
								className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
							>
								<ChevronRight className="h-8 w-8" />
							</button>
						</>
					)}

					{/* Индикатор изображения */}
					<div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-black/50 text-white text-sm">
						{currentIndex + 1} / {images.length}
					</div>

					{/* Миниатюры */}
					<div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-50 max-w-4xl w-full px-4">
						<div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide justify-center">
							{images.map((img, index) => (
								<button
									key={index}
									onClick={() => onIndexChange(index)}
									className={`relative shrink-0 w-16 h-16 rounded border-2 overflow-hidden transition-all ${
										index === currentIndex
											? 'border-primary scale-110'
											: 'border-white/30 hover:border-white/60'
									}`}
								>
									<Image
										src={img}
										alt={`Миниатюра ${index + 1}`}
										fill
										className="object-cover"
										sizes="64px"
									/>
								</button>
							))}
						</div>
					</div>
				</div>
			</AlertDialogContent>
		</AlertDialog>
	)
}
