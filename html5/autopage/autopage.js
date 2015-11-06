window.onload=function(){
    //获得宽度和高度
    var window_width=window.innerWidth;
    var window_height=window.innerHeight;
    //设置page宽度和高度
    var pages=document.getElementsByClassName('page');
    for(i=0;i<pages.length;i++){
        var page=pages[i];
        page.style.width=window_width+'px';
        page.style.height=window_height+'px';
    }
    document.addEventListener('touchstart',function(){
        start_p=parseInt(window.scrollY);
    });
    document.addEventListener('touchend',function(){
        end_p=parseInt(window.scrollY);
        var page=Math.round(end_p / window_height) ;
        switch (true){
            case (start_p<end_p):
                //page ++
                page+=1;
                break;
            case (start_p>end_p):
                //page--
                page-=1;
                break;
        }
        window.scrollTo(0,page*window_height);
    });
}