<template>
  <span :class="classes">{{text}}</span>
</template>


<script>
  export default {
    name: 'status-tag-motor', // redundante
    ready () {},
    data: function () {
      return {
        defaultColor: 'plain',
        defaultText: 'Sin datos',
        statusColors: ['plain', // 0: Verificando estado de accionamiento
                       'plain', // 1: Detenido y listo para operar
                       'warning', // 2: Esperando enclavamiento
                       'primary', // 3: Arrancando giro directo
                       'primary', // 4: Arrancando giro invertido
                       'primary', // 5: En marcha giro directo
                       'primary', // 6: En marcha giro invertido
                       'primary', // 7: Deteniendo
                       'red',   // 8: Falla
                       'warning'// 9: Esperando cambio de giro
                       ],
        statusTexts: ['Verificando estado de accionamiento',
                     'Detenido y listo para operar',
                     'Esperando enclavamiento',
                     'Arrancando giro directo',
                     'Arrancando giro invertido',
                     'En marcha giro directo',
                     'En marcha giro invertido',
                     'Deteniendo',
                     'Falla',
                     'Esperando cambio de giro'
                     ]
      }
    },
    computed: {
      classes: function () {
        return `label ${this.color}`
      },
      color: function () {
        return 'label-' + this.statusColors[this.tagStatusCodigoEstado.value[0]] || this.defaultColor
      },
      text: function () {
        return this.statusTexts[this.tagStatusCodigoEstado.value[0]] || this.defaultText
      }
    },
    props: {
      tagStatusCodigoEstado: {
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
