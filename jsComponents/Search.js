document.querySelector('.container-Search').style.display = "none";
const Search = document.querySelector('.feature-2-name');


Search.addEventListener(('click'),()=>{
    document.querySelector('.wrap-allContent').style.display = "none";
    document.querySelector('.container-likedSong').style.display = "none";
    document.querySelector('.container-Search').style.display = "block";

    document.querySelector('.albumFrame').remove();

})

function cleanSongs(){
    document.querySelector('.searchBox').remove();       
}

document.querySelector('.searchSongInput').addEventListener('keyup',(e)=>{

    document.querySelector('.searchSongs').children.length != 0  ? cleanSongs() : null;
    // console.log(document.querySelector('.searchSongs').children)



    let songSearch = e.target.value;
    
    songSearch.length != 0 ? makeSearchSongBoxes(songSearch) : null;
    
})




function makeSearchSongBoxes(songSearch){
    const searchSongsBox = document.createElement("div");
    searchSongsBox.classList.add('searchBox');

    document.querySelector('.searchSongs').append(searchSongsBox);

    // pattern.ignoreCase
    searchData.forEach((item)=>{
        let songNamee = item.songName.toLowerCase();
        let singerNamee = item.songLink.toLowerCase();
        if(songNamee.includes(songSearch) || singerNamee.includes(songSearch)){
            
                let container = document.createElement('div');
                container.classList.add('songs-box');
              
                container.innerHTML = `
                <div class="playing-button-animate">
                    <img class="playerBtn" src="./images/play.png" alt="playingButton">
                </div>
                <div class="songs-card-image">
                    <img src=${item.songImage} alt="song-card-img">
                    <p class="forSong">${item.songLink}</p>
                    <div class="songs-card-title">
                      ${item.songName}
                    </div>
                </div>
                `
                document.querySelector(`.searchBox`).append(container);
           
              

        }
    })
}
// Search ki or home page pe jo khali pade box he unki same theme bana denge

