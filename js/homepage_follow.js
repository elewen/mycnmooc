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
// 主页跟随

function follow()
{
	var glass=document.getElementsByClassName('glass');
	// console.log(glass);
	for(var i=0;i<glass.length;i++)
	{
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
			var t=this.parentNode.offsetTop;//其（glass）的父元素离开页面左上角的距离
			
			var oX=x-(l-w);
			var oY=y-(t-h);
			//7为透明框的宽度比，4为透明框的高度比
			var a=oX*164-oY*284;
			var b=oX*164+oY*284;
			//console.log(x+','+y+','+w+','+h+','+l+','+t+','+oX+','+oY+','+a+','+b);

			var point =this.previousElementSibling;
			// console.log(point);
			point.style.transition='';
			if(a>0&&b<46576)//上
			{
			    // console.log('上面进入');
			    point.style.left='0px';
			    point.style.top='-164px';
			    // point.style.transition='';
			    // ss = setTimeout(fn,1);
			}
			if(a>0&&b>46576)//右
			{
			    // console.log('右面进入');
			    point.style.left='284px';
			    point.style.top='0px';
			    // point.style.transition='';
			    // ss = setTimeout(fn,1);
			}
			if(a<00&&b>46576)//下
			{
			    // console.log('下面进入');
			    point.style.left='0px';
			    point.style.top='164px';
			    // point.style.transition='';
			    // ss = setTimeout(fn,1);
			}
			if(a<0&&b<46576)//左
			{
			    // console.log('左面进入');
			    point.style.left='-284px';
			    point.style.top='0px';
			    // point.style.transition='';
			    // ss = setTimeout(fn,1);
			}
			function fn()//让阴影到中间去
			{
			    point.style.left='0px';
			    point.style.top='0px';
			    point.style.transition='.2s';//时间控制，此为过渡完成的事件，不易过长或过短。
			    // c.onmouseover=function(){}
			    // clearInterval(ss);
			}
			ss = setTimeout(fn,10);//时间控制，此处设置定时是为了确保在位置重置成功后才执行让其进入中心，避免阴影从错误的位置进入


			
		}

		
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
			var a=oX*160-oY*284;
			var b=oX*160+oY*284;
			// console.log(oX+','+oY);
			//重置相关css样式
			var point =this.previousElementSibling;//获取其（glass）的上一个兄弟节点
			// console.log(point);
			function dd()
			{
				if(a>0&&b<46576)//上
				{
					// console.log('上面出去');
					point.style.left='0px';
					point.style.top='-164px';
				}
				if(a>0&&b>46576)//右
				{
					// console.log('右面出去');
					point.style.left='284px';
					point.style.top='0px';
				}
				if(a<00&&b>46576)//下
				{
					// console.log('下面出去');
					point.style.left='0px';
					point.style.top='164px';
				}
				if(a<0&&b<46576)//左
				{
					// console.log('左面出去');
					point.style.left='-284px';
					point.style.top='0px';
				}
			}
			setTimeout(dd,10);//此处设置极短的定时，以防止光标移动太快导致onmouseover未执行完毕时无法执行onmouseout
		}
	}
}
follow();