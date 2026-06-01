<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 8
      h1 Gestión sanitaria y bioseguridad
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_1.fix___box_1(data-aos="fade-right")
          p.mb-0 La gestión sanitaria y la bioseguridad en piscicultura son fundamentales para prevenir enfermedades, reducir mortalidades y garantizar la sostenibilidad del sistema productivo. Los peces viven en un ambiente donde cualquier alteración en el agua, manejo o densidad puede romper el equilibrio y facilitar la aparición de patógenos.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img143.png', alt='').m-auto
    p.mb-5 Actualmente, la producción piscícola moderna exige la implementación de protocolos documentados, registros continuos y aplicación de Buenas Prácticas Piscícolas (BPP), no solo por eficiencia productiva, sino también por cumplimiento normativo, inocuidad alimentaria y bienestar animal.
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    #t_8_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 8.1 Prevención de enfermedades
    p.mb-5 La prevención constituye la estrategia más importante dentro del manejo sanitario, ya que tratar enfermedades en peces resulta más complejo y costoso que evitarlas.
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img144.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Mantenimiento de agua limpia").ajuste-cajaAcordion
            p.mb-3 Se debe evitar acumulación de materia orgánica, mantener niveles adecuados de oxígeno y prevenir contaminación externa para reducir proliferación de bacterias, hongos y parásitos.
          .row(titulo="Uso de alevinos sanos").ajuste-cajaAcordion
            p.mb-3 Los alevinos deben presentar nado activo, coloración uniforme, ausencia de heridas o deformaciones y proceder de proveedores certificados.
          .row(titulo="Aplicación de Buenas Prácticas Piscícolas (BPP)").ajuste-cajaAcordion
            p.mb-3 Incluye manejo adecuado del agua, alimentación controlada, limpieza del sistema y control de densidad para reducir estrés y fortalecer el sistema inmune.
          .row(titulo="Protocolos de prevención").ajuste-cajaAcordion
            p.mb-3 Deben incluir frecuencia de monitoreo del agua, rutinas de limpieza, procedimientos de ingreso de alevinos y manejo de mortalidades.
    .color___box_1
      .px-5
        p.mb-0 La aplicación de medidas preventivas permite disminuir riesgos sanitarios y mejorar la estabilidad del sistema productivo.
        <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
        Separador
        #t_8_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 8.2 Manejo sanitario
        p.mb-5 El manejo sanitario consiste en la vigilancia permanente del cultivo para detectar oportunamente cualquier alteración que afecte la salud de los peces.
        .row.justify-content-center.mb-5
          .col-xl-3.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_9.h-100
              .row.justify-content-center
                .col-7.mb-3
                  figure(data-aos="fade-right")
                    img(src='@/assets/curso/temas/img145.svg', alt="" style="max-width: 100px").m-auto
                h4.text-center Observación diaria
                p.mb-0.text-center Se deben identificar cambios en comportamiento, alimentación y apariencia de los peces, como nado errático, disminución del consumo o presencia de lesiones.
          .col-xl-3.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_9.h-100
              .row.justify-content-center
                .col-7.mb-3
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/img146.svg', alt="" style="max-width: 100px").m-auto
                h4.text-center Registro sanitario del cultivo
                p.mb-0.text-center Debe incluir fecha, síntomas observados, número de peces afectados, posible causa y acciones realizadas.
          .col-xl-3.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_9.h-100
              .row.justify-content-center
                .col-7.mb-3
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/img147.svg', alt="" style="max-width: 100px").m-auto
                h4.text-center Registro de mortalidad
                p.mb-0.text-center Permite controlar cantidad diaria de peces muertos, tamaño y condiciones del agua.
          .col-xl-3.col-md-9.mt-4(data-aos="zoom-in")
            .box___style_9.h-100
              .row.justify-content-center
                .col-7.mb-3
                  figure(data-aos="fade-left")
                    img(src='@/assets/curso/temas/img148.svg', alt="" style="max-width: 100px").m-auto
                h4.text-center Registro de tratamientos
                p.mb-0.text-center Incluye producto utilizado, dosis aplicada, fecha y responsable del procedimiento.
        p.mb-0 Estos registros facilitan la toma de decisiones técnicas, el cumplimiento normativo y la evaluación permanente del sistema.
        <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
        Separador
        #t_8_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 8.3 Protocolos de bioseguridad
        p.mb-5 La bioseguridad corresponde al conjunto de medidas orientadas a evitar la entrada y propagación de enfermedades dentro del sistema piscícola.
        .bg___slider.mb-5
          .px-5
            .ajuste-slider(data-aos="zoom-in")
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Desinfección
                    p.mb-0 Debe realizarse en equipos, botas, manos y vehículos mediante productos como cal, yodo o cloro en dosis controladas.
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/temas/img149.png', alt='' style="max-width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Procedimiento de desinfección
                    p.mb-0 Incluye limpieza previa, aplicación del desinfectante, tiempo de acción y enjuague cuando sea necesario.
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/temas/img150.png', alt='' style="max-width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Control de acceso
                    p.mb-0 Se debe restringir el ingreso de personas externas y animales mediante uso de botas exclusivas, registros de visitantes y zonas delimitadas.
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/temas/img151.png', alt='' style="max-width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Manejo de residuos
                    p.mb-0 Los peces muertos, lodos y restos de alimento deben manejarse adecuadamente para evitar contaminación y propagación de enfermedades.
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/temas/img152.png', alt='' style="max-width: 500px").m-auto
    p.mb-0 La correcta aplicación de protocolos de bioseguridad reduce riesgos sanitarios y protege la producción.
    <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
    Separador
    #t_8_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 8.4 Control de riesgos sanitarios
    p.mb-5 El control de riesgos sanitarios consiste en identificar y reducir factores que favorecen la aparición de enfermedades en el sistema productivo.
    .bg___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Fuentes de contaminación
                p.mb-0 Incluyen agua contaminada, alevinos infectados, equipos sucios y presencia de animales externos.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img153.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Factores de estrés
                p.mb-0 La alta densidad de siembra, bajo oxígeno, cambios bruscos de temperatura, manejo excesivo y mala alimentación debilitan los peces y favorecen enfermedades.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img154.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Consecuencias del estrés
                p.mb-0 Los peces presentan mayor susceptibilidad a enfermedades, bajo crecimiento y aumento de mortalidad.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img155.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Acciones para reducir riesgos
                p.mb-0 Se deben mantener densidades adecuadas, evitar manipulación innecesaria, controlar calidad del agua y manejar correctamente la alimentación.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img156.png', alt='' style="max-width: 500px").m-auto
    p.mb-0 El control adecuado de estos factores favorece la estabilidad sanitaria del cultivo.
    .color___box_1
      .px-5
        <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
        Separador
        #t_8_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 8.5 Manejo responsable de insumos 
        p.mb-5 El uso adecuado de insumos es fundamental para evitar problemas sanitarios, ambientales y legales dentro de la producción piscícola.
        .row.justify-content-center.mb-5
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            .box___style_h4_p.h-100
              h4.mb-0.text-center.fit___h4_card Uso de productos autorizados
              .box___card_p
                p.mb-0 Solo deben utilizarse medicamentos aprobados para acuicultura y productos técnicamente recomendados.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_h4_p.h-100
              h4.mb-0.text-center.fit___h4_card  Dosificación correcta
              .box___card_p
                p.mb-0 La sobredosificación puede causar mortalidad, contaminación y resistencia bacteriana, mientras que la subdosificación no elimina las enfermedades.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_h4_p.h-100
              h4.mb-0.text-center.fit___h4_card  Registro de uso de insumos
              .box___card_p
                p.mb-0 Debe incluir nombre del producto, dosis, fecha de aplicación, motivo y responsable.
          .col-xl-3.col-md-9(data-aos="fade-left")
            .box___style_h4_p.h-100
              h4.mb-0.text-center.fit___h4_card  Protocolos y registros mínimos recomendados
              .box___card_p
                p.mb-0 Se recomienda implementar registros de calidad de agua, mortalidad, sanidad, alimentación, tratamientos, visitantes y protocolos de limpieza y bioseguridad.
        p.mb-0 La implementación de registros y protocolos fortalece el control sanitario y mejora la organización del sistema productivo.
        <!------------------------------------------ SUBTEMA 6 ------------------------------------------>
        Separador
        #t_8_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 8.6 Control, seguimiento y mejora del sistema productivo 
        p.mb-5 A continuación, se presenta un pódcast sobre el control, seguimiento y mejora del sistema productivo en piscicultura, destacando la importancia del monitoreo constante, el registro técnico y la toma de decisiones para optimizar la producción y garantizar la sostenibilidad del cultivo.
        .row.align-items-center.m-0.mb-0
          .col-xl
            .row.align-items-center.justify-content-center.box___podcast(data-aos="zoom-in")
              .col-auto.mb-4.mb-lg-0
                figure(data-aos="fade-right")
                  img(src="@/assets/curso/temas/img157.svg" style="max-width: 220px").m-auto
              .col
                h4.mb-4 Pódcast
                TarjetaAudio.color-acento-contenido.mb-3(
                  texto="Control, seguimiento y mejora continua del sistema productivo en piscicultura"
                  :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
          .col-xl-auto.d-none.d-xl-block
            figure(data-aos="fade-left")
              img(src="@/assets/curso/temas/img158.png" ).m-auto

</template>

<script>
export default {
  name: 'Tema8',
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
