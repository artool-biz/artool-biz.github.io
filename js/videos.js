// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function videoBackgroundSize() {
  var c = 9.0/16.0;
  var w = $("#splash").width();
  var h = $("#splash").height();
  var w2 = Math.round(h/c);
  var h2 = Math.round(w*c);
  if (h2 > h) {
    return [w, h2];
  } else {
    return [w2, h];
  }
}

function onYouTubeIframeAPIReady() {
  sizes = videoBackgroundSize();
  player = new YT.Player('video_background', {
    height: sizes[1],
    width: sizes[0],
    videoId: 'Vo3lxvm2aJU',
    playerVars: {
      'autoplay': 1,
      'controls': 0,
      'disablekb': 0,
      'fs': 0,
      'loop': 1,
      'modestbranding': 1,
      'showinfo': 0,
      'rel': 0,
      'playlist': 'Vo3lxvm2aJU'
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange,
    }
  });
}

function onPlayerReady(event) { player.mute(); return; }
function onPlayerStateChange(event) { return; }
function stopVideo() { return; }

function resizeVideoBackground() {
  sizes = videoBackgroundSize();
  $("#video_background").height(sizes[1]);
  $("#video_background").width(sizes[0]);
}

$(window).on('resize orientationChange', function(event) {
  resizeVideoBackground();
});
