let selectBrand = document.getElementById('brand');
let selectColor = document.getElementById('color');
const btnFilter = document.getElementById('btn-filter');
let cardConteiner = document.getElementById('cardsContainer');

let trucks = [
    {
        id:0,
        marca: "Iveco",
        color: "Blanco",
        precio: 12000000,
        picture:"./assets/images/iveco.jpg"
    },
    {
        id:1,
        marca: "Scania",
        color: "Negro",
        precio: 14000000,
        picture:"./assets/images/scania.png"
    },
    {
        id:2,
        marca: "Isuzu",
        color: "Azul",
        precio: 13000000,
        picture:"./assets/images/isuzu.png"
    },
    {
        id:3,
        marca: "Mercedes",
        color: "Amarillo",
        precio: 16000000,
        picture:"./assets/images/mercedes.png"
    },
    {
        id:4,
        marca: "Daf",
        color: "Azul",
        precio: 15000000,
        picture:"./assets/images/daf.jpg"
    },
    {
        id:5,
        marca: "Renault",
        color: "Amarillo",
        precio: 12000000,
        picture:"./assets/images/renault.jpg"
    },
    {
        id:6,
        marca: "Iveco",
        color: "Negro",
        precio: 12000000,
        picture:"./assets/images/iveco-negro.png"
    },
    {
        id:7,
        marca: "Scania",
        color: "Rojo",
        precio: 12000000,
        picture:"./assets/images/scania-rojo.png"
    },
];

let err = ""

const filterAnd = (brand, color)=> {
    let filtroAnd = trucks.filter(truck => truck.marca.toUpperCase() == brand.toUpperCase() && truck.color.toUpperCase() == color.toUpperCase())
    err = "";
    cardConteiner.innerHTML = "";
    if(filtroAnd.length === 0){
        error()
        return;
    } else{
    filtroAnd.map((el) => render(err, el.marca, el.color, el.precio, el.picture)).join("");
    }

}

const error = () => {

    render(err = "No se encontraron coincidencias :(")

}

const filterOr = (brand, color) => {
    
    let filtroOr = trucks.filter(truck => truck.marca.toUpperCase() == brand.toUpperCase() || truck.color.toUpperCase() == color.toUpperCase())

    if (!brand || !color){
        err = "";
        cardConteiner.innerHTML = "";
        filtroOr.map((el) => render(err, el.marca, el.color, el.precio, el.picture)).join("");
    }else {
        filterAnd(brand, color);
    }

}

const render = (err, filtroBrand, filtroColor, precio, pic) => {
    
    if (err){
        cardConteiner.innerHTML = 
        `
            <div class="card">
                <h2>${err}</h2>
            </div>
        `
    }else{
     cardConteiner.innerHTML += 
    `
        <div class="card">
            <div class="pic_container"><img src="${pic}"></div>
            <h2>${err}${filtroBrand}</h2>
            <h4>Color: ${filtroColor}</h4>
            <h3>Precio: $${precio}</h3>
        </div>
    `
    }
    
}


const init = () => {
    
    trucks.map((el) => render(err="", el.marca, el.color, el.precio, el.picture)).join("");
    
    btnFilter.addEventListener('click', function(e){
        e.preventDefault();
        let marca = selectBrand.options[selectBrand.selectedIndex].textContent;
        let color = selectColor.options[selectColor.selectedIndex].textContent;
        if (!marca && !color){
            error(); 
        }else{
         filterOr(marca, color)   
        }
        
    })
}

init();




