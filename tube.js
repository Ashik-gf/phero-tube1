let allData = [];
const phoneData = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await res.json();
  const tubeData = data.data;

  const tabBoxContainer = document.getElementById("tabbtn");
  tubeData.forEach((tabData) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <a onclick="getNews('${tabData.category_id}')" class="tab hover:bg-stone-950  bg-violet-700 text-white font-bold">${tabData.category}</a> 
        `;
    tabBoxContainer.appendChild(div);
    const noVideosContainer = document.getElementById("novideos");
    noVideosContainer.innerHTML = " ";
    allDataNews();
  });
};

const getNews = async (category_id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${category_id}`
  );
  const data = await res.json();
  const cardData = data.data;

  console.log(cardData.length);
  const carddataContainer = document.getElementById("cardDatabox");
  carddataContainer.innerHTML = " ";
  const noVideosContainer = document.getElementById("novideos");
  noVideosContainer.innerHTML = " ";
  const mainBoxContainer = document.getElementById("mainCardDatabox");
  mainBoxContainer.innerHTML = " ";
  const viewsCardContainer = document.getElementById("viewsCardBox");
  viewsCardContainer.innerHTML = " ";

  allData = [...cardData];

  if (cardData.length == 0) {
    const div = document.createElement("div");
    div.innerHTML = `
     <div class=" block  bg-white"><img class=" block mx-auto h-[250px] "
      src="image/Icon.png">
      <p class="p-2 text-3xl text-center ">Opps! There have no Content for show</p>
      </div>
    `;
    noVideosContainer.appendChild(div);
  }

  // for each
  cardData.forEach((card) => {
    // const views = card.others.views;
    // console.log(views)

    const cardDiv = document.createElement("div");
    cardDiv.classList = `card w-96 bg-gray-100 shadow-xl`;
    cardDiv.innerHTML = `
    <div class="h-[360px]">
    <figure><img class="h-[200px] w-[380px] rounded-xl p-3" src="${
      card.thumbnail
    }" /></figure>
    <p class=" text-white flex justify-end -my-12 w-[320px] ml-4">${
      card.others.posted_date
        ? showTime(card.others.posted_date)
        : " Uploded Now "
    }</p>
    <div class="card-body p-4 my-20 ">
    <div class="flex">
    <img class="h-[50px] w-[50px] rounded-full" src="${
      card?.authors[0]?.profile_picture
    }">
    <h2 class="text-black text-lg p-2 mx-4 font-bold">${card.title}</h2>
    </div>
        <div class="flex">
    <p class="text-black">${card?.authors[0]?.profile_name}</p>
    
    <img class="h-[20px]" src="${card?.authors[0]?.verified ? "blue.png" : ""}">
    </p>
    </div>
    <div>

    <p class="text-black">Total views:${card.others.views}</p>
    </div>
    </div>
    </div>

    `;
    carddataContainer.appendChild(cardDiv);
  });
};

phoneData();

const allDataNews = async () => {
  const res = await fetch(
    " https://openapi.programming-hero.com/api/videos/category/1000"
  );
  const data = await res.json();
  allData = data.data;
  displayData();
};

function showTime(sec) {
  const hours = (sec / 3600).toFixed();
  const remainingSecound = sec % 3600;
  const minutes = (remainingSecound / 60).toFixed();
  const time = `${hours} hrs ${minutes} min ago`;
  return time;
}
function shortBy() {
  console.log(allData);
  if (!allData.length) {
    return;
  }
  const sorted = allData.sort(
    (a, b) =>
      Number(b.others.views.replace("K", "")) -
      Number(a.others.views.replace("K", ""))
  );
  allData = [...sorted];
  displayData();
}
function displayData() {
  const carddataContainer = document.getElementById("cardDatabox");
  carddataContainer.innerHTML = " ";
  const noVideosContainer = document.getElementById("novideos");
  noVideosContainer.innerHTML = " ";
  const mainBoxContainer = document.getElementById("mainCardDatabox");
  mainBoxContainer.innerHTML = " ";
  const viewsCardContainer = document.getElementById("viewsCardBox");
  viewsCardContainer.innerHTML = " ";
  // for cach
  allData.forEach((news) => {
    const continerBox = document.createElement("div");
    continerBox.innerHTML = `
        <div class=" bg-gray-300 p-1 rounded-lg h-[360px]">
        <figure><img class="h-[200px] w-[380px] rounded-xl p-3" src="${
          news.thumbnail
        }" /></figure>
    <p class="bg-gray-500 text-white flex justify-end -my-12 w-[320px] ml-20">${
      news.others.posted_date
        ? showTime(news.others.posted_date)
        : " Updated Now "
    }</p>
    <div class="card-body my-12 h-[160px] w-[380px] mx-auto">
    <div class="flex">
    <img class="h-[50px] w-[50px] rounded-full" src="${
      news?.authors[0]?.profile_picture
    }">
    <h2 class="text-black text-lg p-2 mx-4 font-bold">${news.title}</h2>
    </div>
        <div class="flex">
    <p class="text-black">${news?.authors[0]?.profile_name}</p>
    
    <img class="h-[20px] " src="${
      news?.authors[0]?.verified ? "blue.png" : ""
    }">
    </p>
    </div>
    <div>
    <p class="text-black">Total views:${news.others.views}</p>
    </div>
    </div>
        
        </div>
 

    `;
    mainBoxContainer.appendChild(continerBox);
  });
}

function newTab() {
  window.open("./blog.html", "_blank");
}
