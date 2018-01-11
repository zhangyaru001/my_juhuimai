/**
 * Created by Administrator on 2016/8/25.
 */

function move(obj,json,fun,time,step){
    //取消定时器
    if(obj.timer){
        clearInterval(obj.timer);
    }

    //给形参赋默认值
    if(!time){
        time = 10;
    }
    if(!step){
        // if(attr=="opacity"){
            // step = 1/100;
        // }else{
            step = 10;
      //  }
    }
    obj.timer = setInterval(function(){
        //获取属性值（大小，宽高，位移）
        // var iCur = getStyle(obj,attr);
        // //透明度问题
        // if(attr == "opacity"){
            // iCur = parseFloat(getStyle(obj,attr));
        // }else{
            // iCur = parseInt(getStyle(obj,attr));
        // }
		for(var attr in json){
			var target = json[attr];
			var iCur = getStyle(obj,attr);
		    iCur = parseInt(getStyle(obj,attr));
		
			//添加一个变量，用来记录当前值和目标值之间的差
			//如果这个差>0, + ,如果这个差<0, -
			var speed=  (target-iCur)/step;
			//console.log(iCur+ " "+speed);
			speed= speed>0?Math.ceil(speed):Math.floor(speed);

			//修改当前值
			if(iCur!= target){
				if(attr == "opacity"){
					obj.style[attr] = (iCur + speed)/100;
					obj.style.filter = "alpha(opacity:"+(iCur + speed)+")";
				}else{
					obj.style[attr] = iCur + speed+"px";
				}
			}else{
				clearInterval(obj.timer);
				if(fun){
					fun();
				} //end if(fun)
			} //end of else (iCur!=target)
		} //end of for in loop
    },time);
}
function getStyle(obj,attr){                  //获取元素样式
    var val;
    if(window.getComputedStyle){
        val =  window.getComputedStyle(obj,null)[attr];
    }else{
        val =  obj.currentStyle[attr];
    }
	if(attr=="opacity"){
		val = val*100;
	}
    return val;
}
