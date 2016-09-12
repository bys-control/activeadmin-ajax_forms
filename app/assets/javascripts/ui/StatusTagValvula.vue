<template>
  <span :class="classes">{{text}}</span>
</template>

<script>
  export default {
    name: 'status-tag-valvula', // redundante
    ready () {},
    data: function () {
      return {
        defaultColor: 'plain',
        defaultText: 'Sin datos',
        statusColors: [
          'plain', // 0: Indefinido
          'warning', // 1: Abriendo
          'primary', // 2: Abierta
          'warning', // 3: Cerrando
          'plain', // 4: Cerrada
          'danger', // 5: Falla abriendo
          'danger' // 6: Falla cerrando
        ],
        statusTexts: [
          'Indefinido',
          'Abriendo',
          'Abierta',
          'Cerrando',
          'Cerrada',
          'Falla abriendo',
          'Falla cerrando'
        ]
      }
    },
    computed: {
      classes: function () {
        return `label ${this.color} pull-right`
      },
      color: function () {
        return 'label-' + this.statusColors[this.tagIdxSec.value[0]] || this.defaultColor
      },
      text: function () {
        return this.statusTexts[this.tagIdxSec.value[0]] || this.defaultText
      }
    },
    props: {
      tagIdxSec: {
        type: Object,
        default: function () {
          return { }
        }
      }
    },
    components: {
    }
  }
</script>

<style>
</style>
