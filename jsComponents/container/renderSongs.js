

const renderBoxesOfSongs = {

    songsBoxesRender: function(){
        const songBox = document.createElement("div");
        

        songBox.innerHTML = `
        <div class="songs-box">
            <div class="playing-button-animate">
            <img class="playerBtn" src="./images/play.png" alt="playingButton">
        </div>      
        <div class="songs-card-image">
            <img src=${this.songImage} alt="song-card-img">
            <p class="forSong">${this.songLink}</p>
            <div class="songs-card-title">
            ${this.songName}
            </div>
        </div>
        </div>`

        document.querySelector(`.${this.box}`).append(songBox);
    }
}