<template>
   <div class="form-horizontal">
    <div class="form-group">
      <label class="col-lg-6 control-label"><slot></slot></label>
      <div class="input-group col-lg-6">
        <input :placeholder="placeholder"
        :disabled="interlockBoolean"
        class="form-control"
        :title="tooltip"
        :value="value"
        id="input"
        :type="type"
        :min="min"
        :max="max"
        :step="step"
        :maxlength="maxlength"
        :pattern="pattern"
        v-on:focus="showOptions"
        v-on:keyup.esc="cancelSubmitValue"
        v-on:keyup.enter="submitValue"
        v-on:keyup="showOptions"
        ref="input"
        >
        <span class="input-group-addon">{{displayEu}}</span>
      </div>
    </div>

    <div class="row help-block" v-show="showButtonOptions && !interlockBoolean">
      <div class="col-lg-6">
      </div>
      <div class="col-lg-3">
        <a class="btn btn-xs btn-white" @click="cancelSubmitValue"><i class="fa fa-ban"></i> <kbd>Esc</kbd></a>
      </div>
      <div class="col-lg-3">
        <a class="btn btn-xs btn-primary" @click="submitValue"><i class="fa fa-check"></i> OK <kbd>Enter</kbd></a>
      </div>
    </div>
  </div>
</template>

<script>
  import coerceBoolean from '../utils/coerceBoolean.js'
  import Tooltip from './Tooltip'

  var numeral = require('numeral')

  export default {

    name: 'tag-value-form', // redundante
    data: function () {
      return {
        showButtonOptions: false
      }
    },
    // watch: {
    //   'tag.value[0]': {
    //     handler: function (val, oldVal) {
    //       this.$els.input.value = numeral(val).format(this.format)
    //     },
    //     deep: true
    //   }
    // },
    computed: {
      displayEu: function () {
        return this.tag.eu || this.eu
      },
      width: function () {
        console.log(this.widthPx)
        if (this.widthPx) {
          return this.widthPx + 'px'
        } else {
          return (this.fontSize * 3) + 'px' // auto calculate relative with font size
        }
      },
      interlockBoolean: function () {
        return coerceBoolean(this.interlock)
      }
    },
    methods: {
      cancelSubmitValue: function () {
        this.showButtonOptions = false
        this.$refs.input.value = this.tag.value[0]
      },
      showOptions: function () {
        this.showButtonOptions = true
      },
      submitValue: function () {
        this.showButtonOptions = false
        var input = this.$refs.input
        var newValue = numeral(input.value).format(this.format)
        if (newValue && this.tag) {
          if (input.validity.valid) {
            input.value = newValue
            console.log('uncomment write to metoer christian!')
            // api.tags.write( this.tag, newValue )
          } else {
            input.value = this.tag.value[0]
          }
        }
      }
    },
    props: {
      tag: {
        type: Object,
        default: function () {
          return {
            value: [null],
            eu: ''
          }
        }
      },
      tooltip: {
        type: String,
        default: null
      },
      eu: {
        type: String,
        default: null
      },
      interlock: {
        default: true
      },
      placeholder: {
        type: String,
        default: '###'
      },
      type: {
        type: String,
        default: 'number'
      },
      min: {
        type: Number,
        default: null
      },
      max: {
        type: Number,
        default: null
      },
      step: {
        type: String,
        default: 'any'
      },
      pattern: {
        type: String,
        default: ''
      },
      maxlength: {
        type: Number,
        default: null
      },
      size: {
        type: String,
        default: null
      },
      widthPx: {
        type: Number,
        default: null
      },
      format: {
        type: String,
        default: '0[.]0'
      },
      fontSize: {
        type: String,
        default: '10'
      },
      backgroundColor: {
        type: String,
        default: 'lightgray'
      },
      value: {
        type: Number,
        default: 0
      }
    },
    components: {
      Tooltip
    }
  }
</script>
