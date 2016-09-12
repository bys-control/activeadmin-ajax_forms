<template>
  <div class="ibox float-e-margins" ref:iboxbox>
      <div class="ibox-title">
          <h5>
            {{title}}
          </h5>

          <slot name="heading" v-if="statusBox=='minimized'"></slot>

          <div class="ibox-tools">
              <a class="collapse-link" @click="collapse">
                <i class="fa fa-chevron-up" ref:collapsebtn></i>
              </a>
              <a class="close-link">
                <i class="fa fa-times" @click="close"></i>
              </a>
          </div>
      </div>
      <div class="ibox" ref:ibox>
        <div class="ibox-content" style="display: block;" ref:content>
            <p>
               <slot name="content">
               <slot></slot>
            </p>
        </div>
      </div>
  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    name: 'box',
    ready () {
    },
    data () {
      return {
        statusBox: 'maximized'
      }
    },
    methods: {
      collapse: function () {
        // Ccolapse ibox function
        var ibox = this.$refs.ibox
        var button = this.$refs.collapsebtn
        var content = this.$refs.content
        $(content).slideToggle(200)
        this.statusBox = this.statusBox === 'maximized' ? 'minimized' : 'maximized'
        $(button).toggleClass('fa-chevron-up').toggleClass('fa-chevron-down')
        $(ibox).toggleClass('').toggleClass('border-bottom')
        setTimeout(function () {
          $(ibox).resize()
          $(ibox).find('[id^=map-]').resize()
        }, 50)
      },
      close: function () {
        // Close ibox function
        $(this.$refs.iboxbox).remove()
      }
    },
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>
