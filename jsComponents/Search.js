

document.querySelector('.container-Search').style.display = "none";
const Search = document.querySelector('.feature-2-name');


Search.addEventListener(('click'),()=>{
    document.querySelector('.wrap-allContent').style.display = "none";
    document.querySelector('.container-likedSong').style.display = "none";
    document.querySelector('.container-Search').style.display = "block";

})


// document.querySelector('.searchSongInput').addEventListener('keypress',(e)=>{
//     console.log('running...')
//     console.log(e.target.value)
// })
