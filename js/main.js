$('#mediaplayer').mediaelementplayer({
  stretching: 'responsive',
  features: ['playpause', 'current', 'progress', 'duration', 'volume', 'fullscreen'],
});

//Variable declaration
let spans = document.querySelectorAll('.transcript-wrapper span');
let video = document.getElementsByTagName('video')[0];

//Highlight current part of transcript when video plays
video.addEventListener('timeupdate', function(event) {
  const currentTime = video.getCurrentTime(); //recognizes where in the video we are

  for (let i = 0; i < spans.length; i++) {
    video = document.getElementsByTagName('video')[0];
    const span = spans[i];
    startTime = parseFloat(span.dataset.start);  //returns decimal number
    const end = parseFloat(span.dataset.end);

    if (currentTime > startTime && currentTime < end) {
      span.classList.add("highlight");
    } else {
      span.classList.remove("highlight");
    }
  }
});


//Link span sections to the right video sequence
for (let i = 0; i < spans.length; i++) {
  const span = spans[i];
  const start = parseFloat(span.dataset.start);
  const end = parseFloat(span.dataset.end);
  console.log("start");

  span.addEventListener('click', function (event) {
    // video = document.getElementsByTagName('video')[0];
    console.log(start);
    video.setCurrentTime(start); //Tels where to start playing video
    video.play();
  });
}
