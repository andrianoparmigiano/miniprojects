let canvas = document.getElementById("cnv"), 
    ctx = canvas.getContext("2d"),
    color = 'black',
    radius = document.getElementById('range').value;
console.log(canvas)
document.getElementById('radius').innerHTML = document.getElementById('range').value

document.getElementById('color').oninput = function(event){
    console.log(event.target.value)
    color = event.target.value
}

document.getElementById('range').oninput = function(event){
    console.log(event.target.value)
    radius = event.target.value
    document.getElementById('radius').innerHTML = event.target.value
}

// document.body.onmousemove = function(e){
//     console.log('X - ', e.offsetX, 'Y - ', e.offsetY);
// }

canvas.onmousedown = function(e1){
    ctx.beginPath();
    const rect = canvas.getBoundingClientRect();
    ctx.moveTo((e1.clientX - rect.left)  * canvas.width / canvas.clientWidth, (e1.clientY - rect.top) * canvas.height / canvas.clientHeight)
    canvas.onmousemove = function(e2){
        console.log(e2);
        ctx.lineWidth = radius
        ctx.strokeStyle = color;
        ctx.lineTo((e2.clientX - rect.left)  * canvas.width / canvas.clientWidth, (e2.clientY - rect.top) * canvas.height / canvas.clientHeight)
        ctx.stroke();
    }
}

canvas.onmouseup = function(){
    canvas.onmousemove = null
}