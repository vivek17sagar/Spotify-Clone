const name = document.querySelector('.name');
const username = document.querySelector('.username');
const password = document.querySelector('.password');


let arrayOfUser;


if(localStorage.getItem('user')){
    arrayOfUser=JSON.parse(localStorage.getItem('user'))
}else{
    arrayOfUser=[{
        name:"spotify",username:"spotify",password:"123456"
    }];
}

document.querySelector('.lgn-btn').addEventListener('click',()=>{
   verifyUser();
   arrayOfUser.push({
        name:name.value,username:username.value,password:password.value
    })


    localStorage.setItem(`user`,JSON.stringify(arrayOfUser))

    let getArray = JSON.parse(localStorage.getItem('user'));

    arrayOfUser = [...getArray]

    name.value = ''
    username.value = ''
    password.value = ''
})



function verifyUser(){
    
    arrayOfUser.forEach((item)=>{
        if(name.value==item.name){
            document.querySelector('.error').innerHTML = 'Name already exist !!'
            document.querySelector('.error').style.color = "red";
            document.querySelector('.error').style.display = 'block'
        }
        else if(username.value==item.username){
            document.querySelector('.error').innerHTML = 'username already exist !!'
            document.querySelector('.error').style.color = "red";
            document.querySelector('.error').style.display = 'block'
        }else{
            document.querySelector('.error').innerHTML = 'Successful !!'
            document.querySelector('.error').style.color = "green";
            document.querySelector('.error').style.display = 'block'
        }
    })
}



document.querySelector('.lgn').addEventListener('click',()=>{
    document.querySelector('.main-container-1').style.display = "block"
    document.querySelector('.global-container').style.display = "none"
    document.querySelector('.main-container-sign').style.display = "none"
})