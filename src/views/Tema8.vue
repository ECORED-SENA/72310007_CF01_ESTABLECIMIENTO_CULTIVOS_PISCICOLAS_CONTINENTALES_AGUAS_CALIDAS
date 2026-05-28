<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 8
      h1 Gestión sanitaria y bioseguridad
    

    
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    Separador
    #t_8_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 8.1 Prevención de enfermedades



      
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_8_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 8.2 Manejo sanitario




    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_8_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 8.3 Protocolos de bioseguridad




    <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
    Separador
    #t_8_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 8.4 Control de riesgos sanitarios




    <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
    Separador
    #t_8_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 8.5 Manejo responsable de insumos 




    <!------------------------------------------ SUBTEMA 6 ------------------------------------------>
    Separador
    #t_8_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 8.6 Control, seguimiento y mejora del sistema productivo 








    

   

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
