


const heart = document.querySelector('.heart');
const audioPlayer = document.querySelector('.audio');

const imageS = document.querySelector('.songImage');
const nameS = document.querySelector('.songName');

const tBody = document.querySelector('.tBody');
const likeSongBtn = document.querySelector('.feature-5-name');
const homePage = document.querySelector('.feature-1-name');


let i = 1;
// let ans = 1;
// 
//         Array me image link dalna he fir searching lagake ye check karenge ki song already liked list me he ya nhi
//   localStorage ka bhi use kiya ja sakta he sochna baba iske bare me bhi
// 
// let array = [];

heart.addEventListener('click',()=>{


    heart.style.transform = "scale(1.5)";
    setTimeout(()=>{
        heart.style.transform = "scale(1)"
        // alert("Added to Liked Songs")
    },500)







    let imageLink = imageS.getAttribute("src");
    


    let rowSong = document.createElement("tr");


    rowSong.innerHTML = `
    <tr>
        <td  class="row">
            <img class = "likedImageSong" src = "${imageLink}">
        </td>
        <td  class="row">${i}</td>
        <td  class="row">${nameS.textContent}</td>
        <td  class="row"></td>
        
        <td  class="row">khsfdkjhjkfd</td>
    </tr>
    `;

    tBody.append(rowSong);
    i++;

})





document.querySelector('.container-allOther').style.display = "none";

likeSongBtn.addEventListener('click',()=>{
    document.querySelector('.wrap-allContent').style.display = "none";
    document.querySelector('.container-allOther').style.display = "block";
})

homePage.addEventListener('click',()=>{
    document.querySelector('.wrap-allContent').style.display = "block";
    document.querySelector('.container-allOther').style.display = "none";
})