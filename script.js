let d = document.getElementById('canvas');
let lienzo = d.getContext('2d');
let lineas = 30;
let l = 0;
let yi, xf;
let xi, yf;


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

while( l < lineas ) {
    
    yi = 10 * l;
    xf = 10 * (l + 1);
    dibujarLinea('grey', 0, yi, xf, 300);
    l = l + 1;

}


for (let i = 0; i < lineas; i++) {
    
    xi = 10 * i;
    yf = 10 * (i + 1);
    dibujarLinea('blue', 300, yf, xi, 0);
    
}