<template>
  <a href="#" class="btn btn-primary" type="button" data-toggle="popover" data-popover-content="#content" data-placement={{dataPlacement}}>{{btnText}}</a>

  <div class="popover-body" class="hidden">
    <slot></slot>
  </div>
</template>

<style scoped>
    
</style>

<script>
  export default {
    name: 'popover',
    ready() {
     $("[data-toggle=popover]").popover({
      html : true,
      content: $('.popover-body'),
      title: this.popoverTitle
     });
 },
 trigger: 'manual',
 props: {
    popoverHtml: {
      type: String,
      default: ""
  },
  popoverTitle: {
      type: String,
      default: ""  
  },
  btnText: {
      type: String,
      default: "click"  
  },
  dataPlacement: {
      type: String,
      default: "bottom"
  }
},
data() {
    return {
      toggle: false
       // buttonLabel: 'Click me!',
       // count: 0
   }
},
meteor: {
      /*data: {
        count() {
          return Session.get('counter');
        }
    }*/
},
methods: {
  togglePopover: function() {
    this.toggle = !this.toggle;
},
      // addOne() {
      //   Session.set('counter', this.count + 1);
      //   this.buttonLabel = labels[Math.round(Math.random()*(labels.length - 1))];
      // }
  }
}
</script>