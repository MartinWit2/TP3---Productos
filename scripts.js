    const botonSearch = document.getElementById("buscar");
    const filtruch = document.getElementById("filtro");
const traerProducto = (url) => {

    axios.get(url)
        .then(res => {
        const productosUl = document.getElementById("productos");
        const totalDiv = document.getElementById("total");
        
        totalDiv.innerHTML = `Total: ${ res.data.limit}`;
        res.data.products.forEach(element => {
            const unLi = document.createElement("li");

            unLi.innerHTML = `<b> ${element.title} </b>`;

            productosUl.appendChild(unLi);

            
        });

      //  document.getElementById("verMas").onclick = () => traerProducto(res.data.next);

        console.log(res);
        })
}

traerProducto("https://dummyjson.com/products");
botonSearch.onclick()
{
    console.log(filtruch.value);
    axios.get('https://dummyjson.com/products/search?q='+ filtruch.value)
    products.forEach(element => {
        if (element) {
            
        }
    });
}