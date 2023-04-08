const heart = document.querySelector('.heart');
const audioPlayer = document.querySelector('.audio');

const imageS = document.querySelector('.songImage');
const nameS = document.querySelector('.songName');

const tBody = document.querySelector('.tBody');
const likeSongBtn = document.querySelector('.feature-5-name');
const homePage = document.querySelector('.feature-1-name');




let array = [];

// let array2 = [];


let obj;

// obj = JSON.parse(localStorage.getItem('likedSong'));
// if(obj>null && obj.length>0){
// array2 = [...obj];
// }



function renderLikedSong(image,song,number,checkedImage,playImage){
    let rowSong = document.createElement("tr");


    rowSong.innerHTML = `
    <tr>
        <td  class="row">
            <img class = "likedImageSong" src = "${image}">
        </td>
        <td  class="row">${number}</td>
        <td  class="row">${song}</td>
        <td  class="row"><img class = "checkedImageLogo" src = ${checkedImage}></td>
        <td  class="row"><img class = "checkedImageLogo" src = ${playImage}></td>
        <td  class="row">remove</td>
        
    </tr>
    `;

    tBody.append(rowSong);
    // i++;
}



heart.addEventListener('click',()=>{

    
    
    let imageLink = imageS.getAttribute("src");

    heart.style.transform = "scale(1.5)";
    setTimeout(()=>{
        heart.style.transform = "scale(1)"
    },500)

    let found = true;
    array.forEach((item)=>{
        if(item.image===imageLink){
            found = false;
        }
    })

    if(found){
    array.push({
        image:`${imageLink}`,
        song:`${nameS.textContent}`
    })
}

    localStorage.setItem('likedSong',JSON.stringify(array));
    obj = JSON.parse(localStorage.getItem('likedSong'))

    
})


let checkedImage = "images/checked.png";
let playImage = "images/play.png";

document.querySelector('.container-likedSong').style.display = "none";

likeSongBtn.addEventListener('click',()=>{
    document.querySelector('.wrap-allContent').style.display = "none";
    document.querySelector('.container-likedSong').style.display = "block";


    // let allrows = document.querySelector('.tBody');
    // allrows.innerHTML = "";

   
        
    obj.forEach((item,index)=>{
        renderLikedSong(item.image,item.song,index+1,checkedImage,playImage);
    })
    

})




// -------------------------for render data firstly presentd in localStorage---------------
// array2.forEach((item,index)=>{
//     renderLikedSong(item.image,item.song,index+1,checkedImage,playImage);
// })




homePage.addEventListener('click',()=>{
    document.querySelector('.wrap-allContent').style.display = "block";
    document.querySelector('.container-likedSong').style.display = "none";
})



