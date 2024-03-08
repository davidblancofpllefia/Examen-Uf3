import { header } from "./src/componentes/header"
import { pedidos } from "./src/componentes/pedidos"
import { tablaPedidos } from "./src/componentes/tablaPedidos"

document.querySelector('header').innerHTML = header.template
document.querySelector('main').innerHTML = pedidos.template
document.querySelector('footer').innerHTML = tablaPedidos.template

pedidos.script()