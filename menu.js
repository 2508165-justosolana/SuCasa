// Editá los precios acá y reemplazá assets/carta-2026.pdf cuando actualices la carta.
const platos = [
 {nombre:'Tallarines',detalle:'Los clásicos de nuestra cocina.',precio:8000},
 {nombre:'Canelones',detalle:'De carne o de verdura.',precio:10000},
 {nombre:'Ravioles',detalle:'Tradicionales, verdura o ricota y jamón.',precio:10000},
 {nombre:'Tortelettis',detalle:'Pollo, jamón y queso.',precio:10000},
 {nombre:'Raviolones',detalle:'Carne de ternera, pollo y acelga.',precio:10000},
 {nombre:'Lasaña tradicional',detalle:'Para disfrutar los domingos.',precio:12000}
];
const formato = new Intl.NumberFormat('es-AR');
for (const plato of platos) {
 const item=document.createElement('article'); item.className='dish';
 const contenido=document.createElement('div');
 const nombre=document.createElement('h3'); nombre.textContent=plato.nombre;
 const detalle=document.createElement('p'); detalle.textContent=plato.detalle;
 const precio=document.createElement('span'); precio.className='price'; precio.textContent='$'+formato.format(plato.precio);
 contenido.append(nombre,detalle);item.append(contenido,precio);document.querySelector('#menu-list').append(item);
}
