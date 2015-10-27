var img = new Image();
img.src = 'dial.png';
var zz = new Image();
zz.src = 'zz.png';
window.onload = function () {
    var canvas = document.getElementById("canvas");
    c_w = canvas.clientWidth;
    c_h = canvas.clientHeight;
    canvas.width = c_w;
    canvas.height = c_h;
    c = canvas.getContext('2d');



    //中心绘制
    function draw(img, point, width, height) {
        c.drawImage(img, point.x - width / 2, point.y - height / 2, width, height);
    }

    var step = 1;
    var degree = 0;


    var maxDegree=0;

    function loop(time) {
        //c.clearRect(0, 0, canvas.width, canvas.height);

        requestID = window.requestAnimationFrame(loop);

        //degree += step * Math.PI / 180;
        console.log(degree);

        step+=0.1;

        if(step>=10){
            step=10;
        }

        degree+=step;



        if(maxDegree===0){
            if(degree>=360){
                degree=0;
            }
        }else{
            if(degree>=maxDegree){

                stop();
            }
        }

        c.save();
        c.translate(c_w / 2, c_h / 2);//重置0,0坐标点
        c.rotate(degree*Math.PI/180);
        draw(img, {x: 0, y: 0}, 360, 360);
        c.restore();

        draw(zz, {x: c_w / 2, y: c_h / 2}, 50, 50);




    }


    draw(img, {x: c_w / 2, y: c_h / 2}, 360, 360);
    draw(zz, {x: c_w / 2, y: c_h / 2}, 50, 50);

    function start() {
        requestID = window.requestAnimationFrame(loop);
    }

    function stop() {
        window.cancelAnimationFrame(requestID);
    }

    var initm=0;//初始化的角度
    setMax=function(m){
        initm=m;//停留的位置就是下一次初始化的角度
        maxDegree=m+360*3;
    }

    /* init */
    step = 1;
    degree = 0;
    maxDegree=0;
    canvas.addEventListener('click',function(){
        step = 1;
        degree=initm;
        maxDegree=0;
        if(degree>360){
            degree=degree
        }

        start();
    });
}
