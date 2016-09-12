<template>
  <span class="dialogMotor">
    <box :title="title">
      <div slot="heading" class="pull-left">
        <status-tag-motor :tag-status-codigo-estado="tagStatusCodigoEstado"></status-tag-motor> &nbsp;
        <div class="stat-percent font-bold text-success">
          {{tagStatusCarga.value[0] | formatNumber}} {{tagStatusCarga.eu || '%'}}  <i class="fa fa-bolt text-success"></i>
          <div class="progress progress-mini">
            <div :style="{width: tagStatusCarga.value[0]+'% '}" class="progress-bar progress-bar-success"></div>
          </div>
        </div>
      </div>

      <div class="pull-right">
        <scada-button :tag="tagCmdModoManual" btn-type-off="default"  btn-type-on="warning" label-on="Manual" label-off="Automático" :shadow="true" tooltip-text="Automático/Manual"></scada-button>
        <scada-button :tag="tagCmdArranqueManual" :interlock="tagCmdModoManual.value[0]" :shadow="true"></scada-button>
      </div>

      <div class="ibox-content">
        <div class="row">
          <div class="col-xs-7">
            <strong>Estado</strong>
            <status-tag-motor :tag-status-codigo-estado="tagStatusCodigoEstado" class="pull-right"></status-tag-motor>
          </div>
          <div class="col-xs-5" slot="heading">
            <strong>Carga</strong>
            <div class="stat-percent font-bold text-success">
              {{tagStatusCarga.value[0] | formatNumber}} {{tagStatusCarga.eu || '%'}}  <i class="fa fa-bolt text-success"></i>
              <div class="progress progress-mini">
                <div :style="{width: tagStatusCarga.value[0]+'% '}" class="progress-bar progress-bar-success"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="form-horizontal form-inline">
          <div class="col-lg-6">
            <tag-value-form :tag="tagCfgTiempoArranque" eu="s" :interlock="false">Tiempo Arranque:</tag-value-form>
          </div>
          <div class="col-lg-6">
            <tag-value-form :tag="tagCfgTiempoParada" eu="s" :interlock="false">Tiempo Parada:</tag-value-form>
          </div>
        </div>
      </div>

    </box>
  </span>
</template>

<script>
  import Box from './Box'
  import ScadaButton from './ScadaButton'
  import StatusTagMotor from './StatusTagMotor'
  import TagValue from './TagValue'
  import TagValueForm from './TagValueForm'

  // var numeral = require('numeral')

  export default {
    name: 'dialog-motor', // redundante
    ready () {
    },
    props: {
      title: {
        type: String,
        default: ''
      },
      tagStatusCodigoEstado: {
        type: Object,
        default: function () {
          return {value: [0]}
        }
      },
      tagCfgTiempoArranque: {
        type: Object,
        default: function () {
          return {value: [0]}
        }
      },
      tagCfgTiempoParada: {
        type: Object,
        default: function () {
          return {value: [0]}
        }
      },
      tagStatusCarga: {
        type: Object,
        default: function () {
          return {value: [0]}
        }
      },
      tagCmdModoManual: {
        type: Object,
        default: function () {
          return {value: [0]}
        }
      },
      tagCmdArranqueManual: {
        type: Object,
        default: function () {
          return {value: [0]}
        }
      }
    },
    filters: {
      formatNumber: function (val) {
        return '0' // numeral(val).format('[0].[00]')
      }
    },
    components: {
      Box,
      ScadaButton,
      StatusTagMotor,
      TagValue,
      TagValueForm
    },
    data: function () {
      return {}
    }
  }
</script>

<style>
</style>
