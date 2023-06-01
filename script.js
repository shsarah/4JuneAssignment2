const visitBtn=document.getElementById("visit_btn");
const content=document.getElementById("content");

let url="https://api.github.com/users/";
let goToUrl="https://github.com/shsarah";


async function fetchData(url){
    const response = await fetch(url);
    var jsonResponse = await response.json();
    return jsonResponse;
}


async function renderCards() {
    let jsonResponse = await fetchData(`${url}shsarah`);
    let card = document.createElement("div");
    card.setAttribute("class", "box");
      card.innerHTML += `
        <div class="cover_img">
                    <img src="${jsonResponse.avatar_url}">
                    <div class="profile_img">
                        <img src="${jsonResponse.avatar_url}">
                    </div>
                </div>
                <i class="fa-solid fa-ellipsis-vertical fa-2xl"></i>
                <h2 id="fullname">${jsonResponse.name}</h2>
                <span id="username">${jsonResponse.login}</span>
                <button id="visit_btn" onclick="handleGoToProfile()">Visit</button>
                <div id="bio">
                    <p>${jsonResponse.bio}
                    </p>
                </div>
        `;
        content.appendChild(card);

};

function handleGoToProfile(){
    window.open(`${goToUrl}`, "_blank");
}


renderCards()