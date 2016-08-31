//兼容获取classname
if(!document.getElementsByClassName){
    document.getElementsByClassName = function(className, element){
        var children = (element || document).getElementsByTagName('*');
        var elements = new Array();
        for (var i=0; i<children.length; i++){
            var child = children[i];
            var classNames = child.className.split(' ');
            for (var j=0; j<classNames.length; j++){
                if (classNames[j] == className){ 
                    elements.push(child);
                    break;
                }
            }
        } 
        return elements;
    };
}
// 阴影滑入滑出函数
function slid()
{
	var box   =document.getElementsByClassName('sc-item');
	var glass =document.getElementsByClassName('glass');
	for(i=0;i<glass.length;i++)
	{

		// 跟随滑入
		glass[i].onmouseover=function(e)
		{

			var e=e||event;

			var x=e.clientX;//光标离开浏览器窗口可视区左上角的坐标
			var y=e.clientY;//光标离开浏览器窗口可视区左上角的坐标
			var w=document.body.scrollLeft || document.documentElement.scrollLeft;//窗口滚动的距离
			var h=document.body.scrollTop || document.documentElement.scrollTop;//窗口滚动的距离
			// var l=this.offsetLeft;//div离开页面左上角的距离
			// var t=this.offsetTop;//div离开页面左上角的距离
			var l=this.parentNode.offsetLeft;//其（glass）的父元素离开页面左上角的距离
			var t=this.parentNode.offsetTop;//其（glass）;的父元素离开页面左上角的距离
			// console.log(father);
			var oX=x-(l-w);
			var oY=y-(t-h);
			var a=oX-oY;
			var b=oX+oY;
			// console.log(oX+','+oY);
			//重置相关css样式
			var point =this.previousElementSibling;
			// console.log(point);
			point.style.transition='';//必须，否则会有从上次出去的方向进入的情况
			if(a>0&&b<200)//上
			{
			    // console.log('上面进入');
			    point.style.left='0px';
			    point.style.top='-200px';
			    // point.style.transition='';
			    // ss = setTimeout(fn,1);
			}
			if(a>0&&b>200)//右
			{
			    // console.log('右面进入');
			    point.style.left='200px';
			    point.style.top='0px';
			    // point.style.transition='';
			    // ss = setTimeout(fn,1);
			}
			if(a<00&&b>200)//下
			{
			    // console.log('下面进入');
			    point.style.left='0px';
			    point.style.top='200px';
			    // point.style.transition='';
			    // ss = setTimeout(fn,1);
			}
			if(a<0&&b<200)//左
			{
			    // console.log('左面进入');
			    point.style.left='-200px';
			    point.style.top='0px';
			    // point.style.transition='';
			    // ss = setTimeout(fn,1);
			}

			function fn()//让阴影到中间去
			{
			    point.style.left='0px';
			    point.style.top='0px';
			    point.style.transition='.2s';//时间控制，此为过渡完成的时间，不易过长或过短。
			    // c.onmouseover=function(){}
			    // clearInterval(ss);
			}
			ss = setTimeout(fn,10);//时间控制，此处设置定时是为了确保在位置重置成功后才执行让其进入中心，避免阴影从错误的位置进入
		}

		// 跟随滑出
		glass[i].onmouseout=function(e)
		{
			var e=e||event;
			var x=e.clientX;//光标离开浏览器窗口可视区左上角的坐标
			var y=e.clientY;//光标离开浏览器窗口可视区左上角的坐标
			var w=document.body.scrollLeft || document.documentElement.scrollLeft;//窗口滚动的距离
			var h=document.body.scrollTop || document.documentElement.scrollTop;//窗口滚动的距离
			// var l=this.offsetLeft;//div离开页面左上角的距离
			// var t=this.offsetTop;//div离开页面左上角的距离
			var l=this.parentNode.offsetLeft;//其（glass）的父元素离开页面左上角的距离
			var t=this.parentNode.offsetTop;//其（glass）的父元素离开页面左上角的距离
			// console.log(father);
			var oX=x-(l-w);
			var oY=y-(t-h);
			var a=oX-oY;
			var b=oX+oY;
			// console.log(oX+','+oY);
			//重置相关css样式
			var point =this.previousElementSibling;//获取其（glass）的上一个兄弟节点
			// console.log(point);
			function dd()
			{
				if(a>0&&b<200)//上
				{
					console.log('上面出去');
					point.style.left='0px';
					point.style.top='-200px';
				}
				if(a>0&&b>200)//右
				{
					console.log('右面出去');
					point.style.left='200px';
					point.style.top='0px';
				}
				if(a<00&&b>200)//下
				{
					console.log('下面出去');
					point.style.left='0px';
					point.style.top='204px';
				}
				if(a<0&&b<200)//左
				{
					console.log('左面出去');
					point.style.left='-200px';
					point.style.top='0px';
				}
			}
			setTimeout(dd,10);//此处设置极短的定时，以防止光标移动太快导致onmouseover未执行完毕时无法执行onmouseout
		}
	}
}
slid();





