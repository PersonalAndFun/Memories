document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audio-player');
    const playButtons = document.querySelectorAll('.play-btn');
    const songs = document.querySelectorAll('.song');
    
    playButtons.forEach(button => {
        button.addEventListener('click', () => {
            const songElement = button.parentElement;
            const songSrc = songElement.getAttribute('data-src');
            
            // Remove active class from all songs
            songs.forEach(song => song.classList.remove('active'));
            
            // Add active class to the current song
            songElement.classList.add('active');
            
            // Set the audio source and play
            audioPlayer.src = songSrc;
            audioPlayer.play();
        });
    });
});
