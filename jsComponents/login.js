
const userInputLogin = document.querySelector('.username-1');
const userInputPassword = document.querySelector('.password-1');

         

document.querySelector('.lgn-btn-1').addEventListener('click',()=>{
    
    if(arrayOfUser.length>0){
    arrayOfUser.forEach((item)=>{
        if(userInputLogin.value==item.username){
            if(userInputPassword.value==item.password){
                document.querySelector('.main-container-sign').style.display = "none"
                document.querySelector('.main-container-1').style.display = "none"
                document.querySelector('.global-container').style.display = "block"
            }else{
                document.querySelector('.lgn-error').innerHTML = "Password is incorrect !!";
                document.querySelector('.lgn-error').style.display = "block"
            }
        }else{
            document.querySelector('.lgn-error').innerHTML = "User Not Found !!";
            document.querySelector('.lgn-error').style.display = "block"
        }
    })
}else{
    document.querySelector('.lgn-error').innerHTML = "User Not Found !!";
            document.querySelector('.lgn-error').style.display = "block"
}
})


document.querySelector('.signup').addEventListener('click',()=>{
    document.querySelector('.main-container-1').style.display = "none"
    document.querySelector('.global-container').style.display = "none"
    document.querySelector('.main-container-sign').style.display = "block"
})