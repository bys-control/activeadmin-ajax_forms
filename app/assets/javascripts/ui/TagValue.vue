<template>
  <div class="form-horizontal">
    <div class="form-group">
      <label class="col-lg-6 control-label"><slot></slot></label>
      <span class="input-group">
        <input :placeholder="placeholder"
         :disabled="interlock"
         class="form-control very-small"
         :title="tooltip"
         :value="value"
         id="input"
         :type="type"
         :min="min"
         :max="max"
         :step="step"
         :maxlength="maxlength"
         :pattern="pattern"
         :size="size"
         v-on:focus="showOptions"
         v-on:keyup.esc="cancelSubmitValue"
         v-on:keyup.enter="submitValue"
         v-on:keyup="showOptions"
         :style="{ backgroundColor: backgroundColor, fontSize: fontSize + 'px', width: width }"
         ref="input"
         />
        <span class="input-group-addon very-small nospace" :style="{ backgroundColor: backgroundColor, fontSize: fontSize + 'px'}">{{displayEu}}
        </span>
      </span>
      <div class="row">
        <div class="col-lg-5"></div>
        <div class="col-lg-4">
          <p class="help-block" v-show="showButtonOptions && !interlock">
            <a class="btn btn-xs btn-white" @click="cancelSubmitValue"><i class="fa fa-ban"></i> <kbd>Esc</kbd></a>
            <a class="btn btn-xs btn-primary" @click="submitValue"><i class="fa fa-check"></i> OK <kbd>Enter</kbd></a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .very-small{
    text-align: center;
    border-color: black;
    border-right: none;
    color: black !important;
    height: 25px !important;
    font-weight: bold;
    min-width: 15px;
    min-height: 20px;
    overflow: hidden;
    padding: 2px;
    padding-right:0px;
  }
  input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }
  .nospace{
    width: auto !important;
    border-right: 1px solid black;
    padding-right: 1px;
  }
</style>

<script>
  import coerceBoolean from '../utils/coerceBoolean.js'
  import Tooltip from './Tooltip'

  var numeral = require('numeral')
  export default {
    name: 'tag-value', // redundante
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
      computedValue: () => {
        return numeral(this.tag.value[0]).format(this.format)
      },
      displayEu: function () {
        return this.tag.eu || this.eu
      },
      width: function () {
        if (this.widthPx) {
          return this.widthPx + 'px'
        } else {
          return (this.fontSize * 3) + 'px' // auto calculate relative with font size
        }
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
        type: Boolean,
        default: false,
        coerce: coerceBoolean
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
