const phoneData = async() =>{
    const res = await fetch("https://openapi.programming-hero.com/api/videos/categories")
    const data = await res.json();
    const tubeData = data.data;
    // console.log(tubeData);
    const tabBoxContainer = document.getElementById("tabbtn")
    tubeData.forEach(tabData => {
        console.log(tabData.category_id);
        const div = document.createElement("div")
        div.innerHTML=`
        <a onclick="getNews('${tabData.category_id}')" class="tab bg-violet-700 text-white font-bold">${tabData.category}</a> 

        `
        tabBoxContainer.appendChild(div)
    });


}
const getNews = async(category_id) =>{
const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${category_id}`)
const data =  await res.json();
const cardData = data.data; 
const carddataContainer = document.getElementById("cardDatabox")
carddataContainer.innerHTML=" ";
cardData.forEach(card => {
    console.log(card.others.views)
    const cardDiv = document.createElement('div')
    cardDiv.classList=`card w-96 bg-gray-100 shadow-xl`
    cardDiv.innerHTML=`
    <figure><img class="h-[200px] w-[300px] rounded-xl p-3" src="${card.thumbnail}" /></figure>
    <div class="card-body">
    <div class="flex">
    <img class="h-[50px] w-[50px] rounded-full" src="${card?.authors[0]?.profile_picture}">
    <h2 class="text-black text-lg p-2 mx-4 font-bold">${card.title}</h2>
    </div>
        <div class="flex">
    <p>${card?.authors[0]?.profile_name}</p>
    
    <img src="image/fi_10629607.svg">
    </p>
    </div>
    <div>
    <p>Total views:${card.others.views}</p>
    </div>
    </div>

    `
    carddataContainer.appendChild(cardDiv)

});  
// console.log(cardData)
}

phoneData()