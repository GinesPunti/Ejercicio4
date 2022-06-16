const pizza=[{

    nombre: "Cuatro Quesos",
    imagen: "https://www.recetasderechupete.com/wp-content/uploads/2016/11/pizza_cuatro_quesos.jpg?width=1200&enable=upscale" ,
    id: 1,
    ingredientes: "Roquefort, Muzzarela, Parmesano, Gouda ",
    precio: 800,

},{
    nombre: "Especial",
    imagen: "https://i0.wp.com/safariresto.com.ar/wp-content/uploads/2020/10/pizza-especial.jpg?w=1000&ssl=1",
    id: 2,
    ingredientes: "Muzzarela, Jamon, Morron, Aceitunas",
    precio: 850,

},{
    nombre: "Napolitana",
    imagen: "https://i.pinimg.com/originals/38/82/f3/3882f3b8021ece5e31be5ce06a6703ec.jpg",
    id: 3,
    ingredientes: "Muzzarela, Jamon, Tomate, Aceitunas",
    precio: 900,

},{
    nombre: "Fugazza",
    imagen: "https://www.recetas-argentinas.com/base/stock/Recipe/14-image/14-image_web.jpg",
    id: 4,
    ingredientes: "Cebolla, Parmesano, Aceite de Oliva",
    precio: 1000,
},{
    nombre: "Hawaiana",
    imagen: "https://imag.bonviveur.com/presentacion-principal-de-la-pizza-hawaiana.webp",
    id: 5,
    ingredientes: "Jamon, Anana, Queso",
    precio: 900,
},{
    nombre: "Pollo",
    imagen: "https://www.hola.com/imagenes/cocina/recetas/20200123158802/receta-pizza-pollo-barbacoa/0-772-922/pizza-pollo-adobe-m.jpg",
    id: 6,
    ingredientes: "Pollo, Queso, Champiñones",
    precio: 500,
}
]


const h2Tag= document.getElementById("h2")
const h4Tag= document.getElementById("h4")
const inputTag= document.getElementById("input")
const buttonTag= document.getElementById("button")
const mainContainer= document.getElementById("cont")
const contIngredientes= document.getElementById("text")
const imageContainer= document.getElementById("image")

const funcionPizzas=()=>{

    buttonTag.addEventListener("click", (e)=>{
        
        while(h2Tag.firstChild && h4Tag.firstChild){
            h2Tag.removeChild(h2Tag.firstChild)
            h4Tag.removeChild(h4Tag.firstChild)
            contIngredientes.removeChild(contIngredientes.firstChild)
            
        }

        let valorInput= inputTag.value
        valorInput= Number(valorInput)
 
        const pizzaSelected= pizza.find(pizza=> pizza.id === valorInput);
            if(pizzaSelected === undefined){
                alert("No coincide el ID con las pizzas que estan en la carta")
            }else{

                h2TagText= document.createTextNode(pizzaSelected.nombre)
                h2Tag.appendChild(h2TagText)

                h4TagText= document.createTextNode(pizzaSelected.precio)
                h4Tag.appendChild(h4TagText)

                imageContainer.src=pizzaSelected.imagen

                contIngredientesText= document.createTextNode(pizzaSelected.ingredientes)
                contIngredientes.appendChild(contIngredientesText)
            }
    } )
}


funcionPizzas() 