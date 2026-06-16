<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Establecimiento y manejo de cultivos piscícolas en aguas cálidas',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> identificar los conceptos clave relacionados con la piscicultura en aguas cálidas, incluyendo sistemas de producción, calidad del agua, manejo sanitario y buenas prácticas piscícolas.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué es la piscicultura continental?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cultivo de peces en aguas marinas abiertas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cría de peces en aguas dulces interiores.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Producción exclusiva de peces ornamentales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Captura de peces en ríos naturales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Cuál es una ventaja de la piscicultura continental?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Depende totalmente de la pesca artesanal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'No requiere manejo sanitario constante.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Permite eliminar el uso de alimento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Facilita el control del sistema productivo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué sistema piscícola utiliza mayor tecnificación?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Piscicultura extensiva.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Piscicultura artesanal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Piscicultura superintensiva.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Piscicultura tradicional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál especie presenta alta adaptabilidad y rápido crecimiento?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Bocachico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Bagre rayado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Carpa común.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Tilapia (Oreochromis spp.).',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué rango de temperatura favorece especies de aguas cálidas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '10 °C a 18 °C.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '18 °C a 22 °C.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '24 °C a 32 °C.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '35 °C a 40 °C.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué criterio favorece la comercialización de una especie?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Capacidad de excavación del suelo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Nivel de evaporación del estanque.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cantidad de sedimentos del agua.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aceptación comercial del pescado.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué parámetro del agua es esencial para la respiración de los peces?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Conductividad eléctrica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Nivel de salinidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Oxígeno disuelto.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cantidad de fósforo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Cuál es el rango ideal de pH en piscicultura?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '6.5 a 8.5.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '3.0 a 5.0.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '5.5 a 6.0.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '9.0 a 10.5.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué color del agua indica exceso de algas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Transparente brillante.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verde intenso.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Azul intenso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Gris metálico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué puede indicar un olor a huevo podrido en el agua?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Presencia de alimento fresco.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Alta oxigenación natural.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Presencia de sulfuro de hidrógeno.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Correcta aireación del sistema.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Qué ocurre con una densidad excesiva de peces?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mejora totalmente la oxigenación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Disminuye el estrés en peces.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reduce el consumo de alimento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumenta el riesgo de enfermedades.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Qué instrumento se utiliza para medir la turbidez?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Disco de Secchi.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Anemómetro digital.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Termómetro flotante.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Microscopio óptico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Cuál es el suelo más recomendado para piscicultura?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Suelo arenoso seco.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Suelo franco arcilloso.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Suelo rocoso compacto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Suelo gravilloso fino.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Qué prueba evalúa la plasticidad del suelo?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Prueba del oxígeno.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Prueba del color.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Prueba del anillo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Prueba del estanque.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Qué acción ayuda a prevenir enfermedades en piscicultura?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sobrealimentar diariamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir completamente el agua.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aumentar el estrés del pez.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mantener agua limpia y oxigenada.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: '¿Qué medida corresponde a bioseguridad?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Desinfectar herramientas y equipos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Incrementar residuos orgánicos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar controles sanitarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Permitir ingreso libre de animales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Qué debe hacerse antes de liberar los alevinos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Introducirlos inmediatamente al estanque.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Flotar las bolsas sobre el agua.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir totalmente el oxígeno.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Vaciar el agua de transporte.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Qué porcentaje de recambio parcial de agua es recomendado?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '1 % a 5 %.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '50 % a 80 %.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '10 % a 30 %.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '90 % a 100 %.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Qué parámetro influye directamente en el metabolismo del pez?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Color del estanque.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Forma del terreno.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Altura de las compuertas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Temperatura del agua.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: '¿Qué favorece el manejo responsable del cultivo?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Uso eficiente del recurso hídrico.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Uso indiscriminado de químicos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Vertimiento de residuos al agua.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminación del monitoreo diario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
