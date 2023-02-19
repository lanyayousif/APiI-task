async function convertdata(){
    try{
        const fetchdata=await fetch('https://rickandmortyapi.com/api/character')
        const data=await fetchdata.json()
        const cards=document.querySelector('.cards')
        let array= data.results;

       array = array.map(function(value,index){
            if (array[index].episode.length >= 25){
                return{
                    ...value,
                    episodesate :"main"}}
            else{
                return{
                    ...value,
                    episodesate :"side"}
            }
        })

        array=array.filter((value,index)=>{
            return array[index].status =="Alive"
            
        })

       
        array.forEach((element,index) => {

            cards.innerHTML +=`
            <div class="card">
            <div class="img-box">
                <img src="${array[index].image}" alt="">
                <p class="state">${array[index].status}</p>
            </div>
            <div class="information-box">
                <h3 class="name">${array[index].name}</h3>
                <p>Episode state <small>${array[index].episodesate}</small></p>
                <div class="box-img">
                   <div><img src="./user (1).png" alt=""></div> 
                    <p class="species">${array[index].species}</p>
                </div>
                <div class="box-img">
                    <div> <img src="./male-gender.png" alt=""></div>
                    <p class="male">${array[index].gender}</p>
                </div>
                <div class="box-img">
                    <div><img src="./location.png" alt=""></div>
                    <p class="location">${array[index].location.name}</p>
                </div>
            </div>
        </div>`

        });

    }catch(error){
        console.log(error)
    }
}

convertdata()