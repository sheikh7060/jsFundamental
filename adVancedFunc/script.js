const btn1 = document.querySelector('.btn');
btn1.addEventListener('click',done);

function done(){
    alert('Item Added');
}







btn1.removeEventListener('click',done);