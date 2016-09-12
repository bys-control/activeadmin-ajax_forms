<template>
  <span ref="trigger">
    <slot></slot>
  </span>
</template>

<script>
  import $ from 'jquery'
  import coerceBoolean from '../utils/coerceBoolean'
  export default {
    name: 'tooltip',
    ready: function () {
      $(this.$refs.trigger.children[0]).tooltip({ // todo: arreglar problema cuando cambia el titulo!
        title: this.title || this.$refs.trigger.children[0].dataset.title,
        placement: this.place || this.$refs.trigger.children[0].dataset.placement,
        html: this.html,
        animation: this.animation,
        container: 'body',
        trigger: this.trigger
      })
    },
    props: {
      place: {
        type: String,
        default: 'auto bottom'
      },
      animation: {
        type: String,
        default: 'fadeIn'
      },
      title: {
        type: String,
        default: null
      },
      content: {
        type: String
      },
      trigger: {
        type: 'hover focus' // click hover focus manual
      },
      html: {
        type: Boolean,
        default: true,
        coerce: coerceBoolean
      }
    }
  }
</script>

<style>
.tooltip {
  opacity: .89;
}

</style>
