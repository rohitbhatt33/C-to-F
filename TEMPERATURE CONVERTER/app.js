const calc = () =>{
    const number = document.getElementById('temp').value;
   const tems = document.getElementById('tempd');
  const vall= tempd.options[tems.selectedIndex].value;
const ctf = (cel) => {
    let fahrenheit = Math.round((cel * 9 / 5) + 32);
   return fahrenheit;
}
const fth = (fah) => {
    let celsius = Math.round((fah - 32) * 5 / 9 );
    return celsius;
}
let  result;
if(vall =='cel'){
 result = ctf(number);
 document.getElementById('res').innerHTML = ` ${result}℉`;
}else{
    result = fth(number);
    document.getElementById('res').innerHTML = ` ${result}℃`;
}
}

