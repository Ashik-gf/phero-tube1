
const viewsData = async() =>{
    const res = await fetch("https://openapi.programming-hero.com/api/videos/categories")
    const data = await res.json();
    const tubeData = data.data.slice(0,1);
    console.log(tubeData[0])
    const btnViews = document.getElementById('viewBtn')
    const div = document.createElement('div')
    div.innerHTML=`
    <a onclick="getViews('${tubeData[0].category_id}')">
    Short by views
    </a> 
    `
    btnViews.appendChild(div)  
    
}


const getViews = async(category_id)=>{

    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${category_id}`)
    const data =  await res.json();
   const cardData  =data.data;
    console.log(cardData);
    const viewsCardContainer = document.getElementById("viewsCardBox")
    viewsCardContainer.innerHTML=" ";
    const carddataContainer = document.getElementById("cardDatabox")
carddataContainer.innerHTML=" ";
const noVideosContainer = document.getElementById('novideos')
    noVideosContainer.innerHTML=" ";
    const mainBoxContainer = document.getElementById("mainCardDatabox")
    mainBoxContainer.innerHTML=" ";

    cardData.forEach(card => {
        console.log(card)
        const cardDiv = document.createElement('div')
    cardDiv.classList=`card w-96 bg-gray-100 shadow-xl`
    cardDiv.innerHTML=`
    <figure><img class="h-[200px] w-[380px] rounded-xl p-3" src="${card.thumbnail}" /></figure>
    <p>${card?.others.posted_date? card.others.posted_date : " no time "}</p>
    <div class="card-body">
    <div class="flex">
    <img class="h-[50px] w-[50px] rounded-full" src="${card?.authors[0]?.profile_picture}">
    <h2 class="text-black text-lg p-2 mx-4 font-bold">${card.title}</h2>
    </div>
        <div class="flex">
    <p>${card?.authors[0]?.profile_name}</p>
    
    <img class="h-[20px]" src="${card?.authors[0]?.verified? "blue.png" : ''}">
    </p>
    </div>
    <div>

    <p>Total views:${card.others.views}</p>
    </div>
    </div>

    `
    viewsCardContainer.appendChild(cardDiv)

    });
    
    

}
viewsData()


// data.forEach(card => {
    // const cardDiv = document.createElement('div')
    // cardDiv.classList=`card w-96 bg-gray-100 shadow-xl`
    // cardDiv.innerHTML=`
    // <figure><img class="h-[200px] w-[380px] rounded-xl p-3" src="${card.thumbnail}" /></figure>
    // <p>${card?.others.posted_date? card.others.posted_date : " no time "}</p>
    // <div class="card-body">
    // <div class="flex">
    // <img class="h-[50px] w-[50px] rounded-full" src="${card?.authors[0]?.profile_picture}">
    // <h2 class="text-black text-lg p-2 mx-4 font-bold">${card.title}</h2>
    // </div>
    //     <div class="flex">
    // <p>${card?.authors[0]?.profile_name}</p>
    
    // <img class="h-[20px]" src="${card?.authors[0]?.verified? "blue.png" : ''}">
    // </p>
    // </div>
    // <div>

    // <p>Total views:${card.others.views}</p>
    // </div>
    // </div>

    // `
    // carddataContainer.appendChild(cardDiv)

// });  