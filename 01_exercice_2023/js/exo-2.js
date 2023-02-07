let images = ["assets/html.png", "assets/css.png", "assets/javascript.png"];
console.table(images);
let i = 0;

function slideShow() {
  document.getElementById("image").src = images[i];
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("slideShow()", 3000);
}

window.onload = slideShow;

let episodeTitle = "Breaking Bad";
let episodeDuration = 50;
let hasBeenWatched = false;

document.querySelector("#episode-info").innerText = `Episode: ${episodeTitle}
Duration: ${episodeDuration} min
${hasBeenWatched ? "Already watched" : "Not yet watched"}`;
