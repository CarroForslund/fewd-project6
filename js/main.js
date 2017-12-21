//Media Element PLayer settings
$('#mediaplayer').mediaelementplayer({
  stretching: 'responsive',
  features: ['playpause', 'current', 'progress', 'duration', 'volume', 'fullscreen'],
});

//Variable declaration
let spans = document.querySelectorAll('.transcript-wrapper span');
let video = document.getElementsByTagName('video')[0];

//Highlight current part of transcript when video plays
video.addEventListener('timeupdate', (event) => {
  const currentTime = video.getCurrentTime(); //recognizes where in the video we are

  for (let i = 0; i < spans.length; i++) {
    video = document.getElementsByTagName('video')[0];
    const span = spans[i];
    start = parseFloat(span.dataset.start);  //returns decimal number
    const end = parseFloat(span.dataset.end);

    if (currentTime > start && currentTime < end) {
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

  span.addEventListener('click', (event) => {
    video.setCurrentTime(start); //Tells where to start playing video
    video.play();
  });
}
