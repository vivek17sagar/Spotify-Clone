import data from './spotify.json' assert {type: 'json'};


function forAddSongsCard(index,title,image){
  let container = document.createElement('div');
  container.classList.add('songs-box');

  container.innerHTML = `
  <div class="playing-button-animate">
      <img src="" alt="playingButton">
  </div>
  <div class="songs-card-image">
      <img src=${image} alt="song-card-img">
      <div class="songs-card-title">
        ${title}
      </div>
  </div>
  `
  document.querySelector(`.card-${index}`).append(container);
}

data.cardbox.forEach((data,index)=>{
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



for(let i = 0; i<4; i++){
data.cardbox[i].songscards.forEach((item)=>{
    forAddSongsCard(i,item.song_name,item.image_source)
})
}

