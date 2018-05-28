// tslint:disable:object-literal-key-quotes
import { Quizz } from "../models/quizz.model"

export const quizzData: Quizz = {
	"questions": [
		{
			"title": "¿De qué presupuesto disponéis?",
			"singleIcon": false,
			"answers": [
				{
					"title": "El mínimo posible",
					"image": "euro-sign",
					"result": 0
				},
				{
					"title": "Bajo",
					"image": "euro-sign",
					"result": 1
				},
				{
					"title": "Medio",
					"image": "euro-sign",
					"result": 2
				},
				{
					"title": "Alto",
					"image": "euro-sign",
					"result": 3
				}
			]
		},
		{
			"title": "¿De cuanto tiempo de desarrollo disponéis?",
			"singleIcon": false,
			"answers": [
				{
					"title": "Más de seis meses",
					"image": "exclamation",
					"result": 3
				},
				{
					"title": "Seis meses",
					"image": "exclamation",
					"result": 2
				},
				{
					"title": "Un par de meses",
					"image": "exclamation",
					"result": 1
				},
				{
					"title": "Queremos un prototipo lo antes posible",
					"image": "exclamation",
					"result": 0
				},
			]
		},
		{
			"title": "¿Con qué frecuencia será usada vuestra app?",
			"singleIcon": true,
			"answers": [
				{
					"title": "Diariamente",
					"image": "stopwatch",
					"result": 2
				},
				{
					"title": "Una vez por semana",
					"image": "clock",
					"result": 1
				},
				{
					"title": "Consultas esporádicas",
					"image": "calendar-alt",
					"result": 1
				},
				{
					"title": "Sólo en situaciones concretas",
					"image": "calendar",
					"result": 0
				},
			]
		},
		{
			"title": "¿Quieres que tu app pueda usarse desde ordenadores y/o web?",
			"singleIcon": true,
			"answers": [
				{
					"title": "Sólo desde moviles IOS y Android",
					"image": "mobile",
					"result": 2
				},
				{
					"title": "Tal vez en algún momento del desarrollo",
					"image": "tablet-alt",
					"result": 1
				},
				{
					"title": "Si, pero quiero que tengan funcionalidades distintas",
					"image": "laptop",
					"result": 1
				},
				{
					"title": "Si y quiero que sean iguales",
					"image": "desktop",
					"result": 0
				},
			]
		},
		{
			"title": "¿Tu app va a usar funciones avanzadas del teléfono?",
			"singleIcon": true,
			"answers": [
				{
					"title": "No, sólo quiero mostrar y recibir información",
					"image": "bars",
					"result": 0
				},
				{
					"title": "Quiero geolocalización y/o usar la cámara",
					"image": "camera",
					"result": 1
				},
				{
					"title": "Quiero poder leer/enviar SMS y leer los contactos",
					"image": "envelope",
					"result": 2
				},
				{
					"title": "Usará bluetooth y se comunicará con otras apps",
					"image": "signal",
					"result": 3
				},
			]
		},
		{
			"title": "¿Quieres una apariencia convencional o algo innovador?",
			"singleIcon": false,
			"answers": [
				{
					"title": "Quiero una app lo más parecida a una app normal",
					"image": "paint-brush",
					"result": 2
				},
				{
					"title": "Quiero que sea bonita, pero sin sacrificar usabilidad",
					"image": "paint-brush",
					"result": 1
				},
				{
					"title": "Quiero algo distinto a las demás apps",
					"image": "paint-brush",
					"result": 0
				},
				{
					"title": "Quiero un diseño 100% customizable e innovador",
					"image": "paint-brush",
					"result": 0
				},
			]
		},
	],
	"results": [
		{
			"title": "Progressive Web App",
			"description": "",
			"image": "pwa.png"
		},
		{
			"title": "Framework de JS",
			"description": "Lorem ipsum dolor sit amet",
			"image": ""
		},
		{
			"title": "Solución nativa híbrida",
			"description": "",
			"image": ""
		},
		{
			"title": "Solución nativa",
			"description": "",
			"image": ""
		},
	]
}
