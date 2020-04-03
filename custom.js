fetch("https://pomber.github.io/covid19/timeseries.json")
  .then(response => response.json())
  .then(data => getUpdate(data));

function getUpdate(data) {
  document.getElementById("search").addEventListener("click", () => {
    let countryI = document
      .getElementById("getCountry")
      .value.trim()
      .replace(/[&\/\\#,+()$~%.'":*?<>{}-]/g, "");

    let country = countryI
      .toLowerCase()
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.substring(1))
      .join(" ");

    if (data[country]) {
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
    } else {
      alert(`${country} is not a valid name.
              Please try again with a valid name`);
    }
  });
}

var ALERT_TITLE = "Oops!";
var ALERT_BUTTON_TEXT = "Ok";

if (document.getElementById) {
  window.alert = function(txt) {
    createCustomAlert(txt);
  };
}

function createCustomAlert(txt) {
  d = document;

  if (d.getElementById("modalContainer")) return;

  mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
  mObj.id = "modalContainer";
  mObj.style.height = d.documentElement.scrollHeight + "px";

  alertObj = mObj.appendChild(d.createElement("div"));
  alertObj.id = "alertBox";
  if (d.all && !window.opera)
    alertObj.style.top = document.documentElement.scrollTop + "px";
  alertObj.style.left =
    (d.documentElement.scrollWidth - alertObj.offsetWidth) / 2 + "px";
  alertObj.style.visiblity = "visible";

  h1 = alertObj.appendChild(d.createElement("h1"));
  h1.appendChild(d.createTextNode(ALERT_TITLE));

  msg = alertObj.appendChild(d.createElement("p"));
  //msg.appendChild(d.createTextNode(txt));
  msg.innerHTML = txt;

  btn = alertObj.appendChild(d.createElement("a"));
  btn.id = "closeBtn";
  btn.appendChild(d.createTextNode(ALERT_BUTTON_TEXT));
  btn.href = "#";
  btn.focus();
  btn.onclick = function() {
    removeCustomAlert();
    return false;
  };

  alertObj.style.display = "block";
}

function removeCustomAlert() {
  document
    .getElementsByTagName("body")[0]
    .removeChild(document.getElementById("modalContainer"));
}
