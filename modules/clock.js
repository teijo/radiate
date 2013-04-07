$(function() {
  var $container = $('#clock')
  function update() {
    $container.text(moment().format('hh:mm:ss'))
  }
  function adjust() { $container.textFlood() }
  update()
  setTimeout(adjust, 100)
  $(window).asEventStream('resize').throttle(300).onValue(adjust)
  Bacon.interval(1000).onValue(update)
})
