
function randomColor(){
            
    let colorRd = Math.floor(Math.random() * 290);
    let colorGg = Math.floor(Math.random() * 290);
    let colorBl = Math.floor(Math.random() * 290);

    document.querySelector('.main-container-top').style.background = `linear-gradient(90deg, rgba(18,18,18,1) 0%, rgba(${colorRd},${colorGg},${colorBl},0.21332282913165268) 50%, rgba(18,18,18,1) 100%)`    
}


    document.querySelector('.top-container-playlist').addEventListener('mouseover',(e)=>{
        
        e.target.classList.contains('playlist-box') ?
        randomColor() : null
    })