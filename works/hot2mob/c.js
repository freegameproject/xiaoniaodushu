window.onload=function(){
    var canvas=document.getElementById("canvas");
    c_w=canvas.clientWidth;
    c_h=canvas.clientHeight;
    canvas.width=c_w;
    canvas.height=c_h;
    c = canvas.getContext('2d');

    var c_1=new Image();
    c_1.src='images/c_1.png';

    s=c_w/3*2;//偏移距离

    //中心绘制
    function draw(img,point,width,height){
        c.drawImage(img,point.x-width/2,point.y-height/2,width,height);
    }





    var f=1;


    var left=c_w/2-s/2;//最左边
    var right=c_w/2+s/2;//最右边
    var top=c_h/2-s/2;//最上面
    var bottom=c_h/2+s/2;//最下面


    var x=left;//x
    var y=top;//y

    step=2;//步长

    function loop(time){
        c.clearRect(0, 0, canvas.width, canvas.height);

        //计算圆的轨迹   偏移位置

        //中心位置 draw(c_1,{x:c_w/2,y:c_h/2},70,70);


        //获取每个元素的 x y 根据x y 判断 位于第几象限


        switch (f){
            case 1:
                //从左到右

                x+=step;

                //计算y的位置

                if(x>=right){
                    f=2;
                }

                break;
            case 2:
                //从上到下

                y+=step;
                //计算x的位置

                if(y>=bottom){
                    f=3;

                }

                break;
            case 3:
                //从右到左
                x-=step;
                //计算y的位置

                if(x<=left){
                    f=4;
                }
                break;
            case 4:
                //从下到上
                y-=step;
                //计算x的位置
                if(y<=top){
                    f=1;
                }
                break;
        }



        draw(c_1,{x:x,y:y},70,70);

        requestID = window.requestAnimationFrame(loop);
    }
    requestID = window.requestAnimationFrame(loop);
}
