'use strict';

const velkyKruh = new Kruh(50);
const oko = new Kruh(11);
const usta = new Obd(20, 5);

const obsah = velkyKruh.obsah() - usta.obsah - oko.obsah() * 2;
document.write(´Obsah zlute plochy je ${obsah} cm <sup>´)