(function() {
  var videos = [{
    videoId: 'CWKn5Yz1jdk',
    startSeconds: 61,
    endSeconds: 64,
    suggestedQuality: 'large',
  },{
    videoId: 'ZtpKpm32WpQ',
    startSeconds: 107,
    endSeconds: 116,
    suggestedQuality: 'large'
  },{
    videoId: 'qpHSrWh0T64',
    startSeconds: 13,
    endSeconds: 18,
    suggestedQuality: 'large'
  },{
    videoId: '7Lvf9mBQHes',
    startSeconds: 31,
    endSeconds: 44,
    suggestedQuality: 'large'
  },{
    videoId: 'aQS7wnHgML4',
    startSeconds: 11,
    endSeconds: 27,
    suggestedQuality: 'large'
  },{
    videoId: 'qpHSrWh0T64',
    startSeconds: 49,
    endSeconds: 56,
    suggestedQuality: 'large'
  },{
    videoId: 'qpHSrWh0T64',
    startSeconds: 138,
    endSeconds: 144,
    suggestedQuality: 'large'
  },{
    videoId: 'oGUxJbhCkF0',
    startSeconds: 32,
    endSeconds: 37,
    suggestedQuality: 'large'
  },{
    videoId: 'ZtpKpm32WpQ',
    startSeconds: 64,
    endSeconds: 75,
    suggestedQuality: 'large'
  },{
    videoId: 'nM-aVD4QVq4',
    startSeconds: 159,
    endSeconds: 170,
    suggestedQuality: 'large'
  }];

  var player;
  var videoIndex = 0;

  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '390',
      width: '640',
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }

  function onPlayerReady(event) {
    throttledLoadNextVideo();
  }

  function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
      throttledLoadNextVideo();
    }
  }

  function loadNextVideo() {
    if (videoIndex >= videos.length) {
      return;
    }
    player.loadVideoById(videos[videoIndex]);
    videoIndex++;
  }

  var throttledLoadNextVideo = throttle(loadNextVideo, 1000, {
    trailing: false
  });

  window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

})();
