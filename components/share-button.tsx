'use client'

import { Button } from '@/components/ui/button'
import { Share2 } from 'lucide-react'
import { toast } from 'sonner'

interface ShareButtonProps {
	title: string
	description: string
}

export function ShareButton({ title, description }: ShareButtonProps) {
	const handleShare = async () => {
		const shareData = {
			title,
			text: description,
			url: window.location.href,
		}

		// Проверяем поддержку нативного API Share (мобильные устройства)
		if (navigator.share) {
			try {
				await navigator.share(shareData)
			} catch (err) {
				// Пользователь отменил действие или произошла ошибка
				console.log('Ошибка при попытке поделиться:', err)
			}
		} else {
			// Для десктопа - копируем ссылку в буфер обмена
			const url = window.location.href
			
			// Проверяем поддержку Clipboard API
			if (navigator.clipboard && navigator.clipboard.writeText) {
				try {
					await navigator.clipboard.writeText(url)
					toast.success('Ссылка скопирована в буфер обмена!')
				} catch (err) {
					toast.error('Не удалось скопировать ссылку')
					console.error('Ошибка копирования:', err)
				}
			} else {
				// Fallback метод для старых браузеров
				try {
					const textArea = document.createElement('textarea')
					textArea.value = url
					textArea.style.position = 'fixed'
					textArea.style.left = '-999999px'
					textArea.style.top = '-999999px'
					document.body.appendChild(textArea)
					textArea.focus()
					textArea.select()
					const successful = document.execCommand('copy')
					document.body.removeChild(textArea)
					
					if (successful) {
						toast.success('Ссылка скопирована в буфер обмена!')
					} else {
						toast.error('Не удалось скопировать ссылку')
					}
				} catch (err) {
					toast.error('Не удалось скопировать ссылку')
					console.error('Ошибка копирования:', err)
				}
			}
		}
	}

	return (
		<Button variant="ghost" onClick={handleShare} title="Поделиться">
			<Share2 className="h-4 w-4" /> Поделиться
		</Button>
	)
}
