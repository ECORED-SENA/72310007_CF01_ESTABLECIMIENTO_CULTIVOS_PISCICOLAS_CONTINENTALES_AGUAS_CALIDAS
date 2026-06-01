<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Selección de la especie piscícola
    .color___box_1
      .px-5
        .row.justify-content-center.align-items-center.mb-5
          .col-xl.mb-4.mb-lg-0
            .box___style_1.fix___box_1(data-aos="fade-right")
              p.mb-0 La selección de la especie piscícola es un proceso estratégico que define el éxito del sistema productivo. Esta decisión debe basarse en la relación entre las condiciones del entorno, los recursos disponibles y los objetivos económicos del productor, garantizando eficiencia, sostenibilidad y adaptación al sistema de cultivo.
          .col-xl-auto.col-md-9(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/img25.png', alt='').m-auto
        <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.1 Características bioecológicas de las especies
        p.mb-5 Para seleccionar una especie adecuada, es necesario analizar sus características biológicas en función del sistema de producción y del entorno donde se desarrollará el cultivo.
        .bg___carrusel
          .px-5
            SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img26.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Capacidad de adaptación
                p.mb-0.text-center Se deben priorizar especies con alta capacidad de adaptación y buen desempeño en condiciones de cultivo.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img27.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Resistencia a enfermedades
                p.mb-0.text-center Favorece la estabilidad del sistema y reduce riesgos sanitarios.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img28.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Comportamiento en cautiverio
                p.mb-0.text-center Permite un manejo más eficiente dentro del sistema productivo.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img29.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Tolerancia a variaciones ambientales
                p.mb-0.text-center Facilita el desarrollo de la especie ante cambios en el entorno.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img30.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Compatibilidad en policultivo
                p.mb-0.text-center Permite integrar diferentes especies en un mismo sistema de cultivo.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img31.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Hábito alimenticio
                p.mb-0.text-center Influye directamente en los costos de producción; las especies omnívoras o herbívoras suelen ser más eficientes y económicas.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img32.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Tasa de crecimiento
                p.mb-0.text-center Permite evaluar el rendimiento productivo de la especie.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img33.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Facilidad de reproducción
                p.mb-0.text-center Favorece la continuidad y sostenibilidad del cultivo.
            <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
            Separador
            #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
              h2 2.2 Criterios socioeconómicos del mercado
            p.mb-5 La viabilidad de un cultivo piscícola depende, en gran medida, de su aceptación en el mercado. Por ello, la selección de la especie debe responder a la demanda del consumidor y a las condiciones comerciales de la región.
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 2.
              span Criterios socioeconómicos del mercado
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Criterios socioeconómicos
                    th.texto-left Explicación
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Aceptación del consumidor
                    td.texto-left Es fundamental elegir especies con buena aceptación por su sabor, textura y presentación.
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Precio de comercialización
                    td.texto-left Permite determinar la rentabilidad del cultivo.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Costos de producción
                    td.texto-left Influyen en la sostenibilidad económica del sistema productivo.
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Acceso a insumos
                    td.texto-left Se debe considerar la disponibilidad de alevinos y alimento balanceado.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Canales de comercialización
                    td.texto-left Facilitan la distribución y venta del producto.
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Demanda local o regional
                    td.texto-left Permite identificar oportunidades de mercado.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Estabilidad del mercado
                    td.texto-left Contribuye a garantizar sostenibilidad económica.
    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Cultivo de especies piscícolas: selección, manejo y cuidados
    p.mb-5 Una vez seleccionada la especie, se deben aplicar prácticas de manejo que aseguren su adecuado desarrollo durante todo el ciclo productivo.
    .color___box_2
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-10
            .box___style_5(data-aos="zoom-in")
              .row.align-items-center
                .col-xl-auto
                  figure
                    img(src='@/assets/curso/temas/img34.jpg', alt='').m-auto
                .col-xl.fit___box_container
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | El proceso inicia con la selección de alevinos de buena calidad, uniformes y libres de enfermedades. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Durante el cultivo, es fundamental mantener condiciones adecuadas del sistema, realizar monitoreo constante y aplicar medidas preventivas de sanidad.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | El manejo incluye alimentación oportuna, control del crecimiento, seguimiento del comportamiento y mantenimiento del sistema.
        p.mb-0 Estas acciones permiten optimizar la producción, reducir pérdidas y mejorar el rendimiento del cultivo.
        <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
        Separador
        #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.4 Cálculos básicos para la siembra
        .row.justify-content-center.align-items-center.mb-5
          .col-xl.mb-4.mb-lg-0
            .box___style_1.fix___box_1-1(data-aos="fade-right")
              p.mb-0 La planificación de la siembra es una etapa fundamental en piscicultura, ya que permite establecer la cantidad adecuada de peces que pueden cultivarse sin afectar el equilibrio del sistema productivo. Estos cálculos facilitan organizar el manejo técnico, optimizar el uso del espacio y reducir riesgos asociados con sobrepoblación o baja productividad.
          .col-xl-auto.col-md-9(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/img35.png', alt='').m-auto
        .row.justify-content-center.mb-5
          .col-xl-10
            .box___style_5(data-aos="zoom-in")
              .row.align-items-center
                .col-xl-auto
                  figure
                    img(src='@/assets/curso/temas/img36.jpg', alt='').m-auto
                .col-xl.fit___box_container
                  p Para realizar los cálculos de siembra, se deben considerar diferentes factores relacionados con las características del sistema de cultivo y las condiciones ambientales disponibles.
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b Área o volumen del estanque:] permite determinar la capacidad física disponible para el cultivo de los peces. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b Densidad de siembra:] define la cantidad de peces por metro cuadrado o metro cúbico según la especie y el sistema productivo. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b Especie seleccionada:] cada especie presenta requerimientos diferentes de espacio, oxígeno y manejo. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b Disponibilidad de agua:] influye en la renovación, calidad y estabilidad del sistema de cultivo. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b Nivel de tecnificación:] sistemas más tecnificados soportan mayores densidades debido al control de oxígeno, alimentación y calidad del agua. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b Tamaño de los alevinos:] el peso y tamaño inicial afectan la cantidad de individuos que pueden sembrarse. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b Objetivo productivo:] la producción para autoconsumo, engorde o comercialización modifica la planificación del cultivo.
    p.mb-5 Una densidad adecuada contribuye al bienestar de los peces, favorece el crecimiento uniforme y disminuye la competencia por alimento y oxígeno. Por el contrario, una densidad excesiva puede generar estrés, enfermedades, baja calidad del agua y aumento de mortalidad. En piscicultura, los cálculos básicos de siembra suelen expresarse mediante fórmulas sencillas que relacionan el área o volumen disponible con la densidad recomendada para la especie.
    .row.justify-content-center.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 3.
          span Cálculos básicos en piscicultura
        .tabla-a(data-aos="zoom-in").mb-5
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Cálculo
                th.texto-left Fórmula
            tbody
              tr
                td.ajuste-border-tabla.texto-left.text-weight-bold Número de peces por área
                td.texto-left Área del estanque × densidad de siembra
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold Número de peces por volumen
                td.texto-left Volumen del estanque × densidad recomendada
              tr
                td.ajuste-border-tabla.texto-left.text-weight-bold Volumen del estanque
                td.texto-left Largo × ancho × profundidad promedio
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold Producción estimada
                td.texto-left Número de peces × peso esperado al final del cultivo
    .color___box_1
      .px-5
        .row.justify-content-center.mb-0
          .col-xl-10
            .box___style_6.p-5(data-aos="zoom-in")
              h5.mb-0 Ejemplo 
              p Un estanque de 200 m² con una densidad recomendada de 5 peces por metro cuadrado tendría:
              .row.justify-content-center.mb-3
                .col-xl-5
                  .box___style_7.text-white
                    p.mb-0.text-center 200 m² × 5 peces = 1.000 peces
              .row.justify-content-center.mb-3
                .col-xl-10
                  .box___style_8
                    p.mb-0 Esto significa que el estanque puede albergar aproximadamente 1.000 peces bajo las condiciones técnicas establecidas.
              p.mb-0 Realizar estos cálculos desde el inicio facilita la organización del alimento, el manejo sanitario, el seguimiento del crecimiento y la proyección económica del cultivo.
        <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
        Separador
        #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.5 Requerimientos para la explotación piscícola
        p.mb-5 Para iniciar un proyecto piscícola, es necesario contar con recursos básicos que aseguren su funcionamiento eficiente.
        .bg___carrusel
          .px-5
            SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img37.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Disponibilidad de agua
                p.mb-0.text-center Se requiere agua en cantidad y calidad adecuada para el cultivo.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img38.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Terreno apto
                p.mb-0.text-center Debe permitir el desarrollo adecuado de la infraestructura piscícola.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img39.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Infraestructura
                p.mb-0.text-center Incluye estanques y canales necesarios para el sistema productivo.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img40.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Insumos
                p.mb-0.text-center Comprende alevinos y alimento para el desarrollo del cultivo.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img41.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Herramientas de monitoreo
                p.mb-0.text-center Permiten controlar las condiciones del sistema.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img42.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Conocimientos técnicos
                p.mb-0.text-center Favorecen un manejo adecuado del cultivo.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img43.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Planificación del sistema productivo
                p.mb-0.text-center Permite prevenir fallas y optimizar el manejo de la producción.
            p.mb-0 También es fundamental contar con conocimientos técnicos y planificación del sistema productivo, lo que permite prevenir fallas y optimizar el manejo del cultivo.
            <!------------------------------------------ SUBTEMA 6 ------------------------------------------>
            Separador
            #t_2_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
              h2 2.6 Tipos de explotación aplicados a la selección de especies 
    p.mb-5 El tipo de explotación influye directamente en la elección de la especie, ya que cada sistema requiere diferentes niveles de adaptación y manejo.
    .fit___width_final
      .bg___slider
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Sistemas de baja intervención
                  p.mb-0 Se seleccionan especies resistentes y de fácil manejo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/img44.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Sistemas tecnificados
                  p.mb-0 Se pueden trabajar especies con mayores requerimientos, siempre que exista control adecuado.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/img45.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Monocultivo
                  p.mb-0 Se cultiva una sola especie según los objetivos productivos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/img46.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Policultivo
                  p.mb-0 Permite optimizar el uso del agua, el alimento y el espacio disponible mediante el cultivo de varias especies compatibles.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/img47.png', alt='' style="max-width: 500px").m-auto

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
