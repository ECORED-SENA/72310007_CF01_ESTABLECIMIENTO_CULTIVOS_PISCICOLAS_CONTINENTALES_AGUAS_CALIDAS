<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Buenas Prácticas Piscícolas (BPP)
    .color___box_1
      .px-5
        .row.justify-content-center.align-items-center.mb-5
          .col-xl.mb-4.mb-lg-0
            .box___style_1.fix___box_1(data-aos="fade-right")
              p.mb-0 Las Buenas Prácticas Piscícolas (BPP) reúnen procedimientos, medidas técnicas y condiciones sanitarias orientadas a garantizar una producción eficiente, segura y sostenible. Su aplicación permite mejorar la calidad del cultivo, prevenir enfermedades y fortalecer el manejo adecuado de los sistemas piscícolas durante todas las etapas del proceso productivo.
          .col-xl-auto.col-md-9(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/img48.png', alt='').m-auto
        <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
        #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.1 Concepto e importancia de las BPP
        p.mb-5 A continuación, se presenta un video sobre las Buenas Prácticas Piscícolas (BPP), orientado a comprender su importancia en la producción acuícola segura, eficiente y sostenible.
        figure(data-aos="zoom-in")
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption.fit___figcaption-video #[b Video]. Importancia de las Buenas Prácticas Piscícolas (BPP)
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Normatividad vigente en piscicultura
    .color___box_1
      .px-5
        p.mb-5 La piscicultura está regulada por normativas que buscan garantizar la sanidad, inocuidad y sostenibilidad ambiental. Entre las principales disposiciones aplicables se encuentran las siguientes:
        .row.align-items-center.mb-5
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src="@/assets/curso/temas/img49.png", alt="" ).m-auto
          .col-xl
            AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
              .row(titulo="Normas del ICA (Instituto Colombiano Agropecuario)").ajuste-cajaAcordion
                p.mb-3 Regulan aspectos relacionados con sanidad animal y control de enfermedades.
              .row(titulo="Regulaciones de la AUNAP (Autoridad Nacional de Acuicultura y Pesca)").ajuste-cajaAcordion
                p.mb-3 Establecen lineamientos sobre producción y comercialización.
              .row(titulo="Normativa ambiental del Ministerio de Ambiente (Decreto 1076 de 2015)").ajuste-cajaAcordion
                p.mb-3 Regula el uso del agua y el manejo de vertimientos.
              .row(titulo="Lineamientos del INVIMA").ajuste-cajaAcordion
                p.mb-3 Establecen condiciones relacionadas con inocuidad alimentaria.
              .row(titulo="Recomendaciones de la FAO").ajuste-cajaAcordion
                p.mb-3 Promueven prácticas de acuicultura responsable.
        p.mb-0 Estas normas regulan aspectos como el uso de medicamentos, manejo de residuos, calidad del agua y bienestar animal.
        <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
        Separador
        #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.3 Disposiciones para la presiembra y siembra
        p.mb-5 Antes de introducir los peces al estanque, es fundamental garantizar condiciones adecuadas que favorezcan el adecuado desarrollo del cultivo y reduzcan riesgos sanitarios. Las principales disposiciones para la presiembra y siembra se presentan a continuación:
        .row.justify-content-center.mb-5
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            .box___style_h4_p.h-100
              h4.mb-0.text-center.fit___h4_card Limpieza total del estanque
              .box___card_p
                p.mb-0 Permite eliminar residuos y condiciones que afecten el cultivo.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_h4_p.h-100
              h4.mb-0.text-center.fit___h4_card Verificación de parámetros del agua
              .box___card_p
                p.mb-0 Garantiza condiciones adecuadas para el desarrollo de los peces.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_h4_p.h-100
              h4.mb-0.text-center.fit___h4_card Selección de alevinos sanos y activos
              .box___card_p
                p.mb-0 Favorece un mejor desempeño productivo y sanitario.
          .col-xl-3.col-md-9(data-aos="fade-left")
            .box___style_h4_p.h-100
              h4.mb-0.text-center.fit___h4_card Aclimatación progresiva de los peces
              .box___card_p
                p.mb-0 Reduce el estrés durante el ingreso al sistema de cultivo.
    p.mb-0 Estas acciones reducen el estrés, aumentan la supervivencia y evitan problemas sanitarios desde el inicio del cultivo.
    <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.4 Bioseguridad en sistemas piscícolas
    p.mb-5 La bioseguridad consiste en aplicar medidas orientadas a evitar la entrada y propagación de enfermedades dentro del sistema productivo. Entre las principales medidas de bioseguridad se encuentran las siguientes:
    .color___box_1
      .px-5
        .bg___carrusel
          .px-5
            .row.align-items-center.mb-5
              .col-xl-4(data-aos="fade-right")
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img50.png', alt='' style="max-width: 350px").m-auto
              .col-xl-8(data-aos="fade-left")
                SlyderF(columnas="col-lg-6 col-xl-6")
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/temas/img51.svg' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Control de ingreso de personas y equipos
                    p.mb-0.text-center Reduce el riesgo de contaminación y transmisión de enfermedades.
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/temas/img52.svg' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Desinfección de herramientas
                    p.mb-0.text-center Disminuye la propagación de agentes patógenos.
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/temas/img53.svg' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Uso de agua de buena calidad
                    p.mb-0.text-center Favorece condiciones sanitarias adecuadas.
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/temas/img54.svg' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Manejo adecuado de peces enfermos
                    p.mb-0.text-center Evita la propagación de enfermedades dentro del cultivo.
            p.mb-0 Una adecuada bioseguridad protege la producción y evita pérdidas masivas.
            <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
            Separador
            #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
              h2 3.5 Manejo responsable y sostenible del cultivo 
            p.mb-5 El manejo responsable y sostenible del cultivo implica desarrollar la producción piscícola sin afectar el medio ambiente y garantizando la continuidad del sistema productivo. 
            .row.justify-content-center.mb-5
              .col-xl-10
                .box___style_5(data-aos="zoom-in")
                  .row.align-items-center
                    .col-xl-auto
                      figure
                        img(src='@/assets/curso/temas/img55.jpg', alt='').m-auto
                    .col-xl.fit___box_container
                      p Las principales prácticas relacionadas con el manejo responsable y sostenible son las siguientes:
                      ul.fa-ul.estilo___ul.mb-0
                        li.mb-1
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | #[b Uso eficiente del agua:] permite optimizar el recurso hídrico durante el cultivo.
                        li.mb-1
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | #[b Manejo adecuado de residuos:] reduce impactos negativos sobre el entorno.
                        li.mb-1
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | #[b Evitar contaminación:] favorece condiciones ambientales adecuadas.
                        li.mb-0
                          span.fa-li
                            i.fas.fa-arrow-alt-circle-right
                          | #[b Uso responsable de insumos:] contribuye a la sostenibilidad del sistema productivo.
            p.mb-0 Estas prácticas aseguran la continuidad del sistema productivo a largo plazo.          

</template>

<script>
export default {
  name: 'Tema3',
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
