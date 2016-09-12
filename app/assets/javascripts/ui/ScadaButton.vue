<template>
<tooltip :title="tooltipText">
	<button :class="classes" type="button" @click="clickHandler">
	  <template v-if="icon">
		<i :class="iconClass"></i>&nbsp
	  </template>
	  {{label ? label : (tag.value[0] ? labelOn : labelOff)}}
	</button>
</tooltip>
</template>

<script>
  import coerceBoolean from '../utils/coerceBoolean.js'
  import Tooltip from './Tooltip'

  export default {
    name: 'scada-button',
    components: {
      Tooltip
    },
    attached: function () {
    },
    computed: {
      iconClass: function () {
        return `fa fa-${this.icon}`
      },
      classes: function () {
        return `btn ${this.classBtn} btn-${this.iconSize} btn-${this.btnShape} ${this.conditionalShadow}`
      },
      status: function () {
        if (this.tag.value) {
          switch (this.type) {
            case 'value':
              return this.tag.value[0] === this.value

            default:
              return this.tag.value[0] !== null
          }
        }
      },
      conditionalShadow: function () {
        this.statusShadow = this.btnShape === '' ? this.shadow : false
        return this.statusShadow ? 'dim' : ''
      },
      iconClasses: function () {
        return `fa fa-${this.icon}`
      },
      // conditionalShadow
      classBtn: function () {
        var classBtn
        if (this.tag.value) {
          switch (this.type) {
            case 'value':
              classBtn = this.tag.value[0] === this.value ? this.btnTypeOn : this.btnTypeOff
              break

            default:
              classBtn = this.tag.value[0] ? this.btnTypeOn : this.btnTypeOff
          }
        }
        return 'btn-' + classBtn
      },
      iterlockBoolean: function () {
        return coerceBoolean(this.interlock)
      }
    },
    ready: function () {
      this.statusShadow = this.btnShape === '' ? this.shadow : false
    },
    data: function () {
      // own state
      return {
        statusShadow: false
      }
    },
    props: {
      tag: {
        type: Object, // String,Number,Boolean,Function,Object,Array
        default: function () {
          return {
            _id: '',
            value: [0]
          }
        },
        required: true
        /* coerce: function (val) {
          return val + '' // cast the value to string
        },
        validator: function (value) {
          return value > 10
        } */
      },
      type: {
        type: String,
        default: 'toggle'
      },
      shadow: {
        type: Boolean,
        default: false            // add class dim
      },
      btnShape: {
        type: String,
        default: ''               // posible values: circle, rounded
      },
      btnTypeOn: {
        type: String,
        default: 'primary'            // posible values: btn, default, primary, success, info, warning, danger
      },
      btnTypeOff: {
        type: String,
        default: 'default'            // posible values: btn, default, primary, success, info, warning, danger
      },
      iconSize: {
        type: String,
        default: 'sm'             // posible values: xs, sm, lg
      },
      icon: {                      // icon name from inspinia
        type: String
      },
      interlock: {
        default: true
      },
      value: {
        type: String,
        default: null
      },
      label: {
        type: String,
        default: ''
      },
      labelOn: {
        type: String,
        default: 'ON'
      },
      labelOff: {
        type: String,
        default: 'OFF'
      },
      tooltipText: {
        type: String,
        default: null
      }
    },
    methods: {
      clickHandler: function (event, detail, sender) {
        var value = 0
        if (this.tag && this.tag._id && this.tag.value && this.iterlockBoolean) {
          switch (this.type) {
            case 'value':
              var intValue = parseInt(this.value)
              value = isNaN(intValue) ? 0 : intValue
              break
            case 'toggle':
              value = this.tag.value[0] ? 0 : 1
              break
            case 'on':
              value = 1
              break
            default:
              value = 0
              break
          }
          window.vm.$set('tag.value', [!this.tag.value[0]])
          // api.tags.write(this.tag, value);
          console.log('todo: write scada button', this.tag, value)
        }
      }
    }
  }
</script>

<style>
</style>
