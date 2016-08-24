#= require active_admin/base

console.log('Global JQuery version: ' + $.fn.jquery)

$ ->
  hostname = window.location.hostname.toString()
  script = '<script src="http://' + hostname + ':3808/webpack/application.js"></script>'
  $('body').append($(script))
