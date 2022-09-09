let hero;
let native;
let destination;

hero = ['Ivan'];
native = ['York','Of'];
destination = ['Poltava','In'];

let rainbow = destination.concat(native, hero);
rainbow.reverse();
rainbow[0] = "Richard";
rainbow.splice( 3, 0, 'Gave', 'Battle' );
rainbow[6] = 'Vain';


console.log(rainbow);

let words = [ 'Richard' , 'Of', 'York', 'Gave', 'Battle', 'In', 'Vain' ];
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo','purple'];

document.write ('<div style="display:flex;justify-content:center; margin:20px;">')

for(let i=0; i<words.length; i++){
    document.write(`<div>
    <span>${words[i]}</span>
    <div style="background: ${colors[i]}; width:30px ; height:30px; border-radius:50%; padding:17px; margin-top:7px; margin-right:10px;"></div>
    </div>`);
}
 document.write(`</div>`);
