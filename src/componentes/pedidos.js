import { bd } from "../bd"

export const pedidos = {
    template: //html

    `
    <div class="container mt-3 p-5 border shadow-lg ">
    <h1 class="text-center mb-5 ">----- Vista usuario -----</h1>
    <div class="row">
      
      <div class="col-6">
        <h3>Grupo</h3>
        <label for="nombreGrupo" class="label-control">Nombre del grupo:</label>
        <input type="text" class="form-control mt-2" placeholder ="Borrachos de DAW2">
        <label for="numeroMesa" class="label-control">Mesa numero</label>
        <input type="number" class="form-control mt-2" placeholder ="0">
      
        <h3 class="mt-5">Haz tu pedido</h3>
        <div class="d-flex gap-3 ">
          <select name="cervezas" id="cervezas" class="form-control">n>
          </select>
        
          <input type="number" value="0" class="form-control">
        </div>
        <button class="btn btn-success mt-4 w-100">¡Enviar pedido!</button>
      </div>
      <div class="col-6 border ">
        <div class="p-3 d-flex">
          <div class="w-50 Imagen">
            <img src="https://static.damm.com/sites/default/files/config-page/estrella_header_logo/estrella-damm_0.png" alt="" class="w-100">
          </div>
          <div>
            <h4 id="nombre">Estrella Galicia</h4>
            <p id="descripcion">Cerveza suave y equilibrada con un sabor ligeramente amargo y aroma a malta.</p>
          </div>
          

        </div>
      </div>
    </div>
    
    `,

    script: () => {

        console.log("hola")
        const select = document.getElementById("cervezas")
        const option = document.createElement("option")
        option.value = ""
        option.innerHTML = "Selecciona qué birra quieres"
        select.appendChild(option)
        bd.forEach(obj => {
            const option = document.createElement("option")
            option.innerHTML = obj.nombre
            select.appendChild(option)
          })

        const nombre = document.getElementById("nombre")
        const descripcion = document.getElementById("descripcion")
        const imagen = document.getElementById("imagen")
        bd.forEach(element => {
            nombre.textContent = `${element.nombre}`
            descripcion.textContent = `${element.descripcion}`
            imagen.textContent = `${element.imagen}`
        });
    }
}