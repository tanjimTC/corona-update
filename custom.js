fetch("https://pomber.github.io/covid19/timeseries.json")
            .then(response => response.json())
            .then(data => getUpdate(data))

        function getUpdate(data) {
            document.getElementById('search').addEventListener('click', () => {
                const country = document.getElementById('getCountry').value;
                data[country].forEach(({ date, confirmed, recovered, deaths, newline }) => {
                    const ul = document.getElementById('container-li');
                    const liList = document.createElement('li');
                    liList.innerText = (`Date: ${date} 
                Active cases: ${confirmed} 
                Recovered: ${recovered} 
                Deaths: ${deaths}
                
                `);
                    ul.appendChild(liList);
                });
            })


        }