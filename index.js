var xhr = new XMLHttpRequest();
xhr.open('GET', "https://rickandmortyapi.com/api/character")
xhr.send()
xhr.onload = function () {
    if (xhr.status == 200) {
        var data = JSON.parse(xhr.response);

        var info = data.results
        window.localStorage.setItem("data", JSON.stringify(info))
        var dataa = localStorage.getItem('data')
        var datass = JSON.parse(dataa)
        console.log(datass)
        showData(datass)
    }
    else {
        console.log("Error Code is:" + xhr.status)
    }
}
function showData(datass) {
    var showElement = document.getElementById('show');
    datass.forEach(element => {
        var div1 = document.createElement('div')
        div1.setAttribute('class', 'card');
        div1.style.borderRadius = "25px"

        var x = document.createElement('img')
        div1.setAttribute('class', 'col-4')
        x.setAttribute("src", element.image);
        x.style.height = "200px"
        x.style.width = "200px"
        x.style.borderRadius = "50px"
        x.style.border = "5px solid blue"
        x.style.boxShadow = "10px 10px lightBlue"
        
        div1.appendChild(x);
        var div2 = document.createElement('div')
        var h5 = document.createElement('h5')
        var para = document.createElement('p')
        div2.innerHTML = `Name:` + element.name
        h5.innerHTML = `Gender:` + element.gender
        para.innerHTML = `Species:` + element.species
        x.setAttribute('class', 'card-img-top');
        div2.setAttribute('class', 'card-body')
        h5.setAttribute('class', 'card-title');
        para.setAttribute('class', 'card-text');
        div1.appendChild(div2);
        div2.appendChild(h5);
        div2.appendChild(para);
        showElement.appendChild(div1);
    })
}