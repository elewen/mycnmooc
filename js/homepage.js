
// 第一个轮播图
(function(){
	var s;
	var i=1;
	var img=document.getElementById('lun_1');
	var slcImg =document.getElementById('selectImg').getElementsByTagName('li');//获取
		// setTimeout(img.style.opacity='0',5000);

	var r = Math.floor(Math.random()*256);//rgb不能使用小数作为颜色值,Math.floor的作用是向下取整Math.random()的取值范围是[0,1)的左闭右开的区间,即0<=number<1 .
	var g = Math.floor(Math.random()*255);
	var b = Math.floor(Math.random()*255);
	slcImg[0].style.background='rgb('+r+','+g+','+b+')';
	
	//定时器自动切换图片
	function oImg()
	{
		if(i>=10)
		{
			i=0;
		}
		i++;
		// console.log(i);
		var n=(i>=10?i:'0'+i)
		img.style.background='url(../images/0'+n+'.jpg)';//此处有bug，给了transition的情况下chrome中切换时有过渡效果，而其他浏览器却没有
		img.style.backgroundPosition='center';
		for(var ss=0;ss<slcImg.length;ss++)
		{
			slcImg[ss].style.background='';
		}
		var r = Math.floor(Math.random()*256);//rgb不能使用小数作为颜色值,Math.floor的作用是向下取整Math.random()的取值范围是[0,1)的左闭右开的区间,即0<=number<1 .
		var g = Math.floor(Math.random()*255);
		var b = Math.floor(Math.random()*255);
		slcImg[i-1].style.background='rgb('+r+','+g+','+b+')';
	}
	var setFn = setInterval(oImg,5000);//5秒切换一次
	
	//手动（点击）切换
	for(var j=0;j<slcImg.length;j++)//遍历
	{
		slcImg[j].j=j;//自定义变量并赋值
		slcImg[j].onclick=function()//给事件绑定函数
		{
			// 清除并重新开始多次定时，以避免手动切换后到下次自动切换时间间隔过短的问题（注意：每当重新设置多次定时的时候必须要清除之前的定时，否则每执行一次 重新定时 所在的方法，被调用的方法执行的时间间隔就会变为（多次定时的时间间隔）/（执行重新定时所在的方法的次数+1），即执行频率随着重置的次数的增加而变快）
			clearInterval(setFn);//清除 5秒切换一次
			setFn = setInterval(oImg,5000);//重新开始 5秒切换一次
			// 格式化所有按钮的颜色
			for(var ss=0;ss<slcImg.length;ss++)
			{
				slcImg[ss].style.background='';
			}
			
			s=this.j+1;
			i=s;//手动切换后让自动切换从手动切换到的位置开始切换
			// console.log(s);
			var n=(s>=10?s:'0'+s)
			img.style.background='url(../images/0'+n+'.jpg)';
			img.style.backgroundPosition='center';
			//被点击按钮变色
			var r = Math.floor(Math.random()*256);//rgb不能使用小数作为颜色值,Math.floor的作用是向下取整Math.random()的取值范围是[0,1)的左闭右开的区间,即0<=number<1 .
			var g = Math.floor(Math.random()*255);
			var b = Math.floor(Math.random()*255);
			// alert(r+','+g+','+b)
			this.style.background='rgb('+r+','+g+','+b+')';
		}
	}
})()

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

//第二个轮播图
var div=document.getElementsByClassName('div');//获取目标
console.log(div);
var i=0,j=1,k=5;
//从左向右
function rDiv()
{
	// console.log(Divs);
	div[i].style.left='-1110px';
	div[i].style.transition='1s';
// var ss=0;
// var qq=0;
// 	for ( q=0; q>-1110; q--){
//         setTimeout ( function(){
//             var left = div[i].style.left ? div[i].style.left : 0;
//             left = parseInt( left ) -1;
//             div[i].style.left = left+ "px";
//         } , ss+=1 );
//     }

	div[j].style.left='0px';
	div[j].style.transition='1s';

	// for ( p=1100; p>0; p--){
 //        setTimeout ( function(){
 //            var left = div[j].style.left ? div[j].style.left : 1100;
 //            left = parseInt( left ) -1;
 //            div[j].style.left = left+ "px";
 //        } , qq+=1 );
 //    }

	div[k].style.left='1110px';
	div[k].style.transition='';
	// console.log(i+','+j+','+k);
	++i;++j;++k;
	if(i>5){i=0}
	if(j>5){j=0}
	if(k>5){k=0}
}







var ss=setInterval(rDiv,5500);//5秒切换一次
//从右向左
function lDiv()
{
	// console.log(Divs);
	div[i].style.left='0px';
	div[i].style.transition='1s';
	div[j].style.left='1110px';
	div[j].style.transition='1s';
	div[k].style.left='-1110px';
	div[k].style.transition='';
	// console.log(i+','+j+','+k);
	--i;--j;--k;
	if(i<0){i=5}
	if(j<0){j=5}
	if(k<0){k=5}
}
// var sb=setInterval(lDiv,5000);//5秒切换一次
// 手动（点击）切换
var goLeft=document.getElementById('goLeft');
var goRight=document.getElementById('goRight');
goRight.onclick=function()
{
	clearInterval(ss);
	rDiv();
	ss=setInterval(rDiv,5000);
}
goLeft.onclick=function()
{
	clearInterval(ss);
	lDiv();
	ss=setInterval(rDiv,5000);
}