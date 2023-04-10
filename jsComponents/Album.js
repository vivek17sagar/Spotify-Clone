

document.querySelector('.container-Albums').style.display = "none";

const albums = document.querySelector('.top-container-playlist');

albums.addEventListener('click',(e)=>{

    if((typeof e.target.children[1].textContent) == "string"){
        
    document.querySelector('.container-Albums').style.display = "block";
    document.querySelector('.wrap-allContent').style.display = "none";
    document.querySelector('.container-Search').style.display = "none";
    document.querySelector('.container-likedSong').style.display = "none";
    let indexSinger = e.target.children[2].textContent;
    let singerName = e.target.children[1].textContent;
    let singerImage = (e.target.children[3].children[0]).getAttribute("src");

    // console.log(indexSinger);
        albumsSong(indexSinger,singerName,singerImage);
    }

    
    
})



function albumsSong(indexSinger,singerName,singerImage){

    // console.log(indexSinger,singerName,singerImage);

//     <div> 
//     <div class="Album-Songs">
        
//     </div>
//     <div class="renderAlbumSong">

//     </div>
// </div>

    let albumBanner = document.createElement("div");

    albumBanner.classList.add('albumFrame');

    albumBanner.innerHTML = `
    <div class="Album-Songs">
        <div class="cont"><img class="albumImage" src=${singerImage}>
        <div class ="albumName">${singerName}</div>
        </div>
    </div>
    <div class="renderAlbumSong">

    </div>
    `

    document.querySelector('.container-Albums').append(albumBanner);

    songsAlbum[indexSinger].forEach((item)=>{
        
        const songBox = document.createElement("div");
        

        songBox.innerHTML = `
        <div class="songs-box">
            <div class="playing-button-animate">
            <img class="playerBtn" src="./images/play.png" alt="playingButton">
        </div>      
        <div class="songs-card-image">
            <img src=${item.songImage} alt="song-card-img">
            <p class="forSong">${item.songName}</p>
            <div class="songs-card-title">
            ${item.songName}
            </div>
        </div>
        </div>
        `


        document.querySelector('.renderAlbumSong').append(songBox);
    })
    // const renderAlbumSongs = document.createElement("div");
    // renderAlbumSongs.classList.add('albumMusic');

    // renderAlbumSongs.innerHTML = `
    // <div class="Album-Songs">
                        
    // </div>
    // <div class="renderAlbumSong">

    // </div>
    // `

}
