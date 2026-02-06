console.log("Hello from start.js");
//1.
const source =
  "https://gist.githubusercontent.com/mapoto/515827c73f7f60a14cf2914f0cca16f0/raw/c41bc850bc989cadf6a1caa394ab12fce105d59e/countries.json";

const body = document.querySelector("body");
let countryList = document.createElement("ul");
body.appendChild(countryList);

fetch(source)
  .then((response) => response.json())
  .then((data) => {
    data.map((country) => {
      console.log(country.name);
      let countryEle = document.createElement("li");
      countryEle.textContent = country.name;
      countryList.appendChild(countryEle);
    });
  })
  .catch((error) => {
    console.error(error);
  });

//2.
const imgUrl = "https://avatars.githubusercontent.com/u/38219434?v=4";

fetch(imgUrl)
  .then((response) => response.blob())
  .then((blob) => {
    let imgElement = document.createElement("img");
    let imgURL = URL.createObjectURL(blob);
    imgElement.src = imgURL;
    document.body.appendChild(imgElement);
  })
  .catch((error) => console.error("Error fetching image:", error));
