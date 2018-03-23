<template>

<div>
	<nav>
		<a href="#/login" style="color:white"><i class="iconfont icon-back"></i></a>
		<h1><a href="#/login"><img src="http://static1.mtime.cn/html5/20180208104315/images/2014/logo_mtime.png" alt=""></a></h1>
	</nav>

	<div id="main">

		<form>
			<div>
				<span>手机号:</span>
				<input type="text" name="phone" class="text" placeholder="请输入手机号" v-model="phone">
			</div>
			<div>
				<span>验证码:</span>
				<input type="password" placeholder="密码">
			</div>
			<div>
				<span>密码:</span>
				<input type="password" name="password" placeholder="6-20位字母、数字、符号组成" v-model="password">
			</div>
			<input type="radio" class="radio"> 我已阅读并同意<a href="">《Mtime时光网服务条款》</a>
			<button @click="handleClick" type="button">注册</button>
		</form>
	</div>
	    <div id="nav2">
    	<ul>
    		<li>首页</li>
    		<li>购票</li>
    		<li>商城</li>
    		<li>发现</li>
    		<li>我的</li>
    	</ul>
    </div>

    <div id="nav3">
    	<ul>
    		<li><a href="">PC版</a></li>
	    	<li><a href="">客户端下载</a></li>
	    	<li><a href="">意见反馈</a></li>
	    	<li><a href="">帮助中心</a></li>
    	</ul>	
    </div>

    <div id="footer">
    	<p><img src="/static/image/fot_logo.png" alt=""></p>
    	<p>Copyright2006-2018Mtime.com Inc. All rights reserved.</p>
    </div>


</div>

</template>

<script>
import axios from "axios";
export default {
	name:"register",
	data(){
		return {
			phone:null,
			password:null
		}
	},
	mounted(){
		//console.log(111111111111)
	},
	methods:{
		handleClick(){
			
			axios.post("/register",{
				phone:this.phone,
				password:this.password
			}).then(res=>{
				console.log("111111111111")
			window.location.href="http://localhost:8080/#/login";
				
			}).catch(error=>{
				console.log(error);
				console.log("22")
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
		font-size:18px;
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
	.radio{
		margin:20px;
		font-size:20px;
	}
	
}	


#nav2{
	background:white;
	padding-top:170px;
	ul{
		text-align:center;
		li{
			display:inline-block;
			color:#0074c5;
			font-size:18px;
			padding:15px;
		}
	}
}



#nav3{
	height:50px;
	ul{
		text-align:center;

		li{
			display:inline-block;
			font-size:14px;
			line-height:50px;

			a{
				border-right:1px solid #ccc;
				padding-right:15px;
				padding-left:8px;
				color:#000;
				text-decoration:none
			}
		}
		li:last-child{
			a{
				border:0;
			}
		}
	}
}


#footer{
	img{
		width:60px;
		margin-left:150px;
		margin-top:5px;

	}

	p:nth-of-type(2){
		color:#ccc;
		font-size:14px;
		margin-bottom:20px;
	}
	
}
</style>