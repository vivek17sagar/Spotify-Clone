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
            
        const song2 = new createSongChart(item.songImage,item.songLink,item.songName,"searchBox")
        renderBoxesOfSongs.songsBoxesRender.call(song2)
        }
    })
}


