<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Introducción a la piscicultura en aguas cálidas
    .color___box_1
      .px-5
        .row.justify-content-center.align-items-center.mb-5
          .col-xl.mb-4.mb-lg-0
            .box___style_1.fix___box_1(data-aos="fade-right")
              p.mb-0 La piscicultura en aguas cálidas es una actividad productiva en constante crecimiento dentro del sector agropecuario, orientada a la cría, manejo y aprovechamiento de peces en ambientes controlados con temperaturas generalmente superiores a 24 °C. Este tipo de producción se caracteriza por su alta eficiencia biológica, rápida tasa de crecimiento de las especies y buena conversión alimenticia.
          .col-xl-auto.col-md-9(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/img1.png', alt='').m-auto
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/img3.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Además de su importancia económica, la piscicultura cumple un papel fundamental en la seguridad alimentaria, al proveer proteína de alta calidad nutricional. También representa una alternativa viable para el aprovechamiento de recursos disponibles en zonas rurales, especialmente en terrenos no aptos para agricultura o ganadería, permitiendo diversificar la producción y generar ingresos sostenibles.
        <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
        Separador
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.1 Concepto de piscicultura continental
        p.mb-5 La piscicultura continental es la actividad dedicada a la cría y cultivo de peces en aguas dulces ubicadas en el interior del territorio, como estanques, lagunas, embalses, reservorios o sistemas artificiales construidos para este fin. Forma parte de la acuicultura, la cual incluye la producción de diversos organismos hidrobiológicos.
        .row.justify-content-center.align-items-center
          .col-xl.mb-4.mb-lg-0
            .box___style_2(data-aos="fade-right")
              p.mb-0 Su principal ventaja radica en el control que el productor puede ejercer sobre el sistema, incluyendo aspectos como la alimentación, densidad de siembra, manejo sanitario y calidad del agua. Esto permite optimizar el crecimiento de los peces, reducir riesgos productivos y mejorar la eficiencia del sistema.
          .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/img4.jpg', alt='').m-auto
          .col-xl
            figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
              img(src='@/assets/curso/temas/img5.svg', alt='' style="width: 75px")
            p.mb-0 Asimismo, la piscicultura continental facilita el uso integral de los recursos de la finca, contribuyendo al desarrollo de sistemas productivos más diversificados, sostenibles y resilientes frente a cambios climáticos o económicos.
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Importancia productiva y económica
    p.mb-5 La piscicultura en aguas cálidas tiene alta relevancia en el contexto productivo y económico debido a sus múltiples beneficios nutricionales, sociales y comerciales. Esta actividad favorece la producción sostenible de alimentos, fortalece las economías rurales y amplía las oportunidades de generación de ingresos para pequeños y medianos productores. A continuación, se presentan los principales aportes de la piscicultura en aguas cálidas:
    .bg___carrusel
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img7.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img8.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Alto valor nutricional
                p.mb-0.text-center El pescado constituye una fuente de proteína de excelente calidad biológica, rica en aminoácidos esenciales, vitaminas y minerales.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img9.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Alta productividad
                p.mb-0.text-center Permite obtener mayor producción por unidad de superficie en comparación con otras actividades pecuarias
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img10.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Rentabilidad
                p.mb-0.text-center En sistemas bien manejados, puede alcanzar niveles significativos de rentabilidad, favoreciendo la economía del productor.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img11.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Generación de empleo
                p.mb-0.text-center Contribuye al desarrollo rural mediante la creación de empleo directo e indirecto.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img12.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Seguridad alimentaria
                p.mb-0.text-center Facilita el acceso constante a alimentos nutritivos y de alta calidad.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img13.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Aprovechamiento de recursos
                p.mb-0.text-center Permite utilizar eficientemente el agua y los suelos marginales.
        p.mb-0 Adicionalmente, la piscicultura impulsa el desarrollo económico local, fortalece cadenas productivas y responde a la creciente demanda de alimentos saludables en el mercado. Su implementación adecuada favorece modelos productivos sostenibles y contribuye al mejoramiento de la calidad de vida en las comunidades rurales.
    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Sistemas de producción piscícola
    p.mb-5 Los sistemas de producción piscícola se clasifican según el nivel de tecnificación, manejo y control del cultivo. Estas características influyen directamente en la productividad, rentabilidad y sostenibilidad del sistema productivo. A continuación, se presentan las principales modalidades de producción piscícola en aguas cálidas:
    .bg___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Piscicultura extensiva
                p.mb-0 Se desarrolla en cuerpos de agua naturales o adaptados, donde los peces dependen principalmente del alimento natural disponible. La intervención del productor es mínima, con bajas densidades de siembra y escaso control del sistema. Generalmente, se utiliza para autoconsumo o aprovechamiento de recursos existentes.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img15.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Piscicultura semi-intensiva
                p.mb-0 Se realiza en estanques construidos, combinando la producción natural del agua con alimentación suplementaria. Incluye prácticas básicas como fertilización del estanque, manejo ocasional del agua y control limitado. Permite mejorar la producción respecto al sistema extensivo.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img16.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Piscicultura intensiva
                p.mb-0 Se caracteriza por un mayor nivel técnico, incluyendo infraestructura adecuada, control permanente de la calidad del agua, uso de alimento balanceado y densidades de siembra más altas. Este sistema requiere mayor inversión, pero ofrece mayor productividad y control sanitario.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img17.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Piscicultura superintensiva
                p.mb-0 Corresponde a un sistema altamente tecnificado que maximiza la producción mediante aireación constante, recambios de agua, monitoreo continuo de parámetros fisicoquímicos y altas densidades de siembra. La alimentación es totalmente controlada y balanceada, por lo que exige manejo técnico especializado.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img18.png', alt='' style="max-width: 500px").m-auto
    p.mb-0 La elección del sistema de producción depende de factores como disponibilidad de agua, capacidad de inversión, nivel técnico del productor, infraestructura y objetivos comerciales del cultivo.
    <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
    Separador
    .color___box_2
      .px-5
        #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.4 Especies piscícolas de aguas cálidas
        p.mb-5 Las especies piscícolas de aguas cálidas son aquellas que se desarrollan adecuadamente en rangos de temperatura entre 24 °C y 32 °C, presentando rápido crecimiento y buena adaptación a diferentes sistemas de cultivo.
        .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img24.svg" style="max-width: 60px").m-auto
          .col
            h3 Principales especies
        p.mb-5 Las especies más utilizadas en piscicultura de aguas cálidas se destacan por su adaptación, productividad y aceptación comercial.
        .row.justify-content-center.mb-5
          .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            .box___card_sinbordes_1.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img20.png', alt="" ).m-auto
                h4 Tilapia (#[i Oreochromis spp].)
                .box___card_sinbordes_p
                  p.mb-0 Destaca por su alta adaptabilidad, rápido crecimiento, resistencia a condiciones variables y excelente aceptación en el mercado.
          .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-left")
            .box___card_sinbordes_2.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img21.png', alt="" ).m-auto
                h4 Cachama blanca (#[i Piaractus brachypomus])
                .box___card_sinbordes_p
                  p.mb-0 Especie omnívora, resistente, con buena conversión alimenticia y adecuada para sistemas semi-intensivos.
        .row.justify-content-center.mb-5
          .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            .box___card_sinbordes_1.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img22.png', alt="" ).m-auto
                h4 Cachama negra (#[i Colossoma macropomum])
                .box___card_sinbordes_p
                  p.mb-0 Presenta buen crecimiento y capacidad de adaptación a diferentes sistemas de cultivo.
          .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-left")
            .box___card_sinbordes_2.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img23.png', alt="" ).m-auto
                h4 Bocachico (#[i Prochilodus magdalenae])
                .box___card_sinbordes_p
                  p.mb-0 Especie nativa de importancia económica, utilizada generalmente en sistemas de policultivo.
        p.mb-5 La selección adecuada de las especies influye directamente en la productividad, sostenibilidad y rentabilidad del sistema piscícola.
        .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img24.svg" style="max-width: 60px").m-auto
          .col
            h3 Criterios para la selección de especies
        p.mb-5 Para garantizar el éxito del cultivo, la selección de especies debe considerar diferentes aspectos técnicos, productivos y comerciales.
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 1.
          span Criterios para la selección de especies
        .tabla-a(data-aos="zoom-in").mb-5
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Criterio
                th.texto-left Importancia
            tbody
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold Adaptación ambiental
                td.texto-left Permite que la especie se desarrolle adecuadamente según las condiciones climáticas y del agua del lugar.
              tr
                td.ajuste-border-tabla.texto-left.text-weight-bold Resistencia sanitaria
                td.texto-left Favorece la tolerancia a enfermedades y variaciones en la calidad del agua.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold Crecimiento rápido
                td.texto-left Facilita ciclos productivos más cortos y mayor eficiencia del sistema.
              tr
                td.ajuste-border-tabla.texto-left.text-weight-bold Conversión alimenticia
                td.texto-left Mejora el aprovechamiento del alimento suministrado.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold Facilidad de manejo
                td.texto-left Simplifica las labores de reproducción, alimentación y cosecha.
              tr
                td.ajuste-border-tabla.texto-left.text-weight-bold Aceptación comercial
                td.texto-left Incrementa las posibilidades de comercialización según sabor, tamaño y presentación.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold Disponibilidad de alevinos
                td.texto-left Garantiza el acceso oportuno a material biológico de calidad.
        p.mb-0 Una adecuada selección reduce riesgos productivos y contribuye al mejoramiento de la rentabilidad del cultivo.
    <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
    Separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Enfoque de sostenibilidad y bienestar animal 
    p.mb-5 La piscicultura moderna debe desarrollarse bajo principios que garanticen la sostenibilidad del sistema productivo y el bienestar de los animales durante todas las etapas del cultivo.
    .row.justify-content-center.mb-5
      .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .box___style_3.p-5.text-white.h-100
          h4 Sostenibilidad
          p La sostenibilidad en piscicultura implica producir de manera responsable, procurando equilibrio entre productividad, conservación ambiental y aprovechamiento eficiente de los recursos.
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Uso eficiente del agua:] promueve el aprovechamiento racional del recurso hídrico.
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Manejo adecuado de residuos:] reduce la contaminación generada por residuos orgánicos y químicos.
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Conservación ambiental:] favorece la protección del entorno natural y la biodiversidad.
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Reducción del impacto ambiental:] disminuye los efectos negativos derivados de la actividad piscícola.
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | #[b Aprovechamiento sostenible del suelo:] permite utilizar áreas disponibles sin deteriorar sus condiciones productivas.
      .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-left")
        .box___style_4.p-5.h-100
            h4 Bienestar animal
            p El bienestar animal se refiere a proporcionar condiciones adecuadas para el crecimiento, salud y desarrollo de los peces durante todo el ciclo productivo.
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Calidad del agua:] mantener niveles adecuados de oxígeno, pH y temperatura favorece el desarrollo de los peces.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Densidades adecuadas:] evitar el hacinamiento disminuye el estrés y los riesgos sanitarios.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Manejo y transporte:] minimizar el estrés durante la manipulación reduce afectaciones físicas y fisiológicas.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Alimentación balanceada:] garantiza una nutrición adecuada para un crecimiento saludable.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Prevención sanitaria:] un manejo sanitario adecuado disminuye la aparición de enfermedades.
    p.mb-0 La aplicación de estos principios no solo mejora la productividad, sino que también permite cumplir con las exigencias normativas y responder a las demandas actuales del mercado.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
