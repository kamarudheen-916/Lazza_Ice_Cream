let navBtn=document.querySelector('#btn');
let navDrop=document.querySelector('#navDrop');

navBtn.addEventListener('click', () =>{
    if(navDrop.style.display === 'none'){
        navDrop.style.display='block';
    }else{
        navDrop.style.display='none';
    }
})
// function show(){
//     alert("no error");
// }