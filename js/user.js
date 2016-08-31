//页面打开时是否显示用户信息
function localStorageValue()
{
	var em = /^\w{3,20}@[a-z0-9]{2,10}\.[a-z]{2,6}/;//邮箱自定义名称必须以字母或数字或下划线开始，长度3-20位；提供商名称必须以字母或数字开始，长度2-10位；域名必须为字母，长度2-6位。
	var pw = /^\S{6,20}/;//密码为非空的6-20个字符。
	var e=localStorage.email_d;
	var p=localStorage.pwd_d;

	console.log(e+','+p);

	var unLogin=document.getElementById('unLogin');
	var loged=document.getElementById('loged');
	var fuckOff=document.getElementById('fuckOff');
	var displayUser=document.getElementById('displayUser');
	if(em.test(e)&&pw.test(p))//如果账号和密码都匹配，则状态为已登录，否则状态为未登录
	{
		unLogin.style.display='none';
		loged.style.display='block';
		displayUser.innerHTML=e;
		fuckOff.style.display='none';
	}else{
		unLogin.style.display='block';
		loged.style.display='none';
		fuckOff.style.display='none'; 
	}
}
localStorageValue();

// 退出账号
function logout()
{
	var loged=document.getElementById('loged');
	var fuckOff=document.getElementById('fuckOff');
	var unLogin=document.getElementById('unLogin');
	loged.onclick=function()
	{
		if(fuckOff.style.display=='none')
		{
			fuckOff.style.display='block';
		}else{
			fuckOff.style.display='none';
		}
	}
	fuckOff.onclick=function()
	{
		localStorage.email_d='';
		localStorage.pwd_d='';
		loged.style.display='none';
		unLogin.style.display='block';
		fuckOff.style.display='none';
	}
}
logout();  