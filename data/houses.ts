export type HouseSegment = 'economy' | 'comfort' | 'premium';

export type HouseSpecificationItem = {
	id: number;
	title: string;
	value: string;
};

export type House = {
	id: number;
	slug: string;               // для URL
	name: string;
	area: number;               // площадь
	floorHeight: number;        // высота этажа
	size: {
		width: number;
		length: number;
	};
	price: number;
	segment: HouseSegment;

	shortDescription: string;  // для карточки
	fullDescription: string;   // SEO-текст

	specification: HouseSpecificationItem[];

	images: {
		preview: string;
		gallery: string[];
		plan?: string;
	};
};


export const houses: House[] = [
	{
		id: 1,
		slug: 'lesnaya-gavan',
		name: 'Лесная гавань',
		area: 78.2,
		floorHeight: 2.7,
		size: {
			width: 8.5,
			length: 7.5,
		},
		price: 1_000_000,
		segment: 'economy',

		shortDescription:
			'Компактный одноэтажный каркасный дом для комфортного проживания семьи.',

		fullDescription:
			'Каркасный дом «Лесная гавань» — это практичное решение для круглогодичного проживания. Дом выполнен из материалов камерной сушки, что обеспечивает долговечность и устойчивость конструкции.',

		specification: [
			{ id: 1, title: 'Тип дома', value: 'Каркасный' },
			{
				id: 2,
				title: 'Каркас наружных стен',
				value: 'Обвязочный брус 50×150 мм камерной сушки',
			},
			{
				id: 3,
				title: 'Стропильная система',
				value: 'Лаги пола и перекрытий 50×200 мм камерной сушки',
			},
			{ id: 4, title: 'Черновой пол', value: 'Доска 25×100 мм' },
			{
				id: 5,
				title: 'Кровля',
				value: 'Профлист 0,5 мм',
			},
			{
				id: 6,
				title: 'Утепление',
				value: 'Стены — 150 мм, пол и кровля — 200 мм',
			},
			{
				id: 7,
				title: 'Окна',
				value: 'Двухкамерный стеклопакет 1,0×1,2 м, профиль 70 мм',
			},
			{
				id: 8,
				title: 'Входная дверь',
				value: 'Металлическая утеплённая с терморазрывом',
			},
		],

		images: {
			preview: '/png/forest-barn/forest-barn.jpg',
			gallery: [
				'/png/forest-barn/forest-barn2.jpg',
				'/png/forest-barn/forest-barn3.jpg',
				'/png/forest-barn/forest-barn4.jpg',
			],
			plan: '/png/forest-barn/forest-barn-plan.jpg',
		},
	},

	{
		id: 2,
		slug: 'wood-slope',
		name: 'Горизонт Леса',
		area: 122,
		floorHeight: 2.7,
		size: {
			width: 12.5,
			length: 10,
		},
		price: 0, // если нет цены — лучше 0 или null
		segment: 'comfort',
	
		shortDescription:
			'Просторный каркасный дом площадью 122 м² для комфортного проживания большой семьи.',
	
		fullDescription:
			'Каркасный дом площадью 122 м² — это практичное и надёжное решение для круглогодичного проживания. Дом выполнен с использованием материалов камерной сушки, что обеспечивает прочность конструкции и долговечность эксплуатации.',
	
		specification: [
			{
				id: 1,
				title: 'Каркас наружных стен',
				value: 'Обвязочный брус 50×200 мм камерной сушки',
			},
			{
				id: 2,
				title: 'Стропильная система',
				value: 'Лаги пола и перекрытий 50×200 мм камерной сушки',
			},
			{
				id: 3,
				title: 'Черновой пол',
				value: 'Доска 25×100 мм',
			},
			{
				id: 4,
				title: 'Контробрешётка',
				value: 'Кровля 50×50 мм, стены 25×50 мм',
			},
			{
				id: 5,
				title: 'Кровля',
				value: 'Профлист 0,5 мм',
			},
			{
				id: 6,
				title: 'Отделка потолка',
				value: 'Подготовка под натяжной потолок',
			},
			{
				id: 7,
				title: 'Внутренняя отделка',
				value: 'Отсутствует',
			},
			{
				id: 8,
				title: 'Гидроизоляция',
				value: 'Изоспан АМ',
			},
			{
				id: 9,
				title: 'Пароизоляция',
				value: 'Полиэтиленовая плёнка 200 мк',
			},
			{
				id: 10,
				title: 'Утепление',
				value: 'Стены — 150 мм, пол и кровля — 200 мм',
			},
			{
				id: 11,
				title: 'Пол',
				value: 'Обрезная доска 25×100 мм',
			},
			{
				id: 12,
				title: 'Наружная отделка',
				value: 'Имитация бруса',
			},
			{
				id: 13,
				title: 'Окна',
				value: 'Двухкамерный стеклопакет 1,0×1,2 м, профиль 70 мм',
			},
			{
				id: 14,
				title: 'Входная дверь',
				value: 'Металлическая утеплённая с терморазрывом',
			},
			{
				id: 15,
				title: 'Лестница',
				value: 'Строительная (если предусмотрена проектом)',
			},
		],
	
		images: {
			preview: '/png/wood-slope/wood-slope.jpg',
			gallery: [
				'/png/wood-slope/wood-slope2.jpg',
				// '/png/wood-slope/wood-slope3.jpg',
			],
			plan: '/png/wood-slope/wood-slope-plan.jpg',
		},
	},


	{
		id: 3,
		slug: 'scandi-frame',
		name: 'Деревянная Гармония',
		area: 151,
		floorHeight: 2.7,
		size: {
			width: 13.5,
			length: 8,
		},
		price: 0,
		segment: 'comfort',
	
		shortDescription:
			'Просторный каркасный дом площадью 151 м² для комфортного проживания большой семьи.',
	
		fullDescription:
			'Каркасный дом площадью 151 м² сочетает в себе надёжность, функциональность и современный подход к строительству. Использование материалов камерной сушки обеспечивает долговечность конструкции и комфорт при круглогодичном проживании.',
	
		specification: [
			{
				id: 1,
				title: 'Каркас наружных стен',
				value: 'Обвязочный брус 50×200 мм камерной сушки',
			},
			{
				id: 2,
				title: 'Стропильная система',
				value: 'Лаги пола и перекрытий 50×200 мм камерной сушки',
			},
			{
				id: 3,
				title: 'Черновой пол',
				value: 'Доска 25×100 мм',
			},
			{
				id: 4,
				title: 'Контробрешётка',
				value: 'Кровля 50×50 мм, стены 25×50 мм',
			},
			{
				id: 5,
				title: 'Кровля',
				value: 'Профлист 0,5 мм',
			},
			{
				id: 6,
				title: 'Отделка потолка',
				value: 'Подготовка под натяжной потолок',
			},
			{
				id: 7,
				title: 'Внутренняя отделка',
				value: 'Отсутствует',
			},
			{
				id: 8,
				title: 'Гидроизоляция',
				value: 'Изоспан АМ',
			},
			{
				id: 9,
				title: 'Пароизоляция',
				value: 'Полиэтиленовая плёнка 200 мк',
			},
			{
				id: 10,
				title: 'Утепление',
				value: 'Стены — 150 мм, пол и кровля — 200 мм',
			},
			{
				id: 11,
				title: 'Пол',
				value: 'Обрезная доска 25×100 мм',
			},
			{
				id: 12,
				title: 'Наружная отделка',
				value: 'Имитация бруса',
			},
			{
				id: 13,
				title: 'Окна',
				value: 'Двухкамерный стеклопакет 1,0×1,2 м, профиль 70 мм',
			},
			{
				id: 14,
				title: 'Входная дверь',
				value: 'Металлическая утеплённая с терморазрывом',
			},
			{
				id: 15,
				title: 'Лестница',
				value: 'Строительная (если предусмотрена проектом)',
			},
		],
	
		images: {
			preview: '/png/scandi-frame/scandi-frame.jpg',
			gallery: [
				'/png/scandi-frame/scandi-frame2.jpg',
				'/png/scandi-frame/scandi-frame3.jpg',
				'/png/scandi-frame/scandi-frame4.jpg',
				'/png/scandi-frame/scandi-frame5.jpg',
				'/png/scandi-frame/scandi-frame-plan-2.jpg',
			],
			plan: '/png/scandi-frame/scandi-frame-plan-1.jpg',
		},
	},

	{
		id: 4,
		slug: 'karkasnyy-dom-shale',
		name: 'Каркасный дом в стиле шале',
		area: 72,
		floorHeight: 2.5, // минимальная, максимум укажем в описании
		size: {
			width: 8,
			length: 9,
		},
		price: 0,
		segment: 'comfort',
	
		shortDescription:
			'Каркасный дом в стиле шале с панорамным остеклением и высокими потолками для круглогодичного проживания.',
	
		fullDescription:
			'Каркасный дом в стиле шале 8×9 м — просторный, светлый и тёплый проект для круглогодичной жизни. Панорамное остекление и потолки высотой до 3,6 м создают ощущение большого открытого пространства. Дом подойдёт тем, кто ценит современный внешний вид и практичность в одном решении.',
	
		specification: [
			{
				id: 1,
				title: 'Фундамент',
				value: 'Свайно-винтовой 108×2500 мм',
			},
			{
				id: 2,
				title: 'Каркас',
				value: 'Калиброванный, камерной сушки',
			},
			{
				id: 3,
				title: 'Кровля',
				value: 'Металлочерепица Monterey 0,5 мм',
			},
			{
				id: 4,
				title: 'Наружная отделка',
				value: 'Имитация бруса А/В 16×140 мм',
			},
			{
				id: 5,
				title: 'Ветро-влагозащита',
				value: 'ОСП-3 8 мм',
			},
			{
				id: 6,
				title: 'Окна и входная группа',
				value: 'ПВХ, профиль 70 мм',
			},
			{
				id: 7,
				title: 'Утепление',
				value: 'Стены — 150 мм, пол и потолок — 200 мм',
			},
			{
				id: 8,
				title: 'Перегородки',
				value: 'Шумоизоляция 100 мм',
			},
			{
				id: 9,
				title: 'Пароизоляция',
				value: 'ПК-150 с проклейкой швов',
			},
			{
				id: 10,
				title: 'Внутренняя отделка',
				value: 'Имитация бруса А/В',
			},
			{
				id: 11,
				title: 'Потолок',
				value: 'Имитация бруса',
			},
			{
				id: 12,
				title: 'Пол',
				value: 'Шпунт 36 мм',
			},
			{
				id: 13,
				title: 'Межкомнатные двери',
				value: 'Массив сосны',
			},
			{
				id: 14,
				title: 'Плинтусы и наличники',
				value: 'Деревянные',
			},
			{
				id: 15,
				title: 'Электрика',
				value: 'Щит, панели, выключатели, освещение',
			},
			{
				id: 16,
				title: 'Высота потолков',
				value: 'От 2,5 до 3,6 м',
			},
			{
				id: 17,
				title: 'Планировочные решения',
				value: 'Несколько вариантов',
			},
		],
	
		images: {
			preview: '/png/shale/shale.jpg',
			gallery: [
				'/png/shale/shale2.jpg',
				'/png/shale/shale3.jpg',
				'/png/shale/shale4.jpg',
				'/png/shale/shale5.jpg',
				'/png/shale/shale6.jpg',
				'/png/shale/shale-plan-2.jpg',
			],
			plan: '/png/shale/shale-plan-1.jpg',
		},
	},

	{
		id: 5,
		slug: 'dom-48',
		name: 'Каркасный дом 48 м²',
		area: 48,
		floorHeight: 2.5,
		size: {
			width: 6,
			length: 8,
		},
		price: 0,
		segment: 'economy',
	
		shortDescription:
			'Компактный одноэтажный каркасный дом 6×8 м с крыльцом, отлично подойдёт для дачи или гостевого дома.',
	
		fullDescription:
			'Каркасный дом площадью 48 м² — практичное решение для сезонного или круглогодичного проживания. Компактные размеры, продуманная планировка и наличие крыльца делают дом удобным для небольшого участка.',
	
		specification: [
			{ id: 1, title: 'Этажность', value: '1 этаж' },
			{ id: 2, title: 'Общая площадь', value: '48 м²' },
			{ id: 3, title: 'Жилая площадь', value: '44 м²' },
			{ id: 4, title: 'Габариты', value: '6×8 м' },
			{ id: 5, title: 'Крыльцо', value: '2×2 м' },
		],
	
		images: {
			preview: '/png/orange/orange.jpg',
			gallery: [
				'/png/orange/orange2.jpg',
				
				// '/png/orange/orange-plan-2.jpg',
			],
			plan: '/png/orange/orange-plan.jpg',
		},
	}
	
	
	


	
];
