<template>
      <mdl-textfield floating-label="Background Color" :value.sync="backgroundColor"></mdl-textfield>
      <mdl-textfield floating-label="Color" :value.sync="color"></mdl-textfield>
      <mdl-textfield floating-label="Icon" :value.sync="icon"></mdl-textfield>
      <mdl-textfield floating-label="Text" :value.sync="text"></mdl-textfield>
      
      <div class="inline">
        <mdl-textfield floating-label="Size" :value.sync="size"></mdl-textfield>
        <mdl-slider :value.sync="size" min="0" max="1000"></mdl-slider>
      </div>
      
      <div class="inline">
        <mdl-textfield floating-label="repeat" :value.sync="repeat"></mdl-textfield>
        <mdl-slider :value.sync="repeat" min="0" max="1000"></mdl-slider>
      </div>

      <div class="inline">
        <mdl-switch :checked.sync="checked" class="mdl-js-ripple-effect">Parpadeante</mdl-switch>
          <mdl-tooltip for="mood-button">Add something!</mdl-tooltip>
          <mdl-button id="mood-button" fab primary>
            Here is some <strong>custom</strong> <code>html</code><br/><i class="material-icons">mood</i>
          </mdl-button>
      </div>
      

      <div class="clear"></div>
      <mdl-button icon v-for="n in repeat" v-mdl-ripple-effect>
        {{text}}
        <i :class="{'blink_me': animated}" class="material-icons" :style="{color:color, width: size+'px', height: size+'px', backgroundColor: backgroundColor}">{{icon}}</i>
      </mdl-button>

</template>

<!--<script lang="coffee">
  `import {Meteor} from 'meteor/meteor'`

  return {
    props: [ 'data' ]
    methods: removePost: ->
      Meteor.call 'posts.remove', @data._id
      return
  }
  </script>
-->

<script>
  //import OtherComponent from './other-component.vue'
  export default {
    name: 'my-material-card', // redundante
    components: {},
    data: function() {
      return {
        checked: false,
        animated: false
      }
    },
    watch: {
      checked: function(value){
        if (value){
          this.animated=true;
        } else {
          this.animated=false;
        }
      }
    },
    props: {
      cardTitle:{
        default: ""
      },
      supportingText:{},
      actions:{},
      actionsText:{},
      icon: {
        default: 'favorite'
      },
      color: {
        default: 'lightgray'
      },
      backgroundColor: {
        default: '#30A0FF'
      },
      step: {
        default: 1
      },
      size: {
        default: 50
      },
      repeat: {
        default: 5
      },
      text:{
        default: "repalce Me"
      }
    }
  }
</script>

<style scoped>
  div.inline{
    display: inline-block;
  }
  div.clear{
    display:block;
  }
  .blinking{
    text-decoration: blink;
  }
  .blink_me {
    animation: blinker 1s linear infinite;
  }

  @keyframes blinker {  
    50% { opacity: 0.0; }
  }
</style>