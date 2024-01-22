async function Prodect() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  const products = data.products;
  console.log(response);

  const result = products.map(function (ele) {
    return `

    <h1>${ele.brand}</h1>
    <h2>${ele.title}</h2>
      <img src=${ele.images} />
      <h3>${ele.category}</h3>
      <h3>${ele.price}</h3>
      
    `;
  }).join('');

  document.querySelector(".prodect").innerHTML = result; 

}

Prodect();