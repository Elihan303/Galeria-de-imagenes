const grid = new Muuri(".grid", {
	layout: {

		rounding: false
	}
});

window.addEventListener("load", () => {
	grid.refreshItems().layout();
	document.getElementById("grid").classList.add("imagenes-cargadas");
	//filtrado por categoria
	const enlaces = document.querySelectorAll('#categorias a');
	enlaces.forEach((elemento) => {
		elemento.addEventListener('click', (evento) => {
			evento.preventDefault();
			enlaces.forEach((enlace) => enlace.classList.remove('activo'));
			evento.target.classList.add('activo');

			const categoria = evento.target.innerHTML.toLowerCase();
			console.log(categoria);
			if (categoria === 'inicio') {
				grid.filter('[data-categoria]')
			} else {
				grid.filter(`[data-categoria="${categoria}"]`);
			}
		});
	});

	//evemto img
	const suponer = document.getElementById("suponer");
	document.querySelectorAll(".grid .item img").forEach((elemento) => {
		elemento.addEventListener('click', () => {
			const ruta = elemento.getAttribute("src");
			const descripcion = elemento.parentNode.parentNode.dataset.descripcion;
			console.log(descripcion);

			suponer.classList.add('activo');
			document.querySelector('#suponer img').src = ruta;
			document.querySelector('#suponer .descripcion').innerHTML = descripcion;
		});
	});

	// evento del boton de cerrar
	const btn= document.getElementById("btn-cerrar");
	btn.addEventListener('click', () => {
		suponer.classList.remove('activo');
	});


	suponer.addEventListener('click', (evento) => {
		if (evento.target.id === 'suponer') { suponer.classList.remove('activo') };
	});





})