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
  coinContainer.appendChild(coinRow);
}
