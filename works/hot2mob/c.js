window.onload=function(){
    var canvas=document.getElementById("canvas");
    c_w=canvas.clientWidth;
    c_h=canvas.clientHeight;
    canvas.width=c_w;
    canvas.height=c_h;
    c = canvas.getContext('2d');

    var c_1=new Image();
    c_1.src='images/c_1.png';

    s=c_w/3*2/2;//偏移距离

    //中心绘制
    function draw(img,point,width,height){
        c.drawImage(img,point.x-width/2,point.y-height/2,width,height);
    }





    var f=1;

    var left=c_w/2-s;//最左边
    var right=c_w/2+s;//最右边
    var top=c_h/2-s;//最上面
    var bottom=c_h/2+s;//最下面


    var x=left;//x
    var y=top;//y

    step=1;//步长

    function loop(time){
        c.clearRect(0, 0, canvas.width, canvas.height);

        //计算圆的轨迹   偏移位置

        //中心位置 draw(c_1,{x:c_w/2,y:c_h/2},70,70);


        //获取每个元素的 x y 根据x y 判断 位于第几象限


        //通过计算 元素 的 象限，确定 方向 f



        switch (f){
            case 1:
                //从左到右 上半圆

                x+=step;

                //计算y的位置

                var a=Math.abs(x-c_w/2);



                var b=Math.sqrt(s*s-a*a);

                y=c_h/2-b;

                console.log(x+":"+y);

                if(x>=right){
                    f=2;

                    y=c_h/2;
                }

                break;
            case 2:
                //从右到左 下半圆

                console.log(y);
                x-=step;


                //计算y的位置
                var a=Math.abs(x-c_w/2);



                var b=Math.sqrt(s*s-a*a);

                y=c_h/2+b;
                if(x<=left){
                    f=1;
                }

                break;

        }



        draw(c_1,{x:x,y:y},70,70);

        requestID = window.requestAnimationFrame(loop);
    }
    requestID = window.requestAnimationFrame(loop);
}
