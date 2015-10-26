window.onload = function () {
    var canvas = document.getElementById("canvas");
    c_w = canvas.clientWidth;
    c_h = canvas.clientHeight;
    canvas.width = c_w;
    canvas.height = c_h;
    c = canvas.getContext('2d');

    var c_1 = new Image();
    c_1.src = 'images/c_1.png';
    var c_2 = new Image();
    c_2.src = 'images/c_2.png';
    var c_3 = new Image();
    c_3.src = 'images/c_3.png';
    var c_4 = new Image();
    c_4.src = 'images/c_4.png';
    var c_5 = new Image();
    c_5.src = 'images/c_5.png';
    var c_6 = new Image();
    c_6.src = 'images/c_6.png';
    var c_7 = new Image();
    c_7.src = 'images/c_7.png';
    var c_8 = new Image();
    c_8.src = 'images/c_8.png';
    var c_9 = new Image();
    c_9.src = 'images/c_9.png';

    s = c_w / 3 * 2 / 2;//偏移距离

    //中心绘制
    function draw(img, point, width, height) {
        c.drawImage(img, point.x - width / 2, point.y - height / 2, width, height);
    }



    var left = c_w / 2 - s;//最左边
    var right = c_w / 2 + s;//最右边
    var top = c_h / 2 - s;//最上面
    var bottom = c_h / 2 + s;//最下面


    var x = left;//x
    var y = top;//y

    step = 10;//步长

    var objs = [];

    objs.push({
        img: c_1,
        x: left,
        y: top,
        f: 1
    });
    objs.push({
        img: c_2,
        x: 180,
        y: top,
        f: 1
    });

    objs.push({
        img: c_3,
        x: 250,
        y: top,
        f: 1
    });

    objs.push({
        img: c_4,
        x: 350,
        y: top,
        f: 1
    });

    objs.push({
        img: c_5,
        x: 470,
        y: top,
        f: 1
    });

    function loop(time) {
        c.clearRect(0, 0, canvas.width, canvas.height);

        //计算圆的轨迹   偏移位置

        //中心位置 draw(c_1,{x:c_w/2,y:c_h/2},70,70);


        //获取每个元素的 x y 根据x y 判断 位于第几象限


        //通过计算 元素 的 象限，确定 方向 f


        objs.map(function (obj, arr) {
            switch (obj.f) {
                case 1:
                    //从左到右 上半圆

                    obj.x += step;

                    //计算y的位置

                    var a = Math.abs(obj.x - c_w / 2);


                    var b = Math.sqrt(s * s - a * a);

                    obj.y = c_h / 2 - b;

                    if (obj.x >= right) {
                        obj.f = 2;

                        obj.y = c_h / 2;
                    }

                    break;
                case 2:
                    //从右到左 下半圆

                    obj.x -= step;


                    //计算y的位置
                    var a = Math.abs(obj.x - c_w / 2);


                    var b = Math.sqrt(s * s - a * a);

                    obj.y = c_h / 2 + b;
                    if (obj.x <= left) {
                        obj.f = 1;
                    }

                    break;

            }
            draw(obj.img, {x: obj.x, y: obj.y}, 60, 60);
        });


        requestID = window.requestAnimationFrame(loop);
    }

    requestID = window.requestAnimationFrame(loop);
}
