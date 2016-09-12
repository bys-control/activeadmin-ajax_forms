<template>
  <div>
    <div class="col-lg-6 panel">
      <h3>Elementos</h3>

      <div class="row">
        <h4>tag-value-form</h4>
        <div class="col-lg-4 form-inline form-horizontal">
          <tag-value-form :tag="tag_kg.status.carga" :interlock="false">Tester</tag-value-form>
        </div>
        <div class="col-lg-8">
          <tag-value-form :tag="tag_kg.status.carga" :interlock="false">Tester</tag-value-form>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 form-inline form-horizontal">
          <tag-value-form :tag="tag_kg.status.carga" :interlock="false">Tester</tag-value-form>
        </div>
      </div>


      <div class="row">
        <h4>tag-value</h4>
        <tag-value :tag="tag_kg.status.carga" :interlock="false"></tag-value>
      </div>

      <div class="row">
        <h4>tag-value</h4>
        <tag-value :tag="tag_kg.status.carga" :interlock="false"></tag-value>
      </div>

      <div class="row">
        <h4>status-tag-motor</h4>
        <status-tag-motor :tag-status-codigo-estado="tag.status.codigo_estado"></status-tag-motor>
      </div>

      <div class="row">
        <h4>status-tag-valvula</h4>
        <status-tag-valvula :tag-idx-sec="tag_valvula.idx_sec"></status-tag-valvula>
      </div>

      <div class="row">
        <h4>scada-button</h4>
        <scada-button :tag="tag.cmd.abrir_man" btn-type-off="danger" :shadow="true"></scada-button>
        <scada-button :tag="tag.cmd.abrir_man" btn-type-off="warning" :shadow="true"></scada-button>
        <scada-button :tag="tag.cmd.cerrar_man" :shadow="true"></scada-button>
      </div>

      <div class="row">
        <h4>boolean-led</h4>
        <boolean-led :tag="tag_nivel"></boolean-led>
      </div>

    </div>

    <div class="col-lg-6">
      <dialog-motor
        :title="tag.description"
        :tag-status-codigo-estado="tag.status.codigo_estado"
        :tag-cfg-tiempo-arranque="tag.cfg.tiempo_arranque"
        :tag-cfg-tiempo-parada="tag.cfg.tiempo_parada"
        :tag-status-carga="tag.status.carga"
        :tag-cmd-modo-manual="tag.cmd.modo_manual"
        :tag-cmd-arranque-manual="tag.cmd.arranque_man">
      </dialog-motor>

      <dialog-valvula
        :title="tag.description"
        :tag-idx-sec="tag_valvula.idx_sec"
        :tag-modo-manual="tag_valvula.modo_manual"
        :tag-abrir-manual="tag_valvula.abrir_man"
        :tag-cerrar-manual="tag_valvula.cerrar_man">
      </dialog-valvula>
    </div>

    <!-- <div id="app">
      <div class="ibox float-e-margins">
        <div class="ibox-content" style="display: block;">
          <div>
            <h3>Count is {{ counterValue }}</h3>
          </div>
          <div>
            <button @click='increment'>Increment +2</button>
          </div>
        </div>

      </div>
    </div> -->
  </div>
</template>

<script>
import store from './vuex/store'
// import syncCollectionToStore from './vuex/ddp-vuex'

// import { incrementCounter } from './vuex/modules/globalActions'
// import { getCount } from './vuex/modules/globalGetters'

import DialogMotor from './ui/DialogMotor'
import DialogValvula from './ui/DialogValvula'
import ScadaButton from './ui/ScadaButton'
import StatusTagMotor from './ui/StatusTagMotor'
import StatusTagValvula from './ui/StatusTagValvula'
import TagValue from './ui/TagValue'
import TagValueForm from './ui/TagValueForm'
import BooleanLed from './ui/BooleanLed'
import {tooltip} from 'vue-strap'

export default {
  store: store, // make this and all child components aware of the new store
  components: {
    ScadaButton,
    DialogMotor,
    DialogValvula,
    StatusTagMotor,
    StatusTagValvula,
    TagValue,
    BooleanLed,
    TagValueForm,
    tooltip
  },
  data: function () {
    return {
      name: 'app',
      state: {
        status: {
          codigo_estado: {
            value: [4]
          }
        }
      },
      tag_nivel: {
        value: [1],
        description: 'Nivel xxx'
      },
      tag_valvula: {
        _id: 12345,
        description: 'Valvula',
        idx_sec: {
          value: [2]
        },
        modo_manual: {
          value: [0]
        },
        cerrar_man: {
          value: [0]
        },
        abrir_man: {
          value: [0]
        }
      },
      tag: {
        _id: 12345,
        value: [1],
        description: 'Motor ter1 (Noria bla bla)',
        cmd: {
          arranque_man: {
            value: [1]
          },
          modo_manual: {
            value: [0]
          }
        },
        cfg: {
          tiempo_arranque: {
            value: [3]
          }
        },
        status: {
          codigo_estado: {
            value: [3]
          },
          carga: {
            value: [55.546],
            eu: '%'
          }
        }
      },
      tag_kg: {
        _id: 12345,
        value: [1],
        description: 'Motor ter1 (Noria bla bla)',
        idx_sec: {
          value: [1]
        },
        cmd: {
          cerrar_man: {
            value: [1]
          },
          abrir_man: {
            value: [0]
          },
          arranque_man: {
            value: [1]
          },
          modo_manual: {
            value: [0]
          }
        },
        status: {
          codigo_estado: {
            value: [3]
          },
          carga: {
            value: [55.6],
            eu: 'kg'
          }
        }
      }
    }
  }
}
</script>

<style>
</style>
