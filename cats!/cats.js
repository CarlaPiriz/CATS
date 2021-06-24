const CAT_URL = "https://aws.random.cat/meow"; //API

const kitties = document.querySelector(".cats-box");

function addNewCat() {
  const promise = fetch(CAT_URL);
  promise
    .then(function(response) {
      const processingPromise = response.json();
      return processingPromise;
    })
    .then(function(processedResponse) {
      const img = document.createElement("img");
      img.src = processedResponse.file;
      img.alt = "Cute gatito!";
      kitties.appendChild(img);
    });
}

document.querySelector(".add-cat").addEventListener("click", addNewCat);
