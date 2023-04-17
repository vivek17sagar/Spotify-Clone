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

        albumsSong(indexSinger,singerName,singerImage);
    }  
})


function albumsSong(indexSinger,singerName,singerImage){

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
        const song = new createSongChart(item.songImage,item.songLink,item.songName,"renderAlbumSong")
    
        renderBoxesOfSongs.songsBoxesRender.call(song)
    })}

    function createSongChart(songImage,songLink,songName,box){
        this.songImage = songImage;
        this.songLink = songLink;
        this.songName = songName;
        this.box = box;
    }