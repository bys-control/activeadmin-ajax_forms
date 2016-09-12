<template>
  <box :title="title">
    <div slot="heading" class="pull-left">
      <status-tag-valvula :tag-idx-sec="tagIdxSec"></status-tag-valvula>
    </div>
    <div class="pull-right">
      <scada-button :tag="tagModoManual" btn-type-off="default"  btn-type-on="warning" label-on="Manual" label-off="Automático" :shadow="true"></scada-button>
      <scada-button :tag="tagAbrirManual" btn-type-on="primary" btn-type-off="default" :shadow="true" label="Abrir" :interlock="tagAbrirManual.value[0]"></scada-button>
      <scada-button :tag="tagCerrarManual" btn-type-on="primary" btn-type-off="default" :shadow="true" label="Cerrar" :interlock="tagCerrarManual.value[0]"></scada-button>
    </div>
    <div class="ibox-content">
      <div class="feed-activity-list">
          <div class="feed-element">
            <strong>Estado</strong>
            <span class="pull-right">
              <status-tag-valvula :tag-idx-sec="tagIdxSec"></status-tag-valvula>
            </span>
          </div>
      </div>
    </div>
 </box>
</template>

<script>
  import Box from './Box.vue'
  import ScadaButton from './ScadaButton.vue'
  import StatusTagValvula from './StatusTagValvula.vue'

  export default {
    name: 'dialog-valvula', // redundante
    ready () {
    },
    props: {
      title: {
        type: String,
        default: ''
      },
      tagIdxSec: {
        type: Object, // String,Number,Boolean,Function,Object,Array
        default: function () {
          return {
            value: [0]
          }
        },
        required: true
      },
      tagModoManual: {
        type: Object, // String,Number,Boolean,Function,Object,Array
        default: function () {
          return {
            value: [0]
          }
        }
      },
      tagAbrirManual: {
        type: Object, // String,Number,Boolean,Function,Object,Array
        default: function () {
          return {
            value: [0]
          }
        }
      },
      tagCerrarManual: {
        type: Object, // String,Number,Boolean,Function,Object,Array
        default: function () {
          return {
            value: [0]
          }
        }
      }
    },
    components: {
      Box,
      ScadaButton,
      StatusTagValvula
    },
    data: function () {
      return {}
    }
  }
</script>

<style>
</style>
