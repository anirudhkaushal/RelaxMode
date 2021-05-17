const playButton = document.querySelector('.play')
const pauseButton = document.querySelector('.pause')


playButton.addEventListener('click', () => {
    const selectedTrack = document.querySelector('select').value
    chrome.runtime.sendMessage({ name: "playTrack", track: selectedTrack})
})


pauseButton.addEventListener('click', () => {
    chrome.runtime.sendMessage({ name: "pauseTrack"}) 
})