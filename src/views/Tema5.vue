<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Manejo y control de parámetros fisicoquímicos
    .color___box_1
      .px-5
        .row.justify-content-center.align-items-center.mb-5
          .col-xl.mb-4.mb-lg-0
            .box___style_1.fix___box_1(data-aos="fade-right")
              p.mb-0 El manejo de la calidad del agua es una de las actividades más importantes en piscicultura, ya que el agua es el medio donde viven los peces y cualquier alteración afecta directamente su salud, crecimiento y supervivencia. Un buen control permite prevenir enfermedades, mejorar la productividad y evitar pérdidas económicas. Este proceso incluye la identificación de problemas, la aplicación de medidas preventivas y correctivas, y el seguimiento constante del sistema.
          .col-xl-auto.col-md-9(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/img93.png', alt='').m-auto
        <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
        #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.1 Identificación de alteraciones en el agua
        p.mb-5 Antes de utilizar equipos o análisis complejos, el productor puede detectar muchos problemas observando cuidadosamente el agua y el comportamiento de los peces. Los cambios en el color, olor o apariencia del agua son señales claras de desequilibrios en el sistema.
        .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img24.svg" style="max-width: 60px").m-auto
          .col
            h3 Cambios en el color del agua y su significado
        p.mb-5 Los cambios en la coloración del agua pueden indicar diferentes condiciones dentro del estanque.
        .bg___slider.mb-5
          .px-5
            .ajuste-slider(data-aos="zoom-in")
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Verde intenso
                    p.mb-0 Indica exceso de algas o floración algal. Durante el día puede existir suficiente oxígeno, pero en la noche las algas consumen oxígeno y pueden provocar mortalidad de peces.
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/temas/img94.png', alt='' style="max-width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Marrón claro o rojizo
                    p.mb-0 Se relaciona con presencia de sedimentos, como arcilla o limo, generalmente por erosión o entrada de agua turbia. Reduce la penetración de luz y afecta la producción natural de alimento.
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/temas/img95.png', alt='' style="max-width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Marrón oscuro
                    p.mb-0 Se asocia con materia orgánica en descomposición, como hojas, residuos o exceso de alimento. Puede generar gases tóxicos.
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/temas/img96.png', alt='' style="max-width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Negro
                    p.mb-0 Indica descomposición avanzada en el fondo del estanque bajo condiciones anaeróbicas. Representa alto riesgo para los peces.
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/temas/img97.png', alt='' style="max-width: 500px").m-auto
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img24.svg" style="max-width: 60px").m-auto
      .col
        h3 Cambios en el olor del agua
    .row.justify-content-center.mb-5
      .col-xl-10
        .box___style_10(data-aos="zoom-in")
          .row.align-items-center
            .col-xl.order-2.order-lg-1.fit___box_container
              p El olor del agua también permite identificar alteraciones en el sistema productivo.
              ul.fa-ul.estilo___ul.mb-0
                li.mb-1
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | #[b Olor a huevo podrido:] indica presencia de sulfuro de hidrógeno (H₂S), gas tóxico generado por descomposición sin oxígeno.
                li.mb-1
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | #[b Olor fuerte, ácido o desagradable:] puede relacionarse con contaminación orgánica, exceso de alimento o acumulación de desechos.
                li.mb-1
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | #[b Olor a lodo:] se asocia con acumulación de materia orgánica en el fondo del estanque.
            .col-xl-auto.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/img98.jpg', alt='').m-auto
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img24.svg" style="max-width: 60px").m-auto
      .col
        h3 Comportamiento de los peces
    p.mb-5 El comportamiento de los peces permite identificar problemas relacionados con la calidad del agua.
    .row.justify-content-center.mb-5
      .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .box___card_sinbordes_1.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img99.png', alt="" ).m-auto
            h4 Peces boqueando en la superficie
            .box___card_sinbordes_p
              p.mb-0 Indica falta de oxígeno disuelto.
      .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-left")
        .box___card_sinbordes_2.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img100.png', alt="" ).m-auto
            h4 Peces agrupados en entradas de agua
            .box___card_sinbordes_p
              p.mb-0 Buscan zonas con mayor oxigenación.
    .row.justify-content-center.mb-0
      .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .box___card_sinbordes_1.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img101.png', alt="" ).m-auto
            h4 Peces letárgicos o sin apetito
            .box___card_sinbordes_p
              p.mb-0 Puede indicar mala calidad del agua.
      .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-left")
        .box___card_sinbordes_2.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img102.png', alt="" ).m-auto
            h4 Nado errático
            .box___card_sinbordes_p
              p.mb-0 Puede relacionarse con intoxicación o estrés.
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.2 Tratamientos preventivos
    p.mb-5 Los tratamientos preventivos corresponden a las acciones realizadas antes de que aparezcan problemas, con el fin de mantener el equilibrio del sistema productivo. Las principales medidas preventivas se presentan a continuación:
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img103.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Controlar la densidad de siembra").ajuste-cajaAcordion
            p.mb-3 Evita sobrecargar el estanque con demasiados peces, reduciendo el consumo excesivo de oxígeno y la generación de desechos.
          .row(titulo="Evitar la sobrealimentación").ajuste-cajaAcordion
            p.mb-3 El alimento no consumido se descompone y deteriora la calidad del agua.
          .row(titulo="Renovar el agua periódicamente").ajuste-cajaAcordion
            p.mb-3 Los recambios parciales entre 10 % y 30 % ayudan a eliminar desechos y mantener condiciones adecuadas.
          .row(titulo="Mantener limpieza del estanque").ajuste-cajaAcordion
            p.mb-3 Permite retirar residuos, hojas, peces muertos y restos de alimento.
          .row(titulo="Monitorear parámetros regularmente").ajuste-cajaAcordion
            p.mb-3 Facilita detectar cambios en temperatura, oxígeno y pH antes de que generen problemas.
          .row(titulo="Controlar vegetación acuática").ajuste-cajaAcordion
            p.mb-3 Evita desequilibrios relacionados con exceso de plantas o algas.
    p.mb-0 Estas prácticas permiten mantener un ambiente estable y reducir la necesidad de intervenciones correctivas.
    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.3 Tratamientos correctivos
    p.mb-5 Cuando se detecta un problema en la calidad del agua, es necesario aplicar acciones inmediatas para recuperar las condiciones adecuadas del sistema. 
    .row.justify-content-center.mb-5
      .col-xl-10
        .box___style_10(data-aos="zoom-in")
          .row.align-items-center
            .col-xl.order-2.order-lg-1.fit___box_container
              p Las principales acciones correctivas son:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-2
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | #[b Aireación del agua:] permite aumentar el oxígeno mediante aireadores mecánicos, bombas o agitación manual del agua.
                li.mb-2
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | #[b Recambio parcial de agua:] consiste en retirar entre el 20 % y el 50 % del agua y reemplazarla con agua limpia y de buena calidad.
                li.mb-2
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | #[b Aplicación de cal (encalado):] se utiliza para corregir pH ácido y mejorar la calidad del suelo. Debe aplicarse en dosis controladas.
                li.mb-2
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | #[b Control de algas:] incluye reducción de fertilización, aumento del recambio de agua y manejo controlado del sistema.
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | #[b Uso de productos autorizados:] solo deben utilizarse insumos permitidos por normativas sanitarias y siguiendo las dosis recomendadas.
            .col-xl-auto.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/img104.jpg', alt='').m-auto
    p.mb-0 Estas medidas deben realizarse de manera técnica y controlada para evitar afectaciones adicionales al cultivo.
    <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
    Separador
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.4 Manejo de la calidad del agua
    .color___box_1
      .px-5
        p.mb-5 El manejo adecuado de la calidad del agua consiste en mantener condiciones estables mediante control permanente y aplicación oportuna de medidas preventivas y correctivas. Las principales actividades de manejo son las siguientes:
        .row.justify-content-center.mb-5
          .col-xl-3.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_9.h-100
              .row.justify-content-center
                .col-7.mb-3
                  figure(data-aos="fade-right")
                    img(src='@/assets/curso/temas/img105.svg', alt="" style="max-width: 100px").m-auto
                h4.text-center Control diario
                p.mb-0.text-center Incluye seguimiento del agua, peces y condiciones del estanque.
          .col-xl-3.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_9.h-100
              .row.justify-content-center
                .col-7.mb-3
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/img106.svg', alt="" style="max-width: 100px").m-auto
                h4.text-center Mediciones periódicas
                p.mb-0.text-center Permiten evaluar temperatura, pH y oxígeno según los rangos adecuados para la especie.
          .col-xl-3.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_9.h-100
              .row.justify-content-center
                .col-7.mb-3
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/img107.svg', alt="" style="max-width: 100px").m-auto
                h4.text-center Ajustes oportunos
                p.mb-0.text-center Facilitan actuar rápidamente ante cambios detectados.
          .col-xl-3.col-md-9.mt-4(data-aos="zoom-in")
            .box___style_9.h-100
              .row.justify-content-center
                .col-7.mb-3
                  figure(data-aos="fade-left")
                    img(src='@/assets/curso/temas/img108.svg', alt="" style="max-width: 100px").m-auto
                h4.text-center Prevención constante
                p.mb-0.text-center Reduce riesgos y evita problemas mayores en el sistema productivo.
        p.mb-5 Los rangos de medición más utilizados son los siguientes:
        .row.justify-content-center.mb-5
          .col-xl-6
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 6.
              span Rangos de medición
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Parámetro
                    th.texto-left Rango recomendado
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Temperatura
                    td.texto-left 24-32 °C, según la especie
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold pH
                    td.texto-left 6.5-8.5
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Oxígeno disuelto
                    td.texto-left Mínimo 5 mg/L
        p.mb-0 Un manejo adecuado reduce costos, mejora el crecimiento de los peces y disminuye la mortalidad.
        <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
        Separador
        #t_5_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.5 Seguimiento y control sanitario 
        p.mb-5 El seguimiento sanitario consiste en observar permanentemente el estado del cultivo para detectar cualquier anomalía y tomar decisiones oportunas. Los principales aspectos que deben monitorearse diariamente son los siguientes:
        .row.justify-content-center.mb-5
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            .box___style_h4_p.h-100
              h4.mb-0.text-center.fit___h4_card Comportamiento de los peces
              .box___card_p
                p.mb-0 Permite identificar cambios en actividad y respuesta al alimento.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_h4_p.h-100
              h4.mb-0.text-center.fit___h4_card Consumo de alimento
              .box___card_p
                p.mb-0 Su disminución puede indicar enfermedad o mala calidad del agua.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_h4_p.h-100
              h4.mb-0.text-center.fit___h4_card Mortalidad
              .box___card_p
                p.mb-0 Facilita registrar cantidad de peces muertos y posibles causas.
          .col-xl-3.col-md-9(data-aos="fade-left")
            .box___style_h4_p.h-100
              h4.mb-0.text-center.fit___h4_card Condiciones del agua
              .box___card_p
                p.mb-0 Incluye evaluación de color, olor, temperatura y nivel del agua.
        p.mb-0 El seguimiento sanitario permite detectar problemas a tiempo, reducir pérdidas, aplicar tratamientos oportunos y mantener la sanidad del cultivo.

</template>

<script>
export default {
  name: 'Tema5',
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
