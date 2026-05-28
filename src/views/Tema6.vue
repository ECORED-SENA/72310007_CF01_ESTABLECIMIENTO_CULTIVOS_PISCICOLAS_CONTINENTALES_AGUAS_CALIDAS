<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Preparación de la unidad de cultivo
    

    
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    Separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.1 Selección del lugar para la piscifactoría



      
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.2 Abastecimiento de agua




    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.3 Evaluación de la calidad del agua




    <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
    Separador
    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.4 Adecuación del suelo




    <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
    Separador
    #t_6_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.5 Adecuación del estanque




    <!------------------------------------------ SUBTEMA 6 ------------------------------------------>
    Separador
    #t_6_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.6 Verificación de condiciones para la siembra




    <!------------------------------------------ SUBTEMA 7 ------------------------------------------>
    Separador
    #t_6_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.7 Aplicación de Buenas Prácticas 





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
