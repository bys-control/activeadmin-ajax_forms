<template>
  <div id="wrapper">
   <div class="wrapper wrapper-content animated fadeIn">
    <div class="row">
      <div class="col-lg-12">
        <div class="ibox float-e-margins">
          <div class="ibox-content text-center">

            <div class="tooltip-demo">
              <button type="button" class="btn btn-primary" data-container="body" data-toggle="popover" data-placement="top" data-content="">clicks</button>

              <div class="row">
                <div class="col-lg-2">
                  <div class="ibox float-e-margins">
                    <div class="ibox-title">
                      <span class="label label-success pull-right">Monthly</span>
                      <h5>Views</h5>
                    </div>
                    <div class="ibox-content">
                      <h1 class="no-margins">386,200</h1>
                      <div class="stat-percent font-bold text-success">98% <i class="fa fa-bolt"></i></div>
                      <small>Total views</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

  //import '../plugins/toastr/toastr.min.js'
  //import '../plugins/toastr/toastr.min.js'
  //import '../plugins/toastr/toastr.min.css'
  //import '../plugins/jqGrid/jquery.jqGrid.min.js'
  //dbarrett:dropzonejs
  //twbs:bootstrap@3.3.6
  //import {fortawesome} from 'fortawesome'
  
  export default {
    ready() {
      $("[data-toggle=popover]").popover({trigger: "focus"});
      $("[data-toggle=tooltip]").tooltip();
    },
    data() {
      return {
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
      // addOne() {
      //   Session.set('counter', this.count + 1);
      //   this.buttonLabel = labels[Math.round(Math.random()*(labels.length - 1))];
      // }
    }
  }
</script>