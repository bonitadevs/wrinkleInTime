$(function () {
    $('[data-toggle="popover"]').popover()
  })

$(document).ready(function(){
  $("#subscribe-btn").click(function(){
    $("#subscribeModal").modal("show");
  })
})