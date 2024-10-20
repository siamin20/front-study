const root = document.getElementById("root");

fetch('https://jsonplaceholder.typicode.com/comments')

 .then((response) => response.json())

 .then((json) => render(json));

function render(data) {
  data.forEach((item) => {   
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    h2.textContent = item.name;
    h3.textContent = item.body;
    root.appendChild(h2);
    root.appendChild(h3);
  });   
}