#= require active_admin/base

console.log('Global JQuery version: ' + $.fn.jquery)

$ ->
  hostname = window.location.hostname.toString()
  script = '<script src="http://' + hostname + ':8080/app.js"></script>'
  $('body').append($(script))
