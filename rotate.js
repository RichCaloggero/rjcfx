function rotate (l, r, rotation) {
let spl0 = l;
let spl1 = r;
const rot = rotation * Math.PI/180; // degrees to radions
const s0 = Math.sign(spl0);
const s1 = Math.sign(spl1);
//let angle = Math.atan( spl0 / spl1 );
let angle = Math.atan( spl1 / spl0 );

//if ((s0 === 1 && s1 === -1) || (s0 == -1 && s1 == -1))  angle += Math.PI;
if ((s0 === 1 && s1 === -1) || (s0 == 1 && s1 == 1))  angle += Math.PI;
else if (s0 == -1 && s1 == 1) angle += (2*Math.PI);
else if (spl1 === 0) {
if (spl0 > 0) angle = Math.PI/2; else angle = 3*Math.PI/2;
} else if (spl0 === 0) {
if (spl1 > 0) angle = 0; else angle = Math.PI;
} // if

angle -= rot;

const radius = Math.sqrt((spl0*spl0) + (spl1*spl1) ) ;
spl0 = Math.sin(angle)*radius;
spl1 = Math.cos(angle)*radius;

return [spl0, spl1];
} // rotate

