//app二维码
function app()
{
	var mobile=document.getElementById('app').getElementsByTagName('a')[0];
	var mobileApp=document.getElementById('mobileApp');
	mobile.onmouseover=function(a)
	{
		mobileApp.style.display='block';
	}
	mobileApp.onmouseout=function(a)
	{
		mobileApp.style.display='none';
	}
	document.onclick=function(a)
	{
		mobileApp.style.display='none';
	}
}
app();
// 弹出式搜索框
function sec()
{
	var search=document.getElementById('search').getElementsByTagName('a')[0];
	var searchMoveBox=document.getElementById('searchMoveBox');
	var mobileApp=document.getElementById('mobileApp');
	search.onmouseover=function(a)
	{
		searchMoveBox.style.right='0px';
		mobileApp.style.display='none';
	}
	document.onclick=function(a)
	{
		searchMoveBox.style.right='-275px';
		mobileApp.style.display='none';
	}
	searchMoveBox.onclick=function(a)
	{
		var e=e||window.event;
		stopEvent();
	}
}
sec();
//阻止冒泡事件
function stopEvent(){ 
	//取消事件冒泡
	var e=arguments.callee.caller.arguments[0]||event; //若省略此句，下面的e改为event，IE运行可以，但是其他浏览器就不兼容
	if (e && e.stopPropagation)
	{
		e.stopPropagation();// this code is for Mozilla and Opera
	}else if(window.event)
	{
		window.event.cancelBubble = true;// this code is for IE
	}
}



