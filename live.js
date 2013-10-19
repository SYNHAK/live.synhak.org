function updateJukebox(jsonData) {
  data = JSON.parse(jsonData);
  $("#now-playing-text").text(data.song.title+" by "+data.song.artist);
}

function onJukeboxSensorPolled(data) {
  updateJukebox(data.value);
}

function updateJukeboxError() {
  $("#now-playing-text").text("Couldn't load!");
}

$(document).ready(function () {
  $.ajax({
    url: "https://synhak.org/auth/sensors/4.json",
    success: onJukeboxSensorPolled,
    error: updateJukeboxError,
  });
  $('#hackercam').error(function () {
    this.src = "http://webcam/mjpg/video.mjpg";
  });
});
