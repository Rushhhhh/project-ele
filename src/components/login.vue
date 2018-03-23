<template>

<div>
	<nav>
		<a href="#/home" style="color:white"><i class="iconfont icon-back"></i></a>
		<h1><a href=""><img src="http://static1.mtime.cn/html5/20180208104315/images/2014/logo_mtime.png" alt=""></a></h1>
		
		
	</nav>

	<div id="main">
		<form>
			<div>
				<i class="iconfont icon-account"></i>
				<input type="text" class="text" placeholder="登录邮箱/手机号码" v-model="phone" name="phone">
			</div>
			<div>
				<i class="iconfont icon-edit"></i>
				<input type="password" placeholder="密码" v-model="password" name="password">
			</div>
			<button type="button" @click="handleClick">登录</button>
		</form>
	</div>

	<div id="section1">
		<span><a href="#/register">免费注册</a></span>
		<span>找回密码</span>
		<p>使用第三方登录</p>
	</div>

	<div id="footer">
		<a href=""></a>
		<a href=""></a>
	</div>

</div>

</template>

<script>
import axios from "axios";
export default {
	name:"login",
	data(){
		return {
			phone:null,
			password:null,
		}
	},
	methods:{
		handleClick(){
			console.log(this.phone)
			console.log(this.password)
			axios.post("/register",{
				phone:this.phone,
				password:this.password
			}).then(res=>{
				console.log("111111111111")
			window.location.href="http://localhost:8080/#/home";
				
			}).catch(error=>{
				console.log(error);
				
			})

		}		
	}
}

	
</script>



<style lang="scss" scoped>
body{
	background:#f6f6f6;
}

*{
	margin:0px;
	padding:0px;
}
	nav{
	height:50px;
	background:#1c2635;
	color:white;
	line-height:50px;
	position:relative;
	h1{
		float:left;
		width:70px;
		padding-left:10px;
		margin-left:150px;
		img{
			width:80px;
		}
	}
	.iconfont{
		font-size:22px;
		position:absolute;
		left:10px;
		
	}
	
}


#main{
	background:white;
	div{
		width:100%;
		height:50px;
		margin:10px 20px;
		border-bottom:1px solid #ccc;
		padding-bottom:5px;
		i{
			font-size:30px;
		}
		input{
			width:80%;
			height:90%;
			font-size:20px;
			border:0;
		}
	}
	button{
		width:300px;
		height:50px;
		background:#457DE7;
		margin-left:50px;
		margin-top:20px;
		font-size:20px;
		color:white;
		border-radius:25px;
		border:0;
	}
	
}	


#section1{
	span:nth-of-type(1){
		font-weight:bold;
		color:#457DE7;
		font-size:18px;
		line-height:50px;
		margin:10px;
	}
	span:nth-of-type(2){
		font-weight:bold;
		font-size:18px;
		float:right;
		line-height:50px;
	}
	p{
		text-align:center;
		line-height:40px;
		color:#aaa;
	}
}

#footer{
	position:relative;
	margin-top:20px;
	a:nth-of-type(1){
		display:inline-block;
		width:70px;
		position:absolute;
		top:0px;
		left:100px;
		height:70px;
		background:url("http://static1.mtime.cn/html5/20180208104315/images/2014/o_sina.png") no-repeat;
		background-size:cover;
	}
	a:nth-of-type(2){
		display:inline-block;
		width:70px;
		position:absolute;
		top:0px;
		right:100px;
		height:70px;
		background:url("http://static1.mtime.cn/html5/20180208104315/images/2014/o_qq.png") no-repeat;
		background-size:cover;
	}
}
</style>