let exp1 = document.querySelector('#kolej');
let exp2 = document.querySelector('#zakres');
let exp3 = document.querySelector('#marka');
let parentexp1 = document.querySelector('#parentkolej');
let parentexp2 = document.querySelector('#parentzakres');
let parentexp3 = document.querySelector('#parentmarka');


function ekspander(event){
    let a = event.target.parentElement.querySelector('.expander');
    a.style.display === 'none' ? a.style.display = 'block':
    a.style.display = 'none';
    if(event.target.id==='zakres' && a.style.display === 'block'){
        a.style.display = 'inline-flex';
        a.style.justifyContent = 'space-around';
    }
}
function rozwin(event){
    let a = event.target.querySelector('.expander');
    if(a.style.display === 'none'){
        a.style.display = 'block';
    } 
    if(event.target.id==='zakres' && a.style.display === 'block'){
        a.style.display = 'inline-flex';
        a.style.justifyContent = 'space-around';
    }
}

exp1.onclick = exp2.onclick = exp3.onclick = ekspander;
parentexp1.onclick = parentexp2.onclick = parentexp3.onclick = rozwin;

