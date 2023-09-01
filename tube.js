const phoneData = async() =>{
    const res = await fetch("https://openapi.programming-hero.com/api/videos/categories")
    const data = await res.json();
    const tubeData = data.data;
    // console.log(tubeData);
    // console.log(tubeData.slice(0,1))
    const tabBoxContainer = document.getElementById("tabbtn")
    tubeData.forEach(tabData => {
    //    for div 4

        // console.log(tabData)
        // console.log(tabData.category_id);
        const div = document.createElement("div")
        div.innerHTML=`
        <a onclick="getNews('${tabData.category_id}')" class="tab bg-violet-700 text-white font-bold">${tabData.category}</a> 

        `
        tabBoxContainer.appendChild(div)
        const noVideosContainer = document.getElementById('novideos')
    noVideosContainer.innerHTML=" ";
        allDataNews()
    });


}
// dynamic Htmln 

const getNews = async(category_id) =>{
const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${category_id}`)
const data =  await res.json();
const cardData = data.data; 

console.log(cardData.length)
const carddataContainer = document.getElementById("cardDatabox")
carddataContainer.innerHTML=" ";
const noVideosContainer = document.getElementById('novideos')
    noVideosContainer.innerHTML=" ";
    const mainBoxContainer = document.getElementById("mainCardDatabox")
    mainBoxContainer.innerHTML=" ";
    const viewsCardContainer = document.getElementById("viewsCardBox")
    viewsCardContainer.innerHTML=" ";

    if(cardData.length == 0){

    const div = document.createElement('div');
     div.innerHTML=`
     <div class=" block  bg-white"><img class=" block mx-auto h-[250px] "
      src="image/Icon.png">
      <p class="p-2 text-3xl text-center ">Opps! There have no Content for show</p>
      </div>
    `
    noVideosContainer.appendChild(div);
   
}


// for each
cardData.forEach(card => {
    
    // const views = card.others.views;
    // console.log(views)

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
    carddataContainer.appendChild(cardDiv)

});  


}

phoneData()


const allDataNews = async()=>{
    const res = await fetch(" https://openapi.programming-hero.com/api/videos/category/1000");
    const data = await res.json();
    dataNews = data.data;
    // console.log(dataNews)
    const mainBoxContainer = document.getElementById("mainCardDatabox")
    mainBoxContainer.innerHTML=" ";
    // for cach
    dataNews.forEach(news => {
        
        const continerBox = document.createElement('div')
        continerBox.innerHTML=`
        <div class=" bg-gray-300 p-1 rounded-lg h-[400px]">
        <figure><img class="h-[200px] w-[380px] rounded-xl p-3" src="${news.thumbnail}" /></figure>
    <p>${news.others.posted_date? news.others.posted_date : " no time "}</p>
    <div class="card-body  h-[160px] w-[380px] mx-auto">
    <div class="flex">
    <img class="h-[50px] w-[50px] rounded-full" src="${news?.authors[0]?.profile_picture}">
    <h2 class="text-black text-lg p-2 mx-4 font-bold">${news.title}</h2>
    </div>
        <div class="flex">
    <p>${news?.authors[0]?.profile_name}</p>
    
    <img class="h-[20px]" src="${news?.authors[0]?.verified? "blue.png" : ''}">
    </p>
    </div>
    <div>
    <p>Total views:${news.others.views}</p>
    </div>
    </div>
        
        </div>
 

    `
        mainBoxContainer.appendChild(continerBox);
    });

}
