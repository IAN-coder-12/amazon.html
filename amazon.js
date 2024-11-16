const btnDepartamentos = document.getElementById("btn-departamentos"),
      btnCerrarMenu = document.getElementById('btn-menu-cerrar'),
      subcategorias =  document.querySelector('#grid .contenedor-subcategorias'),
      grid = document.getElementById("grid"),
      contenedorEnlacesNav = document.querySelector('#menu .contenedor-enlaces-nav'),
      esDispositivoMovil = () => window.innerWidth <= 800;

btnDepartamentos.addEventListener('mouseover', () => {
    if(!esDispositivoMovil()){
        grid.classList.add('activo');
    }
});

grid.addEventListener('mouseleave', () => {
    if(!esDispositivoMovil()){
        grid.classList.remove('activo');
    }
});

document.querySelectorAll('#menu .categorias a').forEach((elemento)=>{
    elemento.addEventListener('mouseenter', (e)=> {
        if(!esDispositivoMovil()){
        document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
            categoria.classList.remove('activo')
            if(categoria.dataset.categoria == e.target.dataset.categoria){
                categoria.classList.add('activo');

                }
            });
        };
    });
});

/* EventListeners para Responsive Design */
document.querySelector('#btn-menu-barras').addEventListener('click', (e) =>{
    e.preventDefault();
    if(contenedorEnlacesNav.classList.contains('activo')){
        contenedorEnlacesNav.classList.remove('activo');
        document.querySelector('body').style.overflow = 'visible';
    }else{
        contenedorEnlacesNav.classList.add('activo');
        document.querySelector('body').style.overflow = 'hidden';
    }
}
);

/* Mostrar menu en dispositivo movil */

btnDepartamentos.addEventListener('click', (e) =>{
    e.preventDefault();
    grid.classList.add('activo');
    btnCerrarMenu.classList.add('activo');
});

/* Boton Regresar */

document.querySelector('#grid .categorias .btn-regresar').addEventListener('click', (e)=>{
    e.preventDefault();
    grid.classList.remove('activo');
    btnCerrarMenu.classList.remove('activo');
});

/* Mostar Subcategorias*/
document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
    elemento.addEventListener('click', (e) => {
        if(esDispositivoMovil()){
            subcategorias.classList.add('activo');
            document.querySelectorAll('#menu .subcategoria').forEach((categoria)=>{
                categoria.classList.remove('activo');
                if(categoria.dataset.categoria == e.target.dataset.categoria){
                    categoria.classList.add('activo');
                }
            });
        }
    });
});

/* Regresar todos los botones */
document.querySelectorAll('#grid .contenedor-subcategorias .btn-regresar').forEach((boton)=> {
    boton.addEventListener('click', (e)=>{
        e.preventDefault();
        subcategorias.classList.remove('activo');
    })

});

btnCerrarMenu.addEventListener('click', (e)=>{
    e.preventDefault();
    document.querySelectorAll('#menu .activo').forEach((elemento)=> {
        elemento.classList.remove('activo');
    });
    document.querySelector('body').style.overflow = 'visible';
});