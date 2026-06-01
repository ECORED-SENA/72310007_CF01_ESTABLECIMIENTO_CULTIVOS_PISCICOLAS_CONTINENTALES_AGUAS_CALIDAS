<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5 La piscicultura en aguas cálidas constituye una actividad productiva de gran importancia dentro del sector agropecuario, debido a su capacidad para contribuir a la seguridad alimentaria, generar ingresos y aprovechar de manera adecuada los recursos hídricos y del suelo. Este sistema de producción se basa en el cultivo de peces en ambientes controlados, donde se aplican prácticas técnicas orientadas a favorecer el crecimiento, la sanidad y el bienestar de las especies cultivadas.
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro/img1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El desarrollo de la piscicultura requiere la integración de diferentes factores relacionados con la selección de especies, la calidad del agua, las condiciones del suelo, la bioseguridad y el manejo sanitario. Asimismo, resulta fundamental aplicar procedimientos de monitoreo y control que permitan mantener condiciones adecuadas dentro del sistema productivo, reduciendo riesgos asociados con enfermedades, estrés y alteraciones fisicoquímicas que puedan afectar el cultivo.
    .row.justify-content-center.align-items-center
      .col-xl.mb-4.mb-lg-0
        .box___style_1(data-aos="fade-right")
          p.mb-0 De igual forma, la implementación de Buenas Prácticas Piscícolas favorece la sostenibilidad ambiental y el fortalecimiento de los procesos productivos. El manejo responsable del agua, la correcta disposición de residuos, el control sanitario y la planificación técnica contribuyen a optimizar la producción, mejorar la calidad del pescado y responder a las necesidades actuales del mercado y de las comunidades rurales.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/intro/img2.svg', alt='').m-auto

</template>

<script>
export default {
  name: 'Introduccion',
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
