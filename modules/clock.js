$(function() {
  var $container = $('#clock')
  function update() {
    $container.text(moment().format('hh:mm:ss'))
  }
  update()
  setTimeout(function() { $('#clock').textFlood() }, 1000)
  Bacon.interval(1000).onValue(update)
})
