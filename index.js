import data from './data/spotify.json' assert {type: 'json'};


function forAddSongsCard(index,title,image,song){
  let container = document.createElement('div');
  container.classList.add('songs-box');

  container.innerHTML = `
  <div class="playing-button-animate">
      <img class="playerBtn" src="./images/play.png" alt="playingButton">
  </div>
  <div class="songs-card-image">
      <img src=${image} alt="song-card-img">
      <p class="forSong">${song}</p>
      <div class="songs-card-title">
        ${title}
      </div>
  </div>
  `
  document.querySelector(`.card-${index}`).append(container);
}



data.cardbox.forEach((data,index)=>{
  // console.log(data)
  let containerBlocks = document.createElement('div');
  containerBlocks.classList.add('songs-content');
  containerBlocks.innerHTML = `
  <div class="playlist-titles">
          ${data.songsbox}        
  </div>
      <div class="songs-card card-${index}">
        
      </div>
  `

document.querySelector('.main-container-bottom').append(containerBlocks);
})


// console.log(data)
for(let i = 0; i<4; i++){
data.cardbox[i].songscards.forEach((item)=>{
    forAddSongsCard(i,item.song_name,item.image_source,item.quality.low)
})
}

const need = document.querySelector('.main-container');
const audioMain = document.querySelector('.audio');

const titleSong = document.querySelector('.songName');
const imageSong = document.querySelector('.songImage');

need.addEventListener('click',(e)=>{
  
  if(e.target.classList.contains('playerBtn')){
  const link = e.target.parentNode.nextSibling.nextSibling.children[1].textContent
  const forImage = e.target.parentNode.nextSibling.nextSibling.children[0];
  titleSong.innerHTML = e.target.parentNode.nextSibling.nextSibling.children[2].textContent
  const imageLink = forImage.getAttribute("src");
  imageSong.setAttribute("src",imageLink)
  audioMain.setAttribute("src",link);


}

})