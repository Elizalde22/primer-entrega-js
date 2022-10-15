menu()
function menu() {
    let compras = 0
    let sumaProductos = ""
    let bandera = true
    while (bandera) {
        let listaMenu = parseInt(prompt(`Seleccione el/los producto que quiera comprar
        1. Alfajor vegano $200
        2. Granola $400
        3. Mix frutos secos $500
        4. Leche de almendras $550
        5. Pan integral $490.
        0. Salir o finalizar compra`))
        if (listaMenu == 1) {
            alert("Usted selecciono Alfajor vegano")
            sumaProductos += `alfajor vegano`
            compras += 200

        } else if (listaMenu == 2) {
            alert("Usted selecciono granola")
            sumaProductos += `Granola`
            compras += 400

        } else if (listaMenu == 3) {
            alert("Usted selecciono Mix frutos secos")
            sumaProductos += `Mix frutos secos`
            compras += 500

        } else if (listaMenu == 4) {
            alert("Usted selecciono Leche de almendras")
            sumaProductos += `Leche de almendras`
            compras += 550

        } else if (listaMenu == 5) {
            alert("Usted selecciono Pan integral")
            sumaProductos += `Pan integral`
            compras += 490
        } else if (listaMenu == 0) {
            bandera = false
            if (compras != 0) {
                alert(`El total de su compra es de $${compras}. ¡Gracias! vuelvas prontos como diria apu nahasapeemapetilon`)
            } else {
                alert(`no quiso comprar productos`)
            }
        } else {
            alert("Opción invalida, intente nuevamente")
        }
    }
}