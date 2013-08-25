function onDoorSensorPolled(data) {
  console.log(data);
  updateSign(data.value);
}

function updateSign(isOpen) {
  $('#door-state').removeClass('door-state-checking');
  $('#door-state').removeClass('door-state-error');
  if (isOpen) {
    $('#door-state').addClass('door-state-open');
  } else {
    $('#door-state').addClass('door-state-closed');
  }
}

function updateSignError() {
  $('#door-state').removeClass('door-state-checking');
  $('#door-state').removeClass('door-state-open');
  $('#door-state').removeClass('door-state-closed');
  $('#door-state').addClass('door-state-error');
  $('#door-state-timestamp').text("Sysadmins are already on it!");
}

$(document).ready(function () {
  $('#hackercam').error(function () {
    this.src = "http://webcam/mjpg/video.mjpg";
  });
  $.ajax({
    url: "https://synhak.org/auth/sensors/3.json", 
    success: onDoorSensorPolled,
    error: updateSignError,
  })
});