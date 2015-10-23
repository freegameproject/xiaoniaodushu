window.onload=function(){
    var canvas=document.getElementById("canvas");
    canvas.width=canvas.clientWidth;
    canvas.height=canvas.clientHeight;
    c = canvas.getContext('2d');

    var c_1=new Image();
    c_1.src='images/c_1.png';


    function loop(time){
        c.clearRect(0, 0, canvas.width, canvas.height);
        c.drawImage(c_1,10,10,50,50);
        requestID = window.requestAnimationFrame(loop);
    }
    requestID = window.requestAnimationFrame(loop);
}
