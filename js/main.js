// //Variable declaration
// let video = document.getElementsByTagName('video')[0];
// const spans = document.querySelectorAll('.transcript-wrapper span');
//
// //Highlight current part of transcript when video plays
// video.addEventListener('timeupdate', () => {
//   const currentTime = video.getCurrentTime();
//
//   for (let i = 0; i < spans.length; i++) {
//     const video = document.getElementsByTagName('video')[0];
//     const span = spans[i];
//     const start = parseFloat(span.dataset.start);  //returns decimal number
//     const end = parseFloat(span.dataset.end);
//
//     if (currentTime > start && currentTime < end) {
//       span.classList.add("highlight");
//     } else {
//       span.classList.remove("highlight");
//     }
//   }
// });
//
// //Link span sections to the right video sequence
// for (let i = 0; i < spans.length; i++) {
//   const span = spans[i];
//   const start = parseFloat(span.dataset.start);
//   const end = parseFloat(span.dataset.end);
//
//
//   span.addEventListener('click', (event) => {
//     video = document.getElementsByTagName('video')[0];
//     if (span) {
//       video.setCurrentTime(start);
//       video.play();
//     }
//   });
// };

$('#mediaplayer').mediaelementplayer({
  stretching: 'responsive',
  features: ['playpause', 'current', 'progress', 'duration', 'volume', 'fullscreen'],
});

//Variable declaration
let spans = document.querySelectorAll('.transcript-wrapper span');
let video = document.getElementsByTagName('video')[0];

//Highlight current part of transcript when video plays
video.addEventListener('timeupdate', function(event) {
  console.log("nice");
  const currentTime = video.getCurrentTime();

  for (let i = 0; i < spans.length; i++) {
    video = document.getElementsByTagName('video')[0];
    span = spans[i];
    const start = parseFloat(span.dataset.start);  //returns decimal number
    const end = parseFloat(span.dataset.end);

    if (currentTime > start && currentTime < end) {
      console.log("Highligt" + span);
      span.classList.add("highlight");
    } else {
      console.log("NO Highligt" + span);
      span.classList.remove("highlight");
    }
  }
});


//Link span sections to the right video sequence
for (let i = 0; i < spans.length; i++) {
  span = spans[i];
  const start = parseFloat(span.dataset.start);
  const end = parseFloat(span.dataset.end);


  span.addEventListener('click', function (event) {
    video = document.getElementsByTagName('video')[0];
    if (span) {
      video.setCurrentTime(start);
      video.play();
    }
  });
}
