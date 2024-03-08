import { header } from "./componentes/header"
import { pedidos } from "./componentes/pedidos"
import { tablaPedidos } from "./componentes/tablaPedidos"

document.querySelector('header').innerHTML = header.template
document.querySelector('main').innerHTML = pedidos.template
document.querySelector('footer').innerHTML = tablaPedidos.template

pedidos.script()