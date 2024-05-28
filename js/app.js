console.log("Hello Search App");

const apiKey = "XqLCKiILr7h_M0phaCJW-PVdrmDwG7FFRkGwd2lfIMo";

const form = document.querySelector("form");
const input = document.querySelector("#search-input");
const results = document.querySelector(".results");
const showBtn = document.querySelector("#show-More");
let page = 1;
let serachInput;
async function searchImag() {
  serachInput = input.value;
  if (serachInput != "") {
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${serachInput}&client_id=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    const apidata = data.results;

    if (page === 1) {
      results.innerHTML = "";
    }
    apidata.map((ele) => {
      const cardWrapper = document.createElement("div");
      cardWrapper.classList.add("result");
      const images = document.createElement("img");
      images.classList.add("result-img");
      images.src = ele.urls.small;
      images.alt = ele.alt_description;
      const imageLimk = document.createElement("a");
      imageLimk.href = ele.links.html;
      imageLimk.target = "_blank";
      imageLimk.textContent = ele.alt_description;

      cardWrapper.appendChild(images);
      cardWrapper.appendChild(imageLimk);
      // cardWrapper.appendChild(cardWrapper);
      results.appendChild(cardWrapper);
    });

    page++;
    if (page > 1) {
      showBtn.style.display = "block";
    }

    // input.value = "";
  } else {
    alert("Please Enter Your data");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImag();
      // input.value = "";
});

showBtn.addEventListener("click", () => {
  searchImag();
});
