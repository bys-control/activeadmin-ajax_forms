<template>
  motor
</template>

<script>
  import Box from './Box.vue';
  import ScadaButton from './ScadaButton.vue';
  import StatusTagMotor from './StatusTagMotor.vue';

  export default {
    name: 'motor', // redundante
    ready() {
      console.log("motor");
    },
    props: {
      tag:{
        type: Object, //String,Number,Boolean,Function,Object,Array
        default: {
          _id:"",
          value:[]
        },
        required:true
        /*coerce: function (val) {
          return val + '' // cast the value to string
        },
        validator: function (value) {
          return value > 10
        }*/
      }
    },
    components: {
      Box,
      ScadaButton,
      StatusTagMotor
    },
    data: function() {
      return {};
    }
  }
</script>

<style>
</style>