
// Get our Elements 
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');




// Build out Functions
function togglePlay() {

    if (video.paused) {
        video.play();
    }else {
        video.pause();
    }
    
    // Cách viết ngắn hon
    // const method = video.paused ? 'play' : 'pause';
    // video[method]();
    // Hoặc
    // video[video.paused ? 'play' : 'pause']();
}

function uppdateButton() {
    var icon = (this.paused) ? "►" : "❚ ❚";
    toggle.textContent = icon;
}

function skip() {
    // console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}

function rangesUpdate() {
    video[this.name] = this.value;
    // console.log(this.name, this.value);
}

function handleProgressFilled() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.width = `${percent}%`;
}

function scrollProgress(e) {
    // console.log(e);
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;

    // console.log(video.currentTime);
    // progressBar.style.width = video.currentTime;
    // progressBar.style.background = "red"; 
}


// Hook up the even listners
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);

video.addEventListener('pause', uppdateButton);
video.addEventListener('play', uppdateButton);

video.addEventListener('timeupdate', handleProgressFilled);

skipButtons.forEach(btn => btn.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', rangesUpdate));
ranges.forEach(range => range.addEventListener('mousemove', rangesUpdate));



let mousedown = false;
progress.addEventListener('click', scrollProgress);
progress.addEventListener('change', scrollProgress);
progress.addEventListener('mousemove', (e) => mousedown && scrollProgress(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);