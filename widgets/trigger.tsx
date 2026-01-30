import { Button } from '@/components/ui/button'
import { Card, CardTitle, CardHeader, CardDescription, CardContent } from '@/components/ui/card'
import { EMAIL, TELEPHONE } from '@/data/contacts'
import { Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export  function Trigger({ title, description }: { title: string, description: string }) {
  return (
	<section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-card to-background">
	<div className="container mx-auto">
	  <Card className="border-primary/20 bg-card/50">
		<CardHeader className="text-center pb-8">
		  <CardTitle className="text-3xl md:text-4xl mb-4">
			{title}
		  </CardTitle>
		  <CardDescription className="text-lg">
			{description}
		  </CardDescription>
		</CardHeader>
		<CardContent>
		  <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
			<Button  className="flex-1" asChild>
			  <Link href={`tel:${TELEPHONE}`}>
			  <Phone className="mr-2 h-5 w-5" />
			  Позвонить
			  </Link>
			</Button>
			<Button  variant="outline" className="flex-1" asChild>
			  <Link href={`mailto:${EMAIL}`}>
			  <Mail className="mr-2 h-5 w-5" />
			  Написать
			  </Link>
			</Button>
		  </div>
		</CardContent>
	  </Card>
	</div>
  </section>
  )
}
