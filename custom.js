fetch("https://pomber.github.io/covid19/timeseries.json")
  .then(response => response.json())
  .then(data => getUpdate(data));


function getUpdate(data) {
  document.getElementById("search").addEventListener("click", () => {
    let countryI = document.getElementById("getCountry").value.trim();

    let country = countryI
      .toLowerCase()
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.substring(1))
      .join(" ");

    data[country].forEach(({ date, confirmed, recovered, deaths }) => {
      const ul = document.getElementById("container-li");
      const liList = document.createElement("li");
      liList.innerText = `Date: ${date} 
                Active cases: ${confirmed} 
                Recovered: ${recovered} 
                Deaths: ${deaths}
                
                `;
      ul.appendChild(liList);
    });
  });
}
