/**
 * Created by Administrator on 2017/12/6.
 */
import fastClick from './fastclick'
((doc,win) => {
    const docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize',
    recalc = () => {
        let clientWidth = docEl.clientWidth;
        if(!clientWidth){return};
        docEl.style.fontSize = 100 * (clientWidth / 320) + 'px';//iphone6基准
    }
    if(!doc.addEventListener){return}
    win.addEventListener(resizeEvt,recalc,false);
    doc.addEventListener('DOMContentLoaded',recalc,false);
})(document,window)


if('addEventListener' in document){
    document.addEventListener('DOMContentLoaded',function(){
        fastClick.attach(document.body)
    },false);
}