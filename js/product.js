const params=new URLSearchParams(window.location.search)
let id = params.get("id");
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
    
    //je récupère la couleur et la quantité//
   let color= document.getElementById('colors').value;
   console.log(color);
       //si jai une quantité et couleur correct alors je lajoute au panier sinon je préviens lutilisateur avec un
     // message alert 
   if (color === ""){
    alert("veuillez mettre une couleur svp");

   }
   else {
    alert("couleur séléctionné");
    let quantity=document.getElementById('quantity').value;
    if (quantity>0 && quantity<= 100){
        alert("la quantité est séléctionné");
    //ajoute le canapé au panier
        let canape ={
            id:"id",
            quantity:"quantity",
            couleur:"color"
        }

        let panier2 = JSON.parse(localStorage.getItem("object"));
        console.log(panier2)
    
       //jajoute le panier au storage
        localStorage.setItem ("object",JSON.stringify(canape));

        if (panier2){panier2.push(canape)

        }
else {panier2=[];panier2.push(canape)}

        }
    
    
    
      
      //si le panier nexiste pas je le crée jajoute le canapé et je lajoute au storage
      //sinon je traduit mon panier en javascript jajoute le canapé au panier et je met le panier au storage
      
    }

    else{
        alert("la quantité n'est pas correct");
    }
   }

    




    

})


   if (items.color=== ""){
        alert("veuillez")
    }
    
    