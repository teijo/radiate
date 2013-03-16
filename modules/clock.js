$(function() {
  var $container = $('#clock')
  Bacon.interval(1000).onValue(function() {
    $container.text(moment().format('hh:mm:ss'))
  })
})
