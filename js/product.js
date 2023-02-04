const params=new URLSearchParams(window.location.search)

console.log(params.get("id"))

fetch ('http://localhost:3000/api/products/'+params.get("id")) .then((response)=>response.json()).then((products)=>displayProducts(products))

function displayProducts (products)
{

    let items=document.getElementById('description')

    items.innerHTML=products.description

  let itemsprix=document.getElementById('price')

    itemsprix.innerHTML=products.price

    let itemsname=document.getElementById('title')

    itemsname.innerHTML=products.name

    let itemscolor=document.getElementById('colors')


for (let i=0;i<products.colors.length;i++){
    itemscolor.innerHTML+=
    `<option value="${products.colors[i]}">${products.colors[i]}</option>`


}
    let itemsimage=document.getElementsByClassName("item__img")[0]
    itemsimage.innerHTML=
    `<img src="${products.imageUrl}" alt="${products.altTxt}">`


    
    console.log(products)



}

document.getElementById('addToCart').addEventListener("click",()=>{
    console.log("click");
    //je récupère la couleur et la quantité//
    //si jai une quantité et couleur correct alors je lajoute au panier sinon je préviens lutilisateur avec un
   // message alert 
   //jajoute le panier au storage
    localStorage.setItem("object","bonjour" );
})



