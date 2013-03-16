$(function() {
  var $container = $('#clock div')
  function update() {
    $container.text(moment().format('hh:mm:ss'))
  }
  update()
  Bacon.interval(1000).onValue(update)
})
