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

    //config
    step = 0;
    minStep = 0;
    maxStep = 15;

    degree = 0;//旋转角度


    maxDegree = 0;//最大旋转角度

    function loop(time) {

        c.clearRect(0, 0, canvas.width, canvas.height);

        requestID = window.requestAnimationFrame(loop);

        //degree += step * Math.PI / 180;


        c.translate(0, 0);//重置0,0坐标点
        draw(img, {x: c_w / 2, y: c_h / 2}, c_w, c_h);//绘制正常区域
        c.save();

        step = parseFloat(step);

        console.log("step:" + step);
        //旋转指针区域

        switch (maxDegree) {
            case 0:
                //一直旋转
                //加速
                step += 0.5;
                //加到一定程度变为匀速
                if (step >= maxStep) {
                    step = maxStep;
                }
                degree += step;
                if (degree >= 360) {
                    degree = 0;
                }
                break;
            default:
                //减速旋转
                //step=step*degree/maxDegree;

                //console.log(1-degree/maxDegree);


                if (degree + 360 >= maxDegree) {

                } else {
                    step -= 0.1;
                    if (step <= 1) {
                        step = 1;
                    }
                }
                if (step <= 0.01) {
                    step = 0.01;
                }
                degree += step;
                console.log(degree + "/" + maxDegree);
                if (degree >= maxDegree) {
                    stop();
                }

        }
        degree = Math.floor(degree);
        c.translate(c_w / 2, c_h / 2);//重置0,0坐标点
        c.rotate(degree * Math.PI / 180);
        draw(zz, {x: 0, y: 0}, c_w, c_h);
        c.restore();

    }


    draw(img, {x: c_w / 2, y: c_h / 2}, c_w, c_h);
    draw(zz, {x: c_w / 2, y: c_h / 2}, c_w, c_h);

    function success(){
        //中奖
        console.log('中奖');
    }

    function unsuccess(){
        //没中奖
        console.log('没中奖');
    }
    function start() {
        requestID = window.requestAnimationFrame(loop);
    }

    function stop() {
        window.cancelAnimationFrame(requestID);
        requestID = 0;


        setTimeout(function () {
            console.log(initm);
            switch (true) {
                case (initm>330 && initm<360):
                    unsuccess();
                    break;
                case (initm>0 && initm<30):
                    unsuccess();
                    break;
                case (initm>30 && initm<90):
                    success();
                    break;
                case (initm>90 && initm<150):
                    unsuccess();
                    break;
                case (initm>150 && initm<210):
                    success();
                    break;
                case (initm>210 && initm<270):
                    unsuccess();
                    break;
                case (initm>270 && initm<330):
                    success();
                    break;
            }
        }, 1000);


    }

    var initm = 0;//初始化的角度
    setMax = function (m) {
        initm = m;//停留的位置就是下一次初始化的角度
        maxDegree = m + 360 * 5;
    }

    /* init */
    requestID = 0;
    step = 1;
    degree = 0;
    maxDegree = 0;
    document.getElementById("start").addEventListener('click', function () {
        if (requestID === 0) {
            step = 0.1;
            degree = initm;
            maxDegree = 0;
            if (degree > 360) {
                degree = degree
            }
            start();

            //模拟ajax 返回数据
            setTimeout(function () {

                //根据360度的角度判断 是否中奖

                //1-6 转盘，转化为 随机角度

                //ajax 传递过来的 值 赋予 mun
                var num = Math.floor(Math.random() * 6 + 1);


                var jd = 0;//角度
                switch (num) {
                    case 1:
                        var r = Math.floor(Math.random() * 2);
                        switch (r) {
                            case 0:
                                //330-360
                                jd = Math.floor(Math.random() * (60 - 1) + (330 + 1));
                                break;
                            case 1:
                                jd = Math.floor(Math.random() * (60 - 1) + (0 + 1));
                                break;
                        }
                        break;
                    case 2:
                        jd = Math.floor(Math.random() * (60 - 1) + (30 + 1));
                        break;
                    case 3:
                        jd = Math.floor(Math.random() * (60 - 1) + (90 + 1));
                        break;
                    case 4:
                        jd = Math.floor(Math.random() * (60 - 1) + (150 + 1));
                        break;
                    case 5:
                        jd = Math.floor(Math.random() * (60 - 1) + (210 + 1));
                        break;
                    case 6:
                        jd = Math.floor(Math.random() * (60 - 1) + (270 + 1));
                        break;
                }

                //setMax(Math.floor(Math.random() * 360));
                console.log(jd);
                setMax(jd);
            }, 1000);
        }


    });
}
