// ! Selectors
const coinContainer = document.querySelector(".coin-container");

fetch(
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
)
  .then((response) => response.json())
  .then((result) => {
    result.map((data) => addToDom(data));
  });

function addToDom(data) {
  const coinRow = document.createElement("div");
  coinRow.classList.add("coin-row");
  // * add image
  const imageElement = document.createElement("img");
  imageElement.classList.add("coin-image");
  imageElement.setAttribute("src", data.image);
  imageElement.setAttribute("alt", data.name);
  coinRow.appendChild(imageElement);

  // * add name
  const nameElement = document.createElement("h2");
  nameElement.innerText = data.name;
  coinRow.appendChild(nameElement);

  // * add symbol
  const symbolElement = document.createElement("p");
  symbolElement.classList.add("coin-symbol");
  symbolElement.innerText = data.symbol;
  coinRow.appendChild(symbolElement);

  // * add price data
  const coinData = document.createElement("div");
  coinData.classList.add("coin-data");
  // add price
  const coinPrice = document.createElement("p");
  coinPrice.classList.add("coin-price");
  coinPrice.innerText = `$${data.current_price}`;
  coinData.appendChild(coinPrice);
  // add voluom
  const coinVolume = document.createElement("p");
  coinVolume.classList.add("coin-volume");
  coinVolume.innerText = `$${data.total_volume.toLocaleString()}`;
  coinData.appendChild(coinVolume);

  coinRow.appendChild(coinData);
  coinContainer.appendChild(coinRow);
}
