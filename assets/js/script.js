const aboutUs = document.querySelector(".page1")


async function getItem(){
    const response = await fetch("assets/json/data.JSON");
    const data = await response.json();
    return data;
}


async function listItem(){
    const data = await getItem();
    aboutUs.innerHTML += 
    `
    <img class="mobile-img1" src="${data.top.photo}" alt="">
    <img class="tablet-img1" src="${data.top.photo}" alt="">
    <img class="desktop-img1" src="${data.top.photo}" alt="">
    <div class="page1-content">
        <h1>${data.top.title}</h1>
        <p>${data.top.description}</p>
    </div>
    `
    const worldClass = document.querySelector(".page2")
    worldClass.innerHTML += 
    `
    <img class="mobile-img2" src="${data.middle.photo}" alt="">
    <img class="tablet-img2" src="${data.middle.photo}" alt="">
    <img class="desktop-img2" src="${data.middle.photo}" alt="">
    <div class="page2-content">
        <h1>${data.middle.title}</h1>
        <p>${data.middle.description}</p>
    </div>
    
    `

    const theRealDeal = document.querySelector(".page4")
    theRealDeal.innerHTML += 
    `
    <img class="mobile-img3" src="${data.bottom.photo}" alt="">
    <img class="tablet-img3" src="${data.bottom.photo}" alt="">
    <img class="desktop-img3" src="${data.bottom.photo}" alt="">
    <div class="page4-content">
        <h1>${data.bottom.title}</h1>
        <p>${data.bottom.description}</p>
    </div>
    `
}

listItem();