// 注册
function signUp(e)
{
	var e=e||event;
	var btn_sign=document.getElementById('btn_sign');
	btn_sign.onclick=function()
	{
		var email=document.getElementById('email').value;
		var pwd=document.getElementById('pwd').value;
		var rPwd=document.getElementById('rPwd').value;
		// alert(email+','+pwd+','+rPwd);
		// console.log(email=='');
		var em = /^\w{3,20}@[a-z0-9]{2,10}\.[a-z]{2,6}/;//邮箱自定义名称必须以字母或数字或下划线开始，长度3-20位；提供商名称必须以字母或数字开始，长度2-10位；域名必须为字母，长度2-6位。
		var pw = /^\S{6,20}/;//密码为非空的6-20个字符。

		var e=localStorage.email;
		var p=localStorage.pwd;
		console.log(e+','+p);

		if(email=='')
		{
			alert('邮箱不能为空！');
			return false;
		}else if(!em.test(email))
		{
			alert('邮箱名不合法！邮箱名必须以字母或数字或下划线开始，长度3-20位；提供商名称必须以小写字母或数字开始，长度2-10位；域名必须为小写字母，长度2-6位。');
			return false;
		}else if(email===e)
		{
			alert('该账户已存在！请更换账号后再进行注册 或 直接使用已存在的账号登录');
		}else if(pwd=='')
		{
			alert('密码不能为空！');
			return false;
		}else if(!pw.test(pwd))
		{
			alert('密码必须为6-20个任意的非空字符！');
			return false;
		}else if(pwd!==rPwd)
		{
			alert('密码输入不一致！');
			return false;
		}else{
			localStorage.email=email;
			localStorage.pwd=pwd;
			var confir=confirm('注册成功！现在去登陆？');
			if(confir==true)
			{
				window.open('../views/login.html','_self');
			}else{
				window.open('../views/signUp.html','_self');
			}
		}
	}
}
signUp();