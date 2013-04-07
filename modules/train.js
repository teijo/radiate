$(function () {
  var $container = $('#train')
  //var url = 'http://188.117.35.14/TrainRSS/TrainService.svc/stationInfo?station=KIL'
  var url = 'modules/kilo.xml'
  $.ajax(url).done(function (data) {
    var $xml = $(data)
    var next = $xml.find('item:eq(0)')
    var eta = next.find('eta').text()
    var scheduled = next.find('scheduledTime').text()
    $container.text(eta === scheduled ? scheduled : scheduled + '\u2192' + eta)
    function adjust() {
      $container.textFlood()
    }

    setTimeout(adjust, 100)
    $(window).asEventStream('resize').throttle(300).onValue(adjust)
  })
})
