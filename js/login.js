// 登录函数
function login()
{
	var e=e||event;
	var login=document.getElementById('login');
	login.onclick=function()
	{
		var email=document.getElementById('email').value;
		var pwd=document.getElementById('pwd').value;
		// alert(email+','+pwd+','+rPwd);
		// console.log(email=='');
		var em = /^\w{3,20}@[a-z0-9]{2,10}\.[a-z]{2,6}/;//邮箱自定义名称必须以字母或数字或下划线开始，长度3-20位；提供商名称必须以字母或数字开始，长度2-10位；域名必须为字母，长度2-6位。
		var pw = /^\S{6,20}/;//密码为非空的6-20个字符。

		var e=localStorage.email;
		var p=localStorage.pwd;
		ss=localStorage.email_d=' ';
		sd=localStorage.pwd_d='';
		console.log(e+','+p);

		if(email=='')
		{
			alert('请输入邮箱！');
			return false;
		}else if(!em.test(email))
		{
			alert('邮箱格式错误！请检查并重新输入');
			return false;
		}else if(email!==e)
		{
			alert('该账户不存在！请更换账号后再进行登录 或 注册新账号');
		}else if(pwd=='')
		{
			alert('密码不能为空！');
			return false;
		}else if(!pw.test(pwd))
		{
			alert('密码必须为6-20个任意的非空字符！');
			return false;
		}else if(pwd!==p)
		{
			alert('密码与账号不匹配！请重新输入');
			return false;
		}else{
			alert('登录成功！将自动返回首页');
			window.open('../views/homepage.html','_self');
			var ss=localStorage.email_d=email;
			var sd=localStorage.pwd_d=pwd;
		}
	}
}
login();