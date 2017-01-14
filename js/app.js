(function() {
  var videos = [
    {
      videoId: 'ZtpKpm32WpQ',
      startSeconds: 107,
      endSeconds: 116,
      suggestedQuality: 'large',
      suggestedRate: 1,
    },
    {
      videoId: 'ZtpKpm32WpQ',
      startSeconds: 112,
      endSeconds: 115,
      suggestedQuality: 'large',
      suggestedRate: 0.25,
    },
    {
      videoId: 'CWKn5Yz1jdk',
      startSeconds: 61,
      endSeconds: 64,
      suggestedQuality: 'large',
      suggestedRate: 1,
    },
    {
      videoId: 'CWKn5Yz1jdk',
      startSeconds: 62,
      endSeconds: 64,
      suggestedQuality: 'large',
      suggestedRate: 0.25,
    },
    {
      videoId: 'qpHSrWh0T64',
      startSeconds: 13,
      endSeconds: 18,
      suggestedQuality: 'large',
      suggestedRate: 1,
    },
    {
      videoId: 'qpHSrWh0T64',
      startSeconds: 14,
      endSeconds: 18,
      suggestedQuality: 'large',
      suggestedRate: 0.25,
    },
    {
      videoId: '7Lvf9mBQHes',
      startSeconds: 31,
      endSeconds: 44,
      suggestedQuality: 'large',
      suggestedRate: 1,
    },
    {
      videoId: '7Lvf9mBQHes',
      startSeconds: 33,
      endSeconds: 38,
      suggestedQuality: 'large',
      suggestedRate: 0.25,
    },
    {
      videoId: 'aQS7wnHgML4',
      startSeconds: 11,
      endSeconds: 27,
      suggestedQuality: 'large',
      suggestedRate: 1,
    },
    {
      videoId: 'aQS7wnHgML4',
      startSeconds: 15,
      endSeconds: 19,
      suggestedQuality: 'large',
      suggestedRate: 0.25,
    },
    {
      videoId: 'qpHSrWh0T64',
      startSeconds: 49,
      endSeconds: 56,
      suggestedQuality: 'large',
      suggestedRate: 1,
    },
    {
      videoId: 'qpHSrWh0T64',
      startSeconds: 52,
      endSeconds: 54,
      suggestedQuality: 'large',
      suggestedRate: 0.25,
    },
    {
      videoId: 'qpHSrWh0T64',
      startSeconds: 138,
      endSeconds: 144,
      suggestedQuality: 'large',
      suggestedRate: 1,
    },
    {
      videoId: 'qpHSrWh0T64',
      startSeconds: 138,
      endSeconds: 141,
      suggestedQuality: 'large',
      suggestedRate: 0.25,
    },
    {
      videoId: 'oGUxJbhCkF0',
      startSeconds: 32,
      endSeconds: 38,
      suggestedQuality: 'large',
      suggestedRate: 1,
    },
    {
      videoId: 'oGUxJbhCkF0',
      startSeconds: 33,
      endSeconds: 36,
      suggestedQuality: 'large',
      suggestedRate: 0.25,
    },
    {
      videoId: 'ZtpKpm32WpQ',
      startSeconds: 64,
      endSeconds: 75,
      suggestedQuality: 'large',
      suggestedRate: 1,
    },
    {
      videoId: 'ZtpKpm32WpQ',
      startSeconds: 68,
      endSeconds: 71,
      suggestedQuality: 'large',
      suggestedRate: 0.25,
    },
    {
      videoId: 'nM-aVD4QVq4',
      startSeconds: 159,
      endSeconds: 170,
      suggestedQuality: 'large',
      suggestedRate: 1,
    },
    {
      videoId: 'nM-aVD4QVq4',
      startSeconds: 159,
      endSeconds: 162,
      suggestedQuality: 'large',
      suggestedRate: 0.25,
    }
  ];

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
    var video = videos[videoIndex];
    player.loadVideoById(video);
    if (video.suggestedRate) {
      player.setPlaybackRate(video.suggestedRate);
    }
    videoIndex++;
  }

  var throttledLoadNextVideo = throttle(loadNextVideo, 1000, {
    trailing: false
  });

  window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

})();
