'use strict'

let btnEl = document.getElementById("btn");
let inputEl = document.getElementById("country");
let resultEl = document.getElementById("result");

btnEl.addEventListener("click", ()=>{
    let countryName = inputEl.value;
    let url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(url);
    fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
        // console.log(data[0]);
        // console.log(data[0].capital[0]);
        // console.log(data[0].flags.svg);
        // console.log(data[0].name.common);
        // console.log(data[0].continents[0]);
        // console.log(Object.keys(data[0].currencies)[0]);
        // console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
        // console.log(Object.values(data[0].languages).toString());
        resultEl.innerHTML = `
        <img src= "${data[0].flags.svg}" class="img">
        <h2>${data[0].name.common}</h2>
        <div class="wrapper">
        <div class="data-wrapper">
            <h4>Capital: </h4>
            <span> ${data[0].capital[0]}</span>
        </div>
        </div>
        <div class="wrapper">
        <div class="data-wrapper">
            <h4>Continent: </h4>
            <span>${data[0].continents[0]}</span>
        </div>
        </div>
        <div class="wrapper">
        <div class="data-wrapper">
            <h4>Population: </h4>
            <span>${data[0].population}</span>
        </div>
        </div>
        <div class="wrapper">
        <div class="data-wrapper">
            <h4>Currency: </h4>
            <span>${data[0].currencies[Object.keys(data[0].currencies)].name}-${Object.keys(data[0].currencies)[0]}</span>
        </div>
        </div>
        <div class="wrapper">
        <div class="data-wrapper">
            <h4>Common languages: </h4>
            <span>${Object.values(data[0].languages).toString(" ")}</span>
        </div>
        </div>
        `;
    }).catch(()=>{
        if(countryName == 0){
            resultEl.innerHTML = `<h3 style="color:#ff465a; margin-top: 2rem; text-align: center" > Please enter a country's name</h3>`
        }else{
            resultEl.innerHTML = `<h3 style="color:#ff465a;  margin-top: 2rem; text-align: center"> Please enter a VALID country's name</h3>`
        }
    })
})