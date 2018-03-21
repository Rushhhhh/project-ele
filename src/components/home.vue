<template>

<div>
	<nav>
		<h1><a href=""><img src="http://static1.mtime.cn/html5/20180208104315/images/2014/logo_mtime.png" alt=""></a></h1>
		<ul>
			<li>首页</li>
			<li>购票</li>
			<li>商城</li>
			<li>发现</li>
		</ul>
		<a href="#/login" style="color:white"><i class="iconfont icon-account"></i></a>
	</nav>

    <div id="search">
    	<p>
    		<span>北京</span>
    		<span><i class="iconfont icon-moreunfold"></i></span>
    	</p>
    	<div>
    		<input type="text" placeholder="影片/影院/影人，任你搜">
    		<span><i class="iconfont icon-search"></i></span>
    	</div>
    </div>
   
    <div id="nowplaying">
    	<h2>正在热映(39部)</h2>
    	<span><a href="#/list"><i class="iconfont icon-more"></i></a></span>
    	<ul>
    		<li v-for="data in filminfo" :key="data.id" @click="handleClick(data.id)">
    			<img :src="data.img">
    			<p>{{data.t}}</p>
    		</li>
    	</ul>
    	<h2>即将上映(48部)</h2>
    	<span class="soon"><a href="#/list/comingsoon"><i class="iconfont icon-more"></i></a></span>

    </div>

    <div id="news">
    	<h2>今日热点</h2>
    	<ul>
    		<li v-for="data in hotlist">
    			<img :src="data.img" alt="">
    			<div>
    				<h3>{{data.title}}</h3>
    				<p>{{data.desc}}</p>
    			</div>
    			
    		</li>
    	</ul>
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
 import router from "../router"
export default {
	name:"home",
	data(){
		return {
			filminfo:[],
			hotlist:[],
		}
	},
	mounted(){
		axios.get("/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=20183201143288969").then(res=>{
			this.filminfo = res.data.ms.splice(0,8);
			// console.log(this.filminfo);
		}).catch(error=>{
			console.log(error);
		})

		axios.get("/Service/callback.mi/PageSubArea/GetFirstPageAdvAndNews.api?t=2018320163167283").then(res=>{
			console.log(res.data)
			this.hotlist = res.data.hotPoints;
			
		}).catch(error=>{
			console.log(error);
		})

	},
	methods:{
		handleClick(id){
			router.push(`/detail/${id}`);
		}
	}
}

	
</script>



<style lang="scss" >
body{
	background:#f6f6f6;
}
*{
	margin:0px;
	padding:0px;

}
a{
	text-decoration:none;
}
li{
	list-style:none;
}

nav{
	height:50px;
	background:#1c2635;
	color:white;
	line-height:50px;
	h1{
		float:left;
		width:70px;
		padding-left:10px;

		img{
			width:80px;
		}
	}
	ul{
		float:left;
		test-align:center;
		padding-left:15px;
		color:#bbb;
		li{
			display:inline-block;
			padding:0 15px;
		}
	}
	.iconfont{
		font-size:18px;
		margin-left:20px;
	}
	
}

#search{
	height:60px;
	line-height:50px;
	background:#f6f6f6;
	border-bottom:1px solid #e4e4e4;
	p{
		display:inline-block;
		float:left;
		margin-left:20px;
		font-size:20px;
	}
	div{
		position:relative;
		
		input{
			width:250px;
			height:45px;
			border:1px solid #c7c7c7;
			border-radius:12px;
			margin-left:15px;
			padding-left:10px;
			font-size:20px;
			color:#777;
			margin-top:5px;
		}
		i{
			position:absolute;
			font-size:18px;
			top:3px;
			left:325px;
		}
	}
}

#nowplaying{
	position:relative;
	margin-top:10px;
	padding:10px;
	background:#fff;
	.soon{
		position:absolute;
		right:20px;
		top:420px;
	}
	h2{
		padding:5px;
	}
	span{
		position:absolute;
		top:15px;
		right:20px;
		i{
			font-size:22px
		}
	}
	ul{
		overflow:hidden;
		border-bottom:1px solid #e7e7e7;
		padding-bottom:15px;
		li{
			float:left;
			width:80px;
			height:160px;
			margin:5px 8px;
			img{
				width:80px;
				height:115px;
				border:1px solid #9fa6a4;
			}
		}
	}
}
	

#news{
	background:white;
	margin-top:10px;
	h2{
		padding:5px;
	}
	ul{
		li{
			height:130px;
			border-bottom:1px solid #ccc;
			img{
				height:100px;
				float:left;
				border:1px solid #ccc;
				margin-left:10px;
				margin-top:15px
			}
			div{
				margin-left:12px;
				float:left;
				color:#a7a7a7;
				h3{
					margin-top:15px;
					color:#000
				}
			}
		}
	}

}




#nav2{
	background:white;
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
