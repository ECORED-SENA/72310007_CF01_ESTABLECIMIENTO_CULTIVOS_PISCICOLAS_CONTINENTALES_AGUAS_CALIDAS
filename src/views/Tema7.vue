<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Selección, manejo y siembra de especies
    .color___box_1
      .px-5
        .row.justify-content-center.align-items-center.mb-5
          .col-xl.mb-4.mb-lg-0
            .box___style_1.fix___box_1(data-aos="fade-right")
              p.mb-0 El proceso de selección, transporte y siembra de peces es una etapa fundamental dentro de la piscicultura, ya que de su correcta ejecución depende, en gran medida, la supervivencia, adaptación y crecimiento de los organismos. Un manejo inadecuado puede generar estrés, enfermedades o mortalidad, afectando directamente la rentabilidad del cultivo. Por ello, cada fase debe realizarse de forma técnica, cuidadosa y siguiendo procedimientos adecuados que garanticen el bienestar de los peces y el éxito del sistema productivo.
          .col-xl-auto.col-md-9(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/img131.png', alt='').m-auto
        <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
        #t_7_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 7.1 Selección de la especie
        p.mb-5 La selección de la especie piscícola es el primer paso y uno de los más importantes en todo el proceso productivo. No todas las especies se adaptan a cualquier ambiente, por lo que es necesario analizar cuidadosamente las condiciones del lugar, los recursos disponibles y las oportunidades del mercado.
        .row.justify-content-center.mb-5
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            .box___style_h4_p.h-100
              h4.mb-0.text-center.fit___h4_card Condiciones del clima y agua
              .box___card_p
                p.mb-0 Se debe analizar la temperatura, disponibilidad y calidad del agua. Por ejemplo, especies como la tilapia requieren temperaturas entre 24 °C y 32 °C.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_h4_p.h-100
              h4.mb-0.text-center.fit___h4_card Sistema de producción
              .box___card_p
                p.mb-0 En sistemas básicos se recomiendan especies resistentes; en sistemas tecnificados pueden manejarse especies con mayores requerimientos.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_h4_p.h-100
              h4.mb-0.text-center.fit___h4_card  Análisis del mercado
              .box___card_p
                p.mb-0 Permite identificar especies con mayor demanda, mejor precio y facilidad de comercialización.
          .col-xl-3.col-md-9(data-aos="fade-left")
            .box___style_h4_p.h-100
              h4.mb-0.text-center.fit___h4_card  Selección adecuada de la especie
              .box___card_p
                p.mb-0 La especie debe ser resistente, de rápido crecimiento, fácil manejo y buena aceptación comercial.
        p.mb-0 Una adecuada selección reduce riesgos, facilita el manejo y favorece una mejor producción.
        <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
        Separador
        #t_7_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 7.2 Manejo y transporte de alevinos
        p.mb-5 El transporte de alevinos es una fase crítica, ya que durante este proceso los peces son vulnerables al estrés, cambios de temperatura y falta de oxígeno.
        .bg___carrusel
          .px-5
            SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img132.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Selección de alevinos de calidad
                p.mb-0.text-center Los peces deben ser activos, de tamaño uniforme y sin deformaciones ni signos de enfermedad.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img133.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Uso de bolsas adecuadas
                p.mb-0.text-center Se recomienda utilizar bolsas plásticas resistentes, limpias y preferiblemente dobles.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img134.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Proporción de agua y oxígeno
                p.mb-0.text-center La bolsa debe contener aproximadamente un tercio de agua y dos tercios de oxígeno puro.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img135.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Cantidad de peces por bolsa
                p.mb-0.text-center No se debe sobrecargar la bolsa para evitar estrés y disminución de oxígeno.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img136.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Condiciones de transporte
                p.mb-0.text-center Las bolsas deben mantenerse en sombra y evitar golpes o movimientos bruscos.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img137.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Tiempo de traslado
                p.mb-0.text-center Se recomienda que el transporte no supere las 6 horas en condiciones normales.
            p.mb-0 La aplicación adecuada de estas medidas reduce la mortalidad y favorece una mejor adaptación al cultivo.
            <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
            Separador
            #t_7_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
              h2 7.3 Técnicas de siembra
    p.mb-5 La siembra de alevinos corresponde a un proceso técnico de aclimatación que permite adaptar gradualmente los peces a las nuevas condiciones del estanque.
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .box___card_sinbordes_3.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img138.jpg', alt="" ).m-auto
            h4.text-center Flotación de las bolsas
            .box___card_sinbordes_p
              p.mb-0.text-center Las bolsas cerradas se colocan sobre el agua durante 15 a 20 minutos para igualar temperaturas.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___card_sinbordes_3.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img139.jpg', alt="" ).m-auto
            h4.text-center Igualación progresiva del agua
            .box___card_sinbordes_p
              p.mb-0.text-center Se agrega agua del estanque dentro de la bolsa cada 5 minutos para adaptar los peces a las nuevas condiciones químicas.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___card_sinbordes_3.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img140.jpg', alt="" ).m-auto
            h4.text-center Liberación lenta de los peces
            .box___card_sinbordes_p
              p.mb-0.text-center Los peces deben salir gradualmente, evitando lanzarlos bruscamente al estanque.
      .col-xl-3.col-md-9(data-aos="fade-left")
        .box___card_sinbordes_3.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img141.jpg', alt="" ).m-auto
            h4.text-center Condiciones adecuadas de siembra
            .box___card_sinbordes_p
              p.mb-0.text-center Se recomienda sembrar en horas frescas, evitando el calor intenso del mediodía.
    p.mb-0 Estas acciones reducen el estrés y favorecen la supervivencia de los peces durante la siembra.
    .color___box_1
      .px-5
        <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
        Separador
        #t_7_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 7.4 Manejo inicial del cultivo
        p.mb-5 Después de la siembra, los primeros días son fundamentales para la adaptación de los peces, por lo que se requiere observación constante y manejo cuidadoso.
        .row.justify-content-center.mb-5
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            .box___style_h4_p.h-100
              h4.mb-0.text-center Observación del comportamiento
              .box___card_p
                p.mb-0 Permite identificar signos de estrés, problemas de oxígeno o alteraciones en el sistema.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_h4_p.h-100
              h4.mb-0.text-center Inicio gradual de la alimentación
              .box___card_p
                p.mb-0 Se recomienda esperar entre 12 y 24 horas antes de suministrar alimento.
          .col-xl-3.col-md-9(data-aos="fade-left")
            .box___style_h4_p.h-100
              h4.mb-0.text-center Control de condiciones ambientales
              .box___card_p
                p.mb-0 Incluye revisión de temperatura, oxígeno y color del agua para detectar problemas tempranos.
        p.mb-0 Un manejo adecuado durante esta etapa favorece la adaptación y disminuye riesgos sanitarios.
        <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
        Separador
        #t_7_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 7.5 Control post-siembra 
        .row.justify-content-center.align-items-center.mb-0
          .col-xl.mb-4.mb-lg-0
            p El control posterior a la siembra permite evaluar si el proceso fue exitoso y realizar ajustes en el manejo del cultivo.
            ul.fa-ul.estilo___ul.mb-3
              li.mb-1
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Verificación de supervivencia:] permite identificar mortalidad y estimar el porcentaje de supervivencia.
              li.mb-1
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Ajuste del manejo:] incluye medidas como reducir alimentación, mejorar aireación o renovar agua.
              li.mb-1
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Registro de información	facilita:] controlar datos relacionados con cantidad de peces, mortalidad y alimentación.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Seguimiento continuo:] durante las primeras semanas se debe realizar monitoreo diario del comportamiento y calidad del agua.
            p.mb-0 El seguimiento constante favorece la toma de decisiones y mejora el desarrollo del sistema productivo.
          .col-xl-auto.col-md-9(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/img142.png', alt='').m-auto

</template>

<script>
export default {
  name: 'Tema7',
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
