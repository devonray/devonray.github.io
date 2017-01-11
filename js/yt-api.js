(function() {
  var API_SRC = "https://www.youtube.com/iframe_api";
  var tag = document.createElement('script');
  tag.src = API_SRC;
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);  
})();
