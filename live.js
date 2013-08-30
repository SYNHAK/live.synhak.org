$(document).ready(function () {
  $.ajax({
    url: "https://synhak.org/auth/sensors/3.json", 
    success: onDoorSensorPolled,
    error: updateSignError,
  })
  $('#hackercam').error(function () {
    this.src = "http://webcam/mjpg/video.mjpg";
  });
});
