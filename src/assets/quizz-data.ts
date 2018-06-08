// tslint:disable:object-literal-key-quotes
// tslint:disable:max-line-length
import { Quizz } from "../models/quizz.model"

export const quizzData: Quizz = {
	"questions": [
		{
			"title": "¿Cómo es el presupuesto para el proyecto?",
			"singleIcon": false,
			"answers": [
				{
					"title": "El mínimo posible",
					"image": "euro-sign",
					"points": 2
				},
				{
					"title": "Ajustado",
					"image": "euro-sign",
					"points": 3
				},
				{
					"title": "Ampliable si el proyecto es interesante",
					"image": "euro-sign",
					"points": 6
				},
				{
					"title": "Alto",
					"image": "euro-sign",
					"points": 10
				}
			]
		},
		{
			"title": "Time-to-market: ¿Cuánto tiempo disponéis para el desarrollo?",
			"singleIcon": false,
			"answers": [
				{
					"title": "Queremos un prototipo lo antes posible",
					"image": "exclamation",
					"points": 0
				},
				{
					"title": "Un par de meses",
					"image": "exclamation",
					"points": 0
				},
				{
					"title": "Entre tres y cuatro meses",
					"image": "exclamation",
					"points": 0
				},
				{
					"title": "Seis meses o más para escalar",
					"image": "exclamation",
					"points": 0
				}
			]
		},
		{
			"title": "¿Con qué frecuencia será usada vuestra app?",
			"singleIcon": true,
			"answers": [
				{
					"title": "Diariamente",
					"image": "stopwatch",
					"points": 4
				},
				{
					"title": "Una vez por semana",
					"image": "clock",
					"points": 2
				},
				{
					"title": "Consultas esporádicas",
					"image": "calendar-alt",
					"points": 2
				},
				{
					"title": "Una vez o sólo en situaciones concretas",
					"image": "calendar",
					"points": 0
				}
			]
		},
		{
			"title": "¿Quieres que tu app pueda usarse desde ordenadores y/o web?",
			"singleIcon": true,
			"answers": [
				{
					"title": "Sólo desde móviles iOS y Android",
					"image": "mobile",
					"points": 6
				},
				{
					"title": "Ahora no, quizás en el futuro",
					"image": "tablet-alt",
					"points": 3
				},
				{
					"title": "Sí, pero quiero que tengan funcionalidades distintas",
					"image": "laptop",
					"points": 2
				},
				{
					"title": "Sí y quiero que sean iguales",
					"image": "desktop",
					"points": 0
				}
			]
		},
		{
			"title": "¿Tu app va a usar funciones propias del teléfono?",
			"singleIcon": true,
			"answers": [
				{
					"title": "No, sólo quiero mostrar y recibir información",
					"image": "bars",
					"points": 4
				},
				{
					"title": "Quiero geolocalización y/o usar la cámara",
					"image": "camera",
					"points": 10
				},
				{
					"title": "Y además poder leer/enviar SMS y leer los contactos",
					"image": "envelope",
					"points": 15
				},
				{
					"title": "Y también bluetooth y se comunicará con otras apps",
					"image": "signal",
					"points": 20
				}
			]
		},
		{
			"title": "¿Quieres una apariencia convencional o algo innovador?",
			"singleIcon": false,
			"answers": [
				{
					"title": "Convencional",
					"image": "paint-brush",
					"points": 8
				},
				{
					"title": "Quiero que sea bonita, pero sin sacrificar usabilidad",
					"image": "paint-brush",
					"points": 4
				},
				{
					"title": "Quiero algo distinto a las demás apps",
					"image": "paint-brush",
					"points": 2
				},
				{
					"title": "Quiero un diseño 100% customizable e innovador",
					"image": "paint-brush",
					"points": 0
				}
			]
		}
	],
	"results": [
		{
			"title": "Progressive Web App",
			"description": "Quieres una app rápida de desarrollar, y fácil de encontrar para los clientes. No te importa sacrificar un poco de rendimiento, ni posibles problemas de escalabilidad en un futuro.",
			"image": "pwa.png",
			"totalPoints": 15
		},
		{
			"title": "Framework de JS",
			"description": "Quieres una app que tenga un aspecto nativo y que sea rápida de desarrollar. Tienes previsto crear una versión web en un futuro.",
			"image": "reactnative.png",
			"totalPoints": 30
		},
		{
			"title": "Solución nativa multiplataforma",
			"description": "Quieres una app con un rendimiento casi nativo y un coste de mantenimiento bajo. Necesitas acceder a funciones propias del teléfono.",
			"image": "xamarin.png",
			"totalPoints": 45
		},
		{
			"title": "Solución nativa",
			"description": "Quieres una app 100% nativa y que sea ligera, aunque el coste de mantenimiento sea alto.",
			"image": "nativeplatform.png",
			"totalPoints": 99
		}
	]
}
