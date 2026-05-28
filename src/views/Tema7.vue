<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Selección, manejo y siembra de especies
    

    
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    Separador
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.1 Selección de la especie



      
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.2 Manejo y transporte de alevinos




    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_7_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.3 Técnicas de siembra




    <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
    Separador
    #t_7_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.4 Manejo inicial del cultivo




    <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
    Separador
    #t_7_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.5 Control post-siembra 






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
