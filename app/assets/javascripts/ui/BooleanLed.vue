<template>
  <span>
    <tooltip :title="statusText">
      <span class="boolean">
        <svg :height="size" :width="size">
          <circle :cx="cxSize" :cy="cySize" :r="rSize" stroke="black" stroke-width="0.5" :fill="colorFill" />
        </svg>
      </span>
    </tooltip>
  <span>
</template>

<style scoped>
  span.boolean {
    position: absolute;
    display: block;
  }
  span.boolean svg{
    cursor: pointer;
  }
  span.boolean svg circle{
    position: relative;
  }
</style>

<script>
  import Tooltip from './Tooltip'
  export default {
    name: 'boolean-led', // redundante
    components: {
      Tooltip
    },
    data: function () {
      return {
        defaultColor: 'lightgray',
        defaultText: 'Indefinido',
        colors: ['red', 'lightgreen'],
        texts: ['Off', 'On']
      }
    },
    computed: {
      colorFill: function () {
        if (!isNaN(this.tag.value[0])) {
          return this.colors[this.tag.value[0]] || this.defaultColor
        }
      },
      statusText: function () {
        if (!isNaN(this.tag.value[0])) {
          return this.texts[this.tag.value[0]] || this.defaultText
        }
      },
      cxSize: function () {
        return this.size * 0.5
      },
      cySize: function () {
        return this.size * 0.5
      },
      rSize: function () {
        return this.size * 0.4
      }
    },
    methods: {

    },
    props: {
      tag: {
        type: Object,
        default: function () {
          return {
            value: [0],
            eu: ''
          }
        }
      },
      size: {
        type: Number,
        default: 15
      },
      color: {
        type: String,
        default: null
      },
      text: {
        type: String,
        default: null
      }
    }
  }
</script>
