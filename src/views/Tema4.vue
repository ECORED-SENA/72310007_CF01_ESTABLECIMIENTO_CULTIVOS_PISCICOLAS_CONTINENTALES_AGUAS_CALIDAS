<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Parámetros fisicoquímicos del agua y suelo
    .color___box_1
      .px-5
        .row.justify-content-center.align-items-center.mb-5
          .col-xl.mb-4.mb-lg-0
            .box___style_1.fix___box_1(data-aos="fade-right")
              p.mb-0 Los parámetros fisicoquímicos del agua y del suelo influyen directamente en el desarrollo, crecimiento y supervivencia de los peces dentro del sistema productivo. Su monitoreo permite mantener condiciones adecuadas para el cultivo y prevenir problemas sanitarios o productivos.
          .col-xl-auto.col-md-9(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/img56.png', alt='').m-auto
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/img57.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 #[b La calidad del agua] es un factor crítico en piscicultura, ya que de ella depende directamente #[b la salud, crecimiento y supervivencia de los peces]. En condiciones normales, los peces mantienen un equilibrio con su entorno; sin embargo, cualquier alteración en el agua puede generar estrés, enfermedades o mortalidad.
        p.mb-0 Por esta razón, el monitoreo constante de sus características físicas, químicas y biológicas es fundamental para garantizar un sistema productivo eficiente.
        <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
        Separador
        #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.1 Parámetros fisicoquímicos del agua
        p.mb-5 Los principales parámetros fisicoquímicos del agua permiten identificar si el ambiente acuático reúne las condiciones adecuadas para el desarrollo, crecimiento y bienestar de los peces. Su control periódico ayuda a prevenir enfermedades, mortalidad, bajo consumo de alimento y retrasos en la producción. Los principales parámetros que deben evaluarse en piscicultura se presentan a continuación:
        .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img24.svg" style="max-width: 60px").m-auto
          .col
            h3 Oxígeno disuelto
        p.mb-5 Es esencial para la respiración de los peces. Debe mantenerse por encima de 5 mg/L. Su disminución genera estrés y puede causar mortalidad. Se puede mejorar mediante aireación.
        .row.justify-content-center.mb-5
          .col-xl-6
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 1.
              span Oxígeno disuelto y aireación en piscicultura
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img58.png', alt='Imagen ilustrativa sobre oxígeno disuelto y sistemas de aireación en piscicultura, con estanque de peces y equipos que incrementan el oxígeno para mantener condiciones adecuadas de cultivo. ').m-auto
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img24.svg" style="max-width: 60px").m-auto
      .col
        h3 Temperatura
    p.mb-5 Influye en el metabolismo, crecimiento y consumo de alimento. Temperaturas inadecuadas provocan bajo crecimiento, enfermedades y baja eficiencia alimenticia.
    .row.justify-content-center.mb-5
      .col-xl-8
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 2.
          span Medición de la temperatura del agua en piscicultura
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img59.png', alt='Imagen de medición de temperatura del agua en un estanque piscícola mediante termómetro, utilizada para controlar el crecimiento y bienestar de los peces. ').m-auto
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img24.svg" style="max-width: 60px").m-auto
      .col
        h3 pH
    p.mb-5 El rango ideal está entre 6.5 y 8.5. Los valores extremos afectan la salud de los peces y pueden causar la muerte.
    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
      h5 Figura 3.
      span Escala de pH y niveles de acidez y alcalinidad en estanques piscícolas
    figure(data-aos="zoom-in").mb-5
      img(src='@/assets/curso/temas/img60.png', alt='Imagen de escala de pH aplicada a piscicultura, con niveles de acidez, neutralidad y alcalinidad que influyen en la salud de los peces y la calidad del agua. ').m-auto
    .color___box_1
      .px-5
        .titles___box_cuarto_nivel.mb-5(data-aos="fade-right")   
          h4.mb-0 Medición del pH 
        p Para medir el pH pueden utilizarse diferentes instrumentos y materiales. Entre los más utilizados se encuentran los siguientes:
        .row.justify-content-center.align-items-center.mb-5
          .col-xl.mb-4.mb-lg-0
            .row.justify-content-center.mb-3
              .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
                .box___style_h4_p.h-100
                  h4.mb-0.text-center.fit___h4_card Papel indicador de pH
                  .box___card_p
                    p.mb-0 Permite realizar mediciones básicas del nivel de acidez o alcalinidad.
              .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
                .box___style_h4_p.h-100
                  h4.mb-0.text-center.fit___h4_card Colorímetro
                  .box___card_p
                    p.mb-0 Facilita la medición mediante comparación de color.
              .col-xl-4.col-md-9(data-aos="fade-left")
                .box___style_h4_p.h-100
                  h4.mb-0.text-center.fit___h4_card Medidores de pH electrónicos
                  .box___card_p
                    p.mb-0 Permiten obtener mediciones más precisas.
            .box___style_1.p-4(data-aos="fade-right")
              p.mb-0 Es recomendable medir el pH a intervalos regulares de dos o tres horas, desde la salida del sol hasta el atardecer, con el fin de identificar las variaciones que se presentan durante el día.
          .col-xl-auto.col-md-9(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/img61.png', alt='').m-auto
        p.mb-5 El pH inicial del agua puede verse afectado por el pH del suelo. Además, el pH del agua del estanque varía durante el día como resultado de la fotosíntesis y, durante la noche, por efecto de la respiración. Los siguientes aspectos deben tenerse en cuenta respecto al comportamiento del pH:
        .row.justify-content-center.align-items-center.mb-5
          .col-xl-auto.col-md-9.mb-4.mb-lg-0
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 4.
              span Fluctuación diaria del pH en estanques piscícolas
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img62.png', alt='Imagen sobre fluctuación diaria del pH en estanques piscícolas causada por procesos de fotosíntesis y respiración durante el día y la noche. ').m-auto
          .col-xl
            .box___style_1.fix___box_1-4(data-aos="fade-left")
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | #[b Disminución al amanecer:] durante las primeras horas del día, el pH disminuye.
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | #[b Incremento de la fotosíntesis:] a medida que aumenta la intensidad de la luz, las plantas extraen dióxido de carbono y el pH aumenta.
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | #[b Valor máximo al final de la tarde:] el pH alcanza sus valores más altos al finalizar la tarde.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img24.svg" style="max-width: 60px").m-auto
      .col
        h3 Turbidez
    p.mb-5 La turbidez del agua se debe a la presencia de partículas suspendidas. Puede clasificarse según su origen, como se presenta a continuación:
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .row.justify-content-center.mb-0
          .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            .box___style_h4_p.h-100
              h4.mb-0.text-center Mineral
              .box___card_p
                p.mb-0 Se origina por arcillas y sedimentos.
          .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_h4_p.h-100
              h4.mb-0.text-center Orgánica
              .box___card_p
                p.mb-0 Se produce por materia en descomposición.
          .col-xl-4.col-md-9(data-aos="fade-left")
            .box___style_h4_p.h-100
              h4.mb-0.text-center Biológica
              .box___card_p
                p.mb-0 Se relaciona con la presencia de plancton.
      .col-xl-auto.col-md-9(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/img63.png', alt='').m-auto
    p.mb-5 Un nivel adecuado de turbidez permite el paso de la luz y favorece la producción de alimento natural. Con un 10 % de turbidez la luz llega al fondo del estanque y con un 40 % no llega. La turbidez mineral se debe a un alto contenido de limo y/o arcilla, lo que da al agua un color marrón claro y, en algunos casos, rojizo.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-5.mb-4.mb-lg-0
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 4.
          span Total de sólidos en suspensión (TSS) en el agua de un estanque
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left TSS (mg/l)
                th.texto-left Turbidez mineral
            tbody
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold Menor a 25
                td.texto-left Débil
              tr
                td.ajuste-border-tabla.texto-left.text-weight-bold 25-100
                td.texto-left Media
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold Mayor a 100
                td.texto-left Elevada
      .col-xl-7
        .box___style_1.fix___box_1-4(data-aos="fade-left")
          p.mb-0 #[b La turbidez por microorganismos] es consecuencia de altas poblaciones de plancton y zooplancton. En estos casos, el agua adquiere tonalidades verde, verde azulado o marrón amarillento. #[b La turbidez húmica] se produce por presencia de materia orgánica en descomposición. El agua adquiere color marrón oscuro. Esta condición puede originarse por el agua que abastece el estanque o por exceso de fertilización.
    .titles___box_cuarto_nivel.mb-5(data-aos="fade-right")   
      h4.mb-0 Medición de la turbidez
    p.mb-5 La turbidez puede evaluarse de manera práctica mediante observación directa en el estanque.
    .row.justify-content-center.mb-5
      .col-xl-9
        .row.justify-content-center.align-items-center
          .col-xl-auto.col-md-9.mb-4.mb-lg-0
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 5.
              span Medición de la turbidez manual
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img64.png', alt='Imagen de medición manual de turbidez en estanques piscícolas mediante observación de profundidad y transparencia del agua. ').m-auto
          .col-xl
            .box___style_1.fix___box_1-5(data-aos="fade-left")
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | #[b Nivel por encima del codo:] la turbidez debida al plancton es muy elevada.
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | #[b Nivel a la altura del codo:] la turbidez es alta.
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | #[b Nivel muy por encima del codo:] la turbidez es baja.
    .titles___box_cuarto_nivel.mb-5(data-aos="fade-right")   
      h4.mb-0 Medición de turbidez con disco de Secchi 
    p.mb-5 También puede utilizarse el disco de Secchi para medir la turbidez del agua. Para elaborar y utilizar el disco de Secchi se deben seguir las siguientes indicaciones:
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-5.mb-4.mb-lg-0
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 6.
          span Construcción artesanal de un disco Secchi
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img65.png', alt='Imagen sobre construcción artesanal de un disco Secchi con divisiones blancas y negras para medir transparencia y turbidez del agua en piscicultura. ').m-auto
      .col-xl
        .box___style_1.fix___box_1-6(data-aos="fade-left")
          ol.lista-ol--cuadro.mb-5
            li
              .lista-ol--cuadro__vineta
                span A
              | 
              p.mb-0 Elaboración del disco: se recorta un disco de madera de aproximadamente 25 cm de diámetro.
            li 
              .lista-ol--cuadro__vineta
                span B
              | 
              p.mb-0 División del disco: se trazan dos líneas perpendiculares para formar cuatro partes.
            li 
              .lista-ol--cuadro__vineta
                span C
              | 
              p.mb-0 Pintura los segmentos: se pintan de blanco y negro con pintura mate.
            li 
              .lista-ol--cuadro__vineta
                span D
              | 
              p.mb-0 Perforación central: se realiza un orificio en el centro del disco para pasar la cuerda.
            li 
              .lista-ol--cuadro__vineta
                span E
              | 
              p.mb-0 Colocación del peso: se fija un peso pequeño debajo del disco.
            li 
              .lista-ol--cuadro__vineta
                span F
              | 
              p.mb-0 Marcación de la cuerda:	la cuerda debe marcarse cada 10 cm.
          p.mb-5 En lugar de utilizar una cuerda, el disco puede fijarse a una vara vertical graduada de aproximadamente 100 cm de largo.
          .box___style_1.fix___box_1-3.p-5(data-aos="zoom-in")
            p.mb-0 La turbidez debe medirse entre las 9:00 a. m. y las 3:00 p. m., preferiblemente en días soleados y con alta intensidad lumínica.
    p.mb-5 Durante la medición, el disco debe hundirse de forma recta y mantenerse limpio, con la pintura en buen estado.
    .row.justify-content-center.mb-5
      .col-xl-7
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 7.
          span Agua clara y agua turbia en piscicultura
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img66.png', alt='Imagen comparativa de agua clara y agua turbia en estanques piscícolas, relacionada con calidad del agua y presencia de partículas suspendidas. ').m-auto
    p.mb-5 Una turbidez adecuada favorece el desarrollo de los peces y contribuye a mantener condiciones estables dentro del estanque.
    .row.justify-content-center.mb-5
      .col-xl-7
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 8.
          span Uso del disco Secchi para medir la transparencia del agua
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img67.png', alt='Imagen del uso del disco Secchi para medir la transparencia del agua en estanques piscícolas mediante inmersión vertical del instrumento. ').m-auto
    .row.justify-content-center.mb-5
      .col-xl-9
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 5.
          span Resultados de turbidez
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Resultado
                th.texto-left Turbidez según disco de Secchi
            tbody
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold Menor a 40 cm
                td.texto-left Demasiado plancton (riesgo durante la noche).
              tr
                td.ajuste-border-tabla.texto-left.text-weight-bold 40-60 cm
                td.texto-left Ideal para peces.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold Superior a 60 cm
                td.texto-left Existe falta de alimento para peces.
    .titles___box_cuarto_nivel.mb-5(data-aos="fade-right")   
      h4.mb-0 Control de la turbidez 
    .color___box_1
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            .box___style_3.p-5.text-white.h-100
              p.mb-4 Para controlar la turbidez mineral pueden utilizarse las siguientes alternativas:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-2
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | #[b Estanque de sedimentación:] permite disminuir partículas suspendidas.
                li.mb-2
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | #[b Filtro de agua:] favorece la retención de sedimentos.
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | #[b Sulfato de aluminio o sulfato de magnesio:] puede utilizarse en proporción de 1 a 3 kg/100 m², realizando previamente una prueba en una superficie pequeña.
          .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-left")
            .box___style_4.p-5.h-100
                p.mb-4 Para controlar la turbidez ocasionada por plancton se pueden aplicar las siguientes medidas:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-2
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b Filtro de agua:] favorece el control de partículas y microorganismos.
                  li.mb-2
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b Encalado adecuado:] ayuda a mantener equilibrio en el sistema.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b Fertilización adecuada:] permite controlar el crecimiento excesivo de organismos.
        .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img24.svg" style="max-width: 60px").m-auto
          .col
            h3 Métodos de muestreo de agua
        p.mb-5 Existen diferentes maneras de obtener muestras de agua para análisis en piscicultura.
        .row.justify-content-center.mb-5
          .col-xl-4.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_9.h-100
              .row.justify-content-center
                .col-7.mb-3
                  figure(data-aos="fade-right")
                    img(src='@/assets/curso/temas/img68.svg', alt="" style="max-width: 100px").m-auto
                h4.text-center Directo
                p.mb-0.text-center Se realiza con materiales de análisis o instrumentos específicos.
          .col-xl-4.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
            .box___style_9.h-100
              .row.justify-content-center
                .col-7.mb-3
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/img69.svg', alt="" style="max-width: 100px").m-auto
                h4.text-center Indirecto en recipiente
                p.mb-0.text-center Consiste en recolectar agua y analizarla al borde del estanque.
          .col-xl-4.col-md-9.mt-4(data-aos="zoom-in")
            .box___style_9.h-100
              .row.justify-content-center
                .col-7.mb-3
                  figure(data-aos="fade-left")
                    img(src='@/assets/curso/temas/img70.svg', alt="" style="max-width: 100px").m-auto
                h4.text-center Indirecto para laboratorio
                p.mb-0.text-center El agua se transporta en un recipiente hasta el laboratorio.
    p.mb-5 Independientemente del método utilizado, se debe garantizar la limpieza de los materiales, evitar la agitación del agua y registrar la hora, el lugar y el procedimiento utilizado durante el muestreo.
    .titles___box_cuarto_nivel.mb-5(data-aos="fade-right")   
      h4.mb-0 Instrumento simple de muestreo de agua
    p.mb-5 Para construir un instrumento simple de muestreo se deben considerar los siguientes elementos:
    .row.justify-content-center.align-items-center.mb-0
      .col-xl-5.mb-4.mb-lg-0
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 9.
          span Botella de muestreo para análisis de calidad del agua 
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img71.png', alt='Imagen de botella de muestreo utilizada para recolectar agua en análisis de calidad del agua en piscicultura. ').m-auto
      .col-xl
        .box___style_1.fix___box_1-7(data-aos="fade-left")
          ul.fa-ul.estilo___ul.mb-4
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | Botella de boca estrecha: preferiblemente de vidrio y con capacidad menor a 500 ml.
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | Tapón ajustado: debe cerrar adecuadamente la botella.
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | Peso: permite sumergir la botella.
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | Cuerdas: se fijan al cuello y al tapón de la botella.
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | Marcación de la cuerda	facilita identificar la profundidad de muestreo.
          p.mb-4 También es posible fijar la botella a un soporte de madera mediante una banda o cinta de caucho, incorporando un mango que facilite la inmersión en el agua.
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/img72.png', alt='').m-auto
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Parámetros del suelo en estanques 
    p.mb-5 El suelo es uno de los componentes más importantes en la piscicultura, ya que constituye la base física del estanque y determina, en gran medida, su eficiencia productiva. Un suelo adecuado permite retener el agua, mantener la estabilidad estructural y reducir costos de construcción y mantenimiento. Cuando el suelo no cumple con estas condiciones, se generan pérdidas por filtración, erosión de taludes y mayores inversiones en recubrimientos o infraestructura artificial.
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img73.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El suelo ideal para piscicultura es el franco arcilloso, debido a que presenta un equilibrio entre arena, limo y arcilla, lo que le permite ser manejable, compacto y con buena capacidad de retención de agua.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img24.svg" style="max-width: 60px").m-auto
      .col
        h3 Importancia del tipo de suelo en piscicultura
    p.mb-5 El tipo de suelo influye directamente en la eficiencia y estabilidad del sistema productivo. 
    .row.justify-content-center.mb-5
      .col-xl-7
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 10.
          span Procedimiento manual para análisis de textura del suelo
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img74.png', alt='Imagen sobre análisis manual de textura del suelo mediante manipulación de tierra húmeda para evaluar compactación y retención de agua. ').m-auto
    .row.justify-content-center.mb-5
      .col-xl-10
        .box___style_5(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/temas/img75.jpg', alt='').m-auto
            .col-xl.fit___box_container
              p Las principales ventajas de un suelo adecuado se presentan a continuación: 
              ul.fa-ul.estilo___ul.mb-0
                li.mb-1
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | #[b Retención de agua:] permite conservar el agua sin pérdidas excesivas por infiltración.
                li.mb-1
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | #[b Construcción de estanques:] facilita la compactación y adecuación de la infraestructura.
                li.mb-1
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | #[b Reducción de costos:] disminuye gastos en impermeabilización con plásticos, cemento o geomembranas.
                li.mb-1
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | #[b Estabilidad de taludes:] favorece la estabilidad de las paredes del estanque.
                li.mb-1
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | #[b Desarrollo de alimento natural:] favorece la presencia de organismos naturales dentro del sistema.
    p.mb-5 Por el contrario, los suelos inadecuados generan problemas técnicos y económicos que afectan el funcionamiento del cultivo.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img24.svg" style="max-width: 60px").m-auto
      .col
        h3 Tipos de suelo y su comportamiento
    p.mb-5 Los diferentes tipos de suelo presentan características particulares que influyen en el manejo y funcionamiento del estanque.
    .row.justify-content-center.mb-5
      .col-xl-7
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 11.
          span Tipos de suelo recomendados y no recomendados para estanques piscícolas
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img76.png', alt='Imagen comparativa de tipos de suelo aptos y no aptos para estanques piscícolas según capacidad de retención de agua y estabilidad. ').m-auto
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img77.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Suelo franco arcilloso (recomendado)").ajuste-cajaAcordion
            p.mb-3 Presenta buena retención de agua, fácil compactación, es adecuado para estanques en tierra y tiene bajo riesgo de filtración.
          .row(titulo="Suelo arcilloso").ajuste-cajaAcordion
            p.mb-3 Tiene excelente retención de agua, pero puede agrietarse en sequía y presentar difícil manejo en exceso de humedad.
          .row(titulo="Suelo limoso").ajuste-cajaAcordion
            p.mb-3 Posee retención media y puede volverse inestable, por lo que requiere compactación adecuada.
          .row(titulo="Suelo arenoso (no recomendado)").ajuste-cajaAcordion
            p.mb-3 Presenta alta filtración de agua, no retiene humedad e incrementa costos por recubrimientos.
          .row(titulo="Suelo rocoso").ajuste-cajaAcordion
            p.mb-3 Dificulta la excavación y aumenta los costos de adecuación.
    .color___box_3
      .px-5
        .titles___box_cuarto_nivel.mb-5(data-aos="fade-right")   
          h4.mb-0 Prueba de retención de agua (capacidad de infiltración)
        p.mb-5 La prueba de retención de agua permite evaluar la capacidad del suelo para conservar agua dentro del estanque y determinar si es adecuado para la construcción de sistemas piscícolas. El procedimiento para realizar esta prueba se presenta a continuación:
        .row.justify-content-center.mb-5
          .col-lg-10
            PasosA.color-acento-contenido(tipo="n")
              .row.align-items-center
                .col-lg.mb-4.mb-lg-0
                  h3 Cavar un hoyo de 1 metro de profundidad
                  p.mb-0 Permite preparar el área para evaluar la capacidad de infiltración del suelo.
                .col-auto(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/temas/img79.png', alt='' style="width: 190px").m-auto
              .row.align-items-center
                .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/temas/img80.png', alt='' style="width: 190px").m-auto
                .col-lg.fit___pasosA-left
                  h3 Llenarlo de agua hasta el borde en horas de la mañana
                  p.mb-0 Facilita iniciar la evaluación de retención de agua.
              .row.align-items-center
                .col-lg.mb-4.mb-lg-0
                  h3 Observarlo en la noche
                  p.mb-0 Parte del agua puede evaporarse durante el día.
                .col-auto(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/temas/img81.png', alt='' style="width: 190px").m-auto
              .row.align-items-center
                .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/temas/img82.png', alt='' style="width: 190px").m-auto
                .col-lg.fit___pasosA-left
                  h3 Volver a llenar hasta el borde
                  p.mb-0 Permite continuar la evaluación de infiltración.
              .row.align-items-center
                .col-lg.mb-4.mb-lg-0
                  h3 Tapar con ramas
                  p.mb-0 Reduce el efecto de evaporación durante la noche.
                .col-auto(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/temas/img83.png', alt='' style="width: 190px").m-auto
              .row.align-items-center
                .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/temas/img84.png', alt='' style="width: 190px").m-auto
                .col-lg.fit___pasosA-left
                  h3 Observar la retención al día siguiente
                  p.mb-0 Permite identificar si el suelo conserva adecuadamente el agua.
        p.mb-5 Estas pruebas sustituyen análisis de laboratorio cuando no se cuenta con recursos y permiten tomar decisiones prácticas sobre la adecuación del suelo para piscicultura.
        .titles___box_cuarto_nivel.mb-5(data-aos="fade-right")   
          h4.mb-0 Pruebas de campo para evaluar el suelo
        p.mb-5 Cuando no se cuenta con recursos para análisis de laboratorio, pueden realizarse pruebas de campo que permiten evaluar las condiciones del suelo y tomar decisiones prácticas sobre la adecuación del estanque.
        .bg___slider.mb-5
          .px-5
            .ajuste-slider(data-aos="zoom-in")
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Prueba de la bola (consistencia del suelo)
                    p.mb-0 Esta prueba permite identificar la consistencia y capacidad de compactación del suelo. Se toma una muestra de suelo húmedo, se forma una bola con la mano, se lanza suavemente hacia arriba y luego se deja caer sobre la mano o el suelo para interpretar su comportamiento. Si se desmorona fácilmente, corresponde a un suelo arenoso no apto; si se agrieta parcialmente, es un suelo intermedio que requiere evaluación; y si mantiene la forma, corresponde a un suelo arcilloso o franco arcilloso apto para piscicultura.
                  .col-xl-6
                    .titulo-sexto.color-acento-contenido.mb-2
                      h5 Figura 12.
                      span Prueba de compactación del suelo
                    figure
                      img(src='@/assets/curso/temas/img85.png', alt='Imagen de prueba de compactación del suelo mediante formación de bola de tierra húmeda para evaluar consistencia del terreno. ' style="width: 300px")
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Prueba del anillo (plasticidad)
                    p.mb-0 Esta prueba permite evaluar la plasticidad y el contenido de arcilla del suelo. Se toma suelo húmedo, se forma una tira delgada de aproximadamente 6 mm de grosor y luego se hace un anillo alrededor del dedo para evaluar flexibilidad y cohesión. Si no se puede formar el anillo, el suelo es arenoso; si se rompe fácilmente, tiene bajo contenido de arcilla; y si forma un anillo sin grietas, corresponde a un suelo arcilloso ideal para piscicultura.
                  .col-xl-6
                    .titulo-sexto.color-acento-contenido.mb-2
                      h5 Figura 13.
                      span Prueba del anillo para evaluar la plasticidad del suelo
                    figure
                      img(src='@/assets/curso/temas/img86.png', alt='Imagen de prueba del anillo para evaluar plasticidad y contenido de arcilla del suelo utilizado en piscicultura. ' style="width: 300px")
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Prueba de retención de agua (capacidad de infiltración)
                    p.mb-0 Esta prueba permite evaluar la capacidad del suelo para retener agua dentro del estanque. Consiste en cavar un hoyo de aproximadamente de 30 cm de profundidad, llenarlo completamente con agua, revisarlo en la noche, volver a llenarlo, cubrirlo con ramas o material vegetal y revisarlo al día siguiente. Si el agua se vacía completamente, existe alta filtración y el suelo no es apto; si disminuye parcialmente, presenta retención media que requiere mejora; y si mantiene la mayor parte del agua, el suelo es adecuado para estanques.
                  .col-xl-6
                    .titulo-sexto.color-acento-contenido.mb-2
                      h5 Figura 14.
                      span Prueba de infiltración del suelo
                    figure
                      img(src='@/assets/curso/temas/img87.png', alt='Imagen sobre prueba de infiltración del suelo mediante hoyo con agua para evaluar capacidad de retención hídrica del terreno. ' style="width: 300px")
    .titles___box_cuarto_nivel.mb-5(data-aos="fade-right")   
      h4.mb-0 ¿Qué hacer si el suelo no es adecuado?
    .row.justify-content-center.mb-5
      .col-xl-10
        .box___style_10(data-aos="zoom-in")
          .row.align-items-center
            .col-xl.order-2.order-lg-1.fit___box_container
              p Cuando el suelo no cumple con las condiciones ideales para piscicultura, pueden aplicarse diferentes soluciones técnicas para mejorar su funcionamiento.
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | #[b Uso de geomembranas o plásticos impermeables:] reduce las pérdidas de agua ocasionadas por filtraciones en el suelo. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | #[b Aplicación de arcilla compactada]: mejora la capacidad de retención de agua y disminuye la infiltración. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | #[b Uso de cemento:] permite construir estanques artificiales con mayor control de las condiciones del cultivo. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | #[b Compactación mecánica del suelo:] incrementa la estabilidad del terreno y reduce las pérdidas de agua. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | #[b Sellado con bentonita:] favorece la impermeabilización del suelo gracias a la capacidad expansiva de este material.
            .col-xl-auto.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/img88.jpg', alt='').m-auto
    .titles___box_cuarto_nivel.mb-5(data-aos="fade-right")   
      h4.mb-0 Relación suelo – calidad del agua
    p.mb-5 El suelo influye directamente sobre las condiciones fisicoquímicas del agua dentro del estanque.
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .box___style_h4_p.h-100
          h4.mb-0.text-center.fit___h4_card Modificación del pH
          .box___card_p
            p.mb-0 Algunos suelos pueden alterar la acidez o alcalinidad del agua.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_h4_p.h-100
          h4.mb-0.text-center Aporte o retención de nutrientes
          .box___card_p
            p.mb-0 Influye en la productividad del sistema.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_h4_p.h-100
          h4.mb-0.text-center.fit___h4_card Influencia en la turbidez
          .box___card_p
            p.mb-0 Los suelos inestables incrementan partículas suspendidas.
      .col-xl-3.col-md-9(data-aos="fade-left")
        .box___style_h4_p.h-100
          h4.mb-0.text-center Generación de materia orgánica
          .box___card_p
            p.mb-0 Puede favorecer procesos de descomposición.
    p.mb-5 Por ello, un suelo adecuado no solo mejora la infraestructura del estanque, sino también la calidad del cultivo.
    .titles___box_cuarto_nivel.mb-5(data-aos="fade-right")   
      h4.mb-0 Integración con parámetros fisicoquímicos
    p.mb-5 El tipo de suelo se relaciona directamente con diferentes parámetros fisicoquímicos del sistema productivo.
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_9.fit___box_9.h-100
          .row.justify-content-center
            .col-7.mb-3
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/img89.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Transparencia del agua
            p.mb-0.text-center Los suelos inestables pueden generar turbidez.
      .col-xl-3.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
        .box___style_9.fit___box_9.h-100
          .row.justify-content-center
            .col-7.mb-3
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/img90.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center pH
            p.mb-0.text-center Los suelos ácidos o alcalinos afectan las características del agua.
      .col-xl-3.col-md-9.mt-4(data-aos="zoom-in")
        .box___style_9.fit___box_9.h-100
          .row.justify-content-center
            .col-7.mb-3
              figure(data-aos="fade-left")
                img(src='@/assets/curso/temas/img91.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Oxígeno
            p.mb-0.text-center El exceso de materia orgánica puede disminuir la disponibilidad de oxígeno.
    p.mb-5 Los requerimientos de parámetros fisicoquímicos para un estanque de acuerdo con la especie piscícola se resumen en la siguiente gráfica:
    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
      h5 Figura 15.
      span Relación de parámetros fisicoquímicos
    figure(data-aos="zoom-in")
      img(src='@/assets/curso/temas/img92.svg', alt='Gráfica sobre relación de parámetros fisicoquímicos en piscicultura, que integra muestreo de agua, muestreo de suelo, temperatura, pH, oxígeno disuelto, turbidez y características del estanque en tierra o recubierto. ').m-auto

</template>

<script>
export default {
  name: 'Tema4',
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
