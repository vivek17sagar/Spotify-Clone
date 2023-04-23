const heart = document.querySelector('.heart');
const audioPlayer = document.querySelector('.audio');

const imageS = document.querySelector('.songImage');
const nameS = document.querySelector('.songName');

const tBody = document.querySelector('.tBody');
const likeSongBtn = document.querySelector('.feature-5-name');
const homePage = document.querySelector('.feature-1-name');



let array = [];
let obj = [];

function renderLikedSong(image,song,number,checkedImage,playImage,songName){
    let rowSong = document.createElement("tr");

    rowSong.innerHTML = `
    <tr>
        <td  class="row">
            <img class = "likedImageSong" src = "${image}">
        </td>
        <td  class="row">${number}</td>
        <td  class="row">${song}</td>
        <td  class="row"><img class = "checkedImageLogo" src = ${checkedImage}></td>
        <td  class="row"><img class = "checkedImageLogo playBtn" src = ${playImage}></td>
        <td  class="row">remove</td>       
        <td class="hideThis">${songName}</td>
    </tr>
    `;

    tBody.append(rowSong);
}



heart.addEventListener('click',()=>{
    
    let imageLink = imageS.getAttribute("src");
    let songName = audioPlayer.getAttribute("src");

    heart.style.transform = "scale(1.5)";
    
    setTimeout(()=>{
        heart.style.transform = "scale(1)"    
    },200)

    let found = true;
    array.forEach((item)=>{
        if(item.image===imageLink){
            found = false;
        }
    })

    if(found){
    array.push({
        image:`${imageLink}`,
        song:`${nameS.textContent}`,
        songName:`${songName}`
    })
}
    localStorage.setItem('likedSong',JSON.stringify(array));
    obj = JSON.parse(localStorage.getItem('likedSong'))
    createPlayList();

})

let checkedImage = "images/checked.png";
let playImage = "images/play.png";

document.querySelector('.container-likedSong').style.display = "none";

likeSongBtn.addEventListener('click',()=>{
    document.querySelector('.wrap-allContent').style.display = "none";
    document.querySelector('.container-Search').style.display = "none";
    document.querySelector('.container-Albums').style.display = "none";
    document.querySelector('.container-createPlayList').style.display = "none";
    document.querySelector('.container-likedSong').style.display = "block";
    
    document.querySelector('.container-Albums').children.length!=0 ?
    document.querySelector('.albumFrame').remove() : null;
   
    let allrows = document.querySelector('.tBody');
    allrows.innerHTML = "";
 

    obj.length>0 ? obj.forEach((item,index)=>{
            renderLikedSong(item.image,item.song,index+1,checkedImage,playImage,item.songName);
        }):null;
})



homePage.addEventListener('click',()=>{
    document.querySelector('.wrap-allContent').style.display = "block";
    document.querySelector('.container-Albums').style.display = "none";
    document.querySelector('.container-Search').style.display = "none";
    document.querySelector('.container-createPlayList').style.display = "none";
    document.querySelector('.container-likedSong').style.display = "none";

    // document.querySelector('.albumFrame').remove();
    document.querySelector('.container-Albums').children.length!=0 ?
    document.querySelector('.albumFrame').remove() : null;
   

})


tBody.addEventListener('click',(event)=>{
    if(event.target.classList.contains("playBtn")){
    let likeSongSelect = event.target.parentNode.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML;
    let likeImageSelect = event.target.parentNode.parentNode.children[0].children[0];
    let likeSongnameSelect = event.target.parentNode.parentNode.children[2].innerHTML;

    let ImageLike = likeImageSelect.getAttribute("src");
    audioPlayer.setAttribute("src",likeSongSelect);
    imageS.setAttribute("src",ImageLike);
    nameS.innerHTML = likeSongnameSelect;    
}
})