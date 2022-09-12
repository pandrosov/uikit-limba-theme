// category page
let videosOverlays = document.querySelectorAll('.uk-overlay-video');
let videos = document.querySelectorAll('video.uk-video');

if(videosOverlays) {
    videosOverlays.forEach((item, index) => {
        item.addEventListener('click', function(e) {
            item.classList.toggle('uk-hidden');
            let videoContainer = item.parentNode;
            let video = videoContainer.querySelector('video.uk-video');
    
            video.setAttribute('controls', true);
            video.play();
        })
    })
}

if(videos) {
    videos.forEach(item => {
        item.addEventListener('pause', event => {
            let videoContainer = item.parentNode;
            let videoOverlay = videoContainer.querySelector('.uk-overlay-video');
            videoOverlay.classList.toggle('uk-hidden');

            item.removeAttribute('controls');
        })
    })
}