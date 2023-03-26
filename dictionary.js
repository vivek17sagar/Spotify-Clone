
const mid = document.querySelector(".mid");
const results = document.querySelector(".results");
let input = document.querySelector("#input");

    const dictionary = (input)=>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '7b29d0bb68mshed64547679f10d0p1fa36fjsn5a71aafdbb33',
                'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
            }
        };

        
        mid.innerHTML = "Wait.....";
        mid.style.color = "green";
        
        setTimeout(()=>{
            
        fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word='+input, options)
            .then(response => response.json())
            .then(response =>{
                console.log(response)
                if(response.valid == true){
                mid.innerHTML = response.word;
                results.innerHTML = response.definition;
                console.log(response)
            }
            else{
                throw new Error("Something went wrong"); 
            }
            })   
            .catch(err => {
                mid.innerHTML = "Not Found";
                mid.style.color = "red"
            });

            
        },2000)

        
            
    }



    btn.addEventListener("click", (e)=>{
        e.preventDefault();
        dictionary(input.value);
    })

