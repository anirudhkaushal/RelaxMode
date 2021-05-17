chrome.runtime.onMessage.addListener((msg, sender, response) => {

    const audioElement = document.querySelector(".audio-element")

    if(msg.name == "playTrack") { 
        const trackName = msg.track 
        audioElement.src = `/tracks/track-${trackName}.mp3`  
        audioElement.play()
    }

    if(msg.name == "pauseTrack") {
        audioElement.pause()
    }
})