document.getElementById("add").addEventListener('click', ()=>{
    document.getElementById("ans").innerText = Number(document.getElementById("ans").innerText) + 1;
    if(Number(document.getElementById("ans").innerText) != 0){
        document.getElementById("sub").disabled = false
        document.getElementById("ans").style.color = 'black';
    }
})
document.getElementById("sub").addEventListener('click', ()=>{
    if(Number(document.getElementById("ans").innerText) == 0){
        document.getElementById("sub").disabled = true
        document.getElementById("ans").style.color = 'red';
    }else{
        document.getElementById("ans").innerText = Number(document.getElementById("ans").innerText) - 1;       
        document.getElementById("ans").style.color = 'black';
    }
})