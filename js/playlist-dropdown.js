let playlistBtn = document.getElementsByClassName("playlist-btn")[0];
playlistBtn.addEventListener("click", () => {
    let playlist = document.getElementsByClassName("playlist")[0];
    if(playlist.style.display == "flex") {
        playlist.style.display = "none";
    } else{
        playlist.style.display = "flex";
    }
});
