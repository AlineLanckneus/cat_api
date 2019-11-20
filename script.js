//get data from TheCatApi
const apiKey = "76f64ce4-cec0-4f3e-ac9d-08036d228a38";
const url = "https://api.thecatapi.com/v1/images/search?";

async function catGenerator(){
    const response = await fetch(url);
       
    const data = await response.json();
    console.log(data[0]['url']);

    
};

document.getElementById("run").addEventListener("click", function(){
    catGenerator(url);
});