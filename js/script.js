//fetch: appel de l'api,
//premier then : récuppération de l'api ,response.json permet de renvoyer une promise avec uniquemnt les produits
//deuxième then : récupération des produits + appel de la fonction display products
fetch('http://localhost:3000/api/products') 

.then((response)=>response.json()).then((products)=>displayProducts(products))

let items=document.getElementById('items')

function displayProducts(products){
console.log(products)
for(let i=0;i<products.length;i++)
{
    console.log(products[i].name)
    items.innerHTML+=` <a href="./product.html?id=${products[i]._id}">
    <article>
      <img src="${products[i].imageUrl}" alt="${products[i].altTxt}">
      <h3 class="productName">${products[i].name}</h3>
      <p class="productDescription">${products[i].description}</p>
    </article>
  </a>`
}

}