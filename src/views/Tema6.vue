<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Preparación de la unidad de cultivo
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_1.fix___box_1(data-aos="fade-right")
          p.mb-0 La preparación de la unidad de cultivo es una de las etapas más críticas en la piscicultura, ya que de ella depende, en gran medida, el éxito o fracaso del sistema productivo. Un estanque mal ubicado, con agua inadecuada o suelo deficiente, puede generar problemas constantes, como baja producción, enfermedades o mortalidad de los peces. Por ello, esta fase debe realizarse de manera planificada, técnica y ordenada, garantizando que las condiciones ambientales, físicas y operativas sean adecuadas antes de la siembra.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img109.png', alt='').m-auto
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.1 Selección del lugar para la piscifactoría
    p.mb-5 La selección del sitio debe realizarse con criterio técnico, ya que influye directamente en la facilidad de manejo, los costos de producción y la supervivencia de los peces.
    .bg___slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Topografía y características del terreno
                p.mb-0 El terreno ideal debe tener una pendiente suave entre 2 % y 5 %, permitiendo el flujo natural del agua sin necesidad de bombeo. Los terrenos muy planos dificultan el drenaje y los inclinados aumentan la erosión y los costos de construcción.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img110.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Cobertura vegetal
                p.mb-0 Se deben preferir terrenos con vegetación baja, ya que reducen costos de adecuación, evitan raíces profundas y favorecen la entrada de luz para la producción natural de alimento.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img111.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Accesibilidad
                p.mb-0 El acceso debe ser fácil y permanente para facilitar el transporte de alimento, ingreso de alevinos y comercialización del pescado.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img112.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Cercanía a la vivienda
                p.mb-0 Facilita el monitoreo diario, la atención rápida de emergencias y la prevención de robos.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img113.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Disponibilidad de insumos
                p.mb-0 Es fundamental contar con alevinos de buena calidad, con tamaño uniforme, nado activo, ausencia de deformidades y sin signos de enfermedad.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img114.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Proximidad al mercado
                p.mb-0 Reduce costos de transporte, facilita la venta de pescado fresco y disminuye pérdidas poscosecha.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img115.png', alt='' style="max-width: 500px").m-auto
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.2 Abastecimiento de agua
    .color___box_1
      .px-5
        p.mb-5 El agua constituye el hábitat de los peces; por lo tanto, su calidad determina la supervivencia y productividad del cultivo.
        .row.align-items-center.mb-0
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src="@/assets/curso/temas/img49.png", alt="" ).m-auto
          .col-xl
            AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
              .row(titulo="Fuentes de agua").ajuste-cajaAcordion
                p.mb-3 Los ríos y quebradas presentan buen flujo, aunque pueden contener contaminantes; los manantiales proporcionan agua limpia y estable; los pozos requieren bombeo y los embalses ofrecen gran volumen con menor control de calidad.
              .row(titulo="Requisitos del agua").ajuste-cajaAcordion
                p.mb-3 El agua debe ser limpia, no termal y contar con caudal constante para mantener condiciones estables en el sistema productivo.
              .row(titulo="Aspectos técnicos clave").ajuste-cajaAcordion
                p.mb-3 Antes de construir, se debe calcular el volumen del estanque, estimar el consumo de agua y considerar pérdidas por evaporación y filtración.
              .row(titulo="Parámetros básicos").ajuste-cajaAcordion
                p.mb-3 El oxígeno debe mantenerse por encima de 5 mg/L, el pH entre 6.5 y 8.5 y la temperatura entre 24 °C y 30 °C. Alteraciones en estos parámetros generan estrés y mortalidad.
        <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
        Separador
        #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.3 Evaluación de la calidad del agua
        p.mb-5 Analizar el agua antes de la siembra permite prevenir problemas futuros dentro del sistema piscícola:
        .row.justify-content-center.mb-0
          .col-xl-4.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_9.h-100
              .row.justify-content-center
                .col-7.mb-3
                  figure(data-aos="fade-right")
                    img(src='@/assets/curso/temas/img116.svg', alt="" style="max-width: 100px").m-auto
                h4.text-center Toma correcta de muestras
                p.mb-0.text-center Se debe usar un recipiente limpio, tomar agua entre 20 y 30 cm de profundidad, evitar agitación y etiquetar adecuadamente la muestra.
          .col-xl-4.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_9.h-100
              .row.justify-content-center
                .col-7.mb-3
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/img117.svg', alt="" style="max-width: 100px").m-auto
                h4.text-center Evaluación de parámetros
                p.mb-0.text-center La temperatura controla el metabolismo del pez; el pH influye sobre la toxicidad; el oxígeno determina supervivencia; el amonio y nitritos indican contaminación, y la transparencia refleja productividad del agua.
          .col-xl-4.col-md-9.mt-4(data-aos="zoom-in")
            .box___style_9.h-100
              .row.justify-content-center
                .col-7.mb-3
                  figure(data-aos="fade-left")
                    img(src='@/assets/curso/temas/img118.svg', alt="" style="max-width: 100px").m-auto
                h4.text-center Importancia del monitoreo
                p.mb-0.text-center El agua cambia constantemente debido al clima, cantidad de peces y exceso de alimento; por ello, el control debe realizarse diariamente o semanalmente.
    <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
    Separador
    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.4 Adecuación del suelo
    p El suelo define la capacidad del estanque para retener agua y mantener estabilidad estructural:
    .row.justify-content-center.align-items-center.mb-0
      .col-xl.mb-4.mb-lg-0
        ul.fa-ul.estilo___ul.mb-0
          li.mb-2
            span.fa-li
              i.fas.fa-arrow-alt-circle-right
            | #[b Características ideales:] el suelo franco arcilloso retiene agua sin agrietarse fácilmente, presenta buena compactación y soporta adecuadamente las estructuras del estanque.
          li.mb-2
            span.fa-li
              i.fas.fa-arrow-alt-circle-right
            | #[b Problemas comunes:] los suelos arenosos pierden agua rápidamente, los rocosos dificultan la excavación y los muy orgánicos pueden contaminar el agua.
          li.mb-0
            span.fa-li
              i.fas.fa-arrow-alt-circle-right
            | #[b Pruebas prácticas:] la prueba de bola firme indica buena cohesión, el anillo sin grietas refleja alto contenido de arcilla y la prueba de retención confirma impermeabilidad del terreno.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img119.png', alt='').m-auto
    <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
    Separador
    #t_6_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.5 Adecuación del estanque
    .color___box_2
      .px-5
        p.mb-5 La adecuación del estanque comprende diferentes actividades necesarias antes de iniciar el cultivo.
        .row.justify-content-center.mb-0
          .col-lg-10
            PasosA.color-acento-contenido(tipo="n")
              .row.align-items-center
                .col-lg.mb-4.mb-lg-0
                  h3 Secado
                  p.mb-0 Exponer el fondo al sol para eliminar bacterias, parásitos y depredadores.
                .col-auto(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/temas/img120.png', alt='' style="width: 300px").m-auto
              .row.align-items-center
                .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/temas/img121.png', alt='' style="width: 300px").m-auto
                .col-lg.fit___pasosA-left
                  h3 Limpieza
                  p.mb-0 Retirar lodo excesivo y eliminar malezas que consumen oxígeno.
              .row.align-items-center
                .col-lg.mb-4.mb-lg-0
                  h3 Desinfección
                  p.mb-0 Aplicar cal agrícola o cal viva para mejorar las condiciones sanitarias y del suelo.
                .col-auto(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/temas/img122.png', alt='' style="width: 300px").m-auto
              .row.align-items-center
                .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/temas/img123.png', alt='' style="width: 300px").m-auto
                .col-lg.fit___pasosA-left
                  h3 Reparación 
                  p.mb-0 Sellar fugas y revisar compuertas, entradas y salidas de agua.
              .row.align-items-center
                .col-lg.mb-4.mb-lg-0
                  h3 Llenado
                  p.mb-0 Llenar lentamente el estanque y utilizar mallas o filtros para evitar el ingreso de peces silvestres y depredadores.
                .col-auto(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/temas/img124.png', alt='' style="width: 300px").m-auto
              .row.align-items-center
                .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/temas/img125.png', alt='' style="width: 300px").m-auto
                .col-lg.fit___pasosA-left
                  h3 Fertilización
                  p.mb-0 Aplicar estiércol o fertilizantes para favorecer la producción de alimento natural.
              .row.align-items-center
                .col-lg.mb-4.mb-lg-0
                  h3 Estabilización
                  p.mb-0 Esperar entre 3 y 7 días para alcanzar equilibrio biológico y reducir estrés en los peces.
                .col-auto(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/temas/img126.png', alt='' style="width: 300px").m-auto
    <!------------------------------------------ SUBTEMA 6 ------------------------------------------>
    Separador
    #t_6_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.6 Verificación de condiciones para la siembra
    p.mb-5 Antes de realizar la siembra, es necesario verificar que las condiciones del sistema sean adecuadas.
    .row.justify-content-center.mb-5
      .col-xl-8
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 7.
          span Condiciones para la siembra
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Condición
                th.texto-left Explicación
            tbody
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold Agua clara o ligeramente verde
                td.texto-left Indica condiciones adecuadas del estanque.
              tr
                td.ajuste-border-tabla.texto-left.text-weight-bold Ausencia de peces silvestres
                td.texto-left Reduce competencia y riesgos sanitarios.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold Oxígeno suficiente
                td.texto-left Garantiza respiración adecuada de los peces.
              tr
                td.ajuste-border-tabla.texto-left.text-weight-bold pH estable
                td.texto-left Favorece equilibrio fisiológico.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold Temperatura adecuada
                td.texto-left Facilita adaptación y crecimiento.
    p.mb-0 Si alguna de estas condiciones presenta alteraciones, no se recomienda realizar la siembra.
    <!------------------------------------------ SUBTEMA 7 ------------------------------------------>
    Separador
    #t_6_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.7 Aplicación de Buenas Prácticas 
    p.mb-5 La aplicación de Buenas Prácticas Piscícolas favorece el manejo adecuado del sistema productivo y la protección ambiental.
    .row.justify-content-center.mb-0
      .col-xl-3.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_9.h-100
          .row.justify-content-center
            .col-7.mb-3
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/img127.svg', alt="" style="max-width: 100px").m-auto
            h4.text-center Bioseguridad
            p.mb-0.text-center Incluye desinfección de equipos, limitación de acceso y prevención del ingreso de animales.
      .col-xl-3.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_9.h-100
          .row.justify-content-center
            .col-7.mb-3
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/img128.svg', alt="" style="max-width: 100px").m-auto
            h4.text-center Manejo del agua
            p.mb-0.text-center Comprende uso responsable del agua, prevención de contaminación y renovación cuando sea necesario.
      .col-xl-3.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_9.h-100
          .row.justify-content-center
            .col-7.mb-3
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/img129.svg', alt="" style="max-width: 100px").m-auto
            h4.text-center Control de residuos
            p.mb-0.text-center Incluye retiro de lodos, manejo adecuado de basura y correcta disposición del estiércol.
      .col-xl-3.col-md-9.mt-4(data-aos="zoom-in")
        .box___style_9.h-100
          .row.justify-content-center
            .col-7.mb-3
              figure(data-aos="fade-left")
                img(src='@/assets/curso/temas/img130.svg', alt="" style="max-width: 100px").m-auto
            h4.text-center Protección ambiental
            p.mb-0.text-center Implica no utilizar químicos prohibidos, proteger las fuentes de agua y evitar impactos negativos sobre el entorno.

</template>

<script>
export default {
  name: 'Tema6',
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
