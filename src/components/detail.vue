<template>

<div>
	<div id="header">
		<div class="con1">
			<span><a href="#/list"><i class="iconfont icon-back" style="color:white"></i></a></span>
			<span><i class="iconfont icon-favorite"></i></span>
			<span><i class="iconfont icon-share"></i></span>
		</div>
		<div class="con2">
			<h2>{{info.titleCn}}</h2>
			<p>{{info.titleEn}}</p>
		</div>
	</div>

	<div id="main">
		<img :src="info.image">
		<div>
			<p>{{info.runTime}}分钟</p>
			<p>{{info.type}}</p>
			<p>{{info.year}}年</p>
			<span>我想看</span>
			<span>我要评分</span>
		</div>
		
	</div>

	<div id="section1" class="isFixed">
		<p>{{info.commonSpecial}}</p>
		<div :class="searchBarFixed==true?'isFixed':''"><span>查影讯/购票</span></div>
	</div>

	<div id="section2">
		<p>{{info.content}}</p>
	</div>

	<div id="section3">
		<p>共获奖7次，提名14次。</p>
		<span><i class="iconfont icon-more"></i></span>
	</div>

	<div id="section4">
		<h2>{{info.personCount}}位演员<span><i class="iconfont icon-more"></i></span></h2>

		<div class="left">
			<p>导演</p>
			<img :src="info.director?info.director.directorImg:''" >
			<p>{{info.director?info.director.directorName:''}}</p>
			<p>{{info.director?info.director.directorNameEn:''}}</p>
		</div>
		<ul class="right">
			<p>主要演员</p>
			<li v-for="data in info.actorList" >
				<img :src="data.actorImg">
				<p>{{data.actor}}</p>
				<p>{{data.actorEn}}</p> 

			</li>
		</ul>
	</div>

	<div id="section5" v-if="comment.length>0?true:false">
		<h2>网友短评</h2>
		<ul>
			<li v-for="data in comment">
				<img :src="data.headurl">
				<div>
					<p>{{data.nickname}}</p>
					<div class="cm"><p>{{data.content}}</p></div>
					<div class="deal">
						<span><i class="iconfont icon-comments"></i>回复</span>
						<span><i class="iconfont icon-good"></i>赞</span>
					</div>
					
				</div>
			</li>
	

		</ul>
	</div>

	<div id="message">
		<input type="text" placeholder="留下我想说的">
		<button>发送</button>
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
import Vue from "Vue";
export default {

	name:"detail",
	data(){
		return {
			info:[],
			comment:[],
			searchBarFixed:false,
			isShow:false
		}
	},
	mounted(){
		console.log(this.$route.params);
		axios.get(`/Service/callback.mi/movie/Detail.api?movieId=${this.$route.params.id}&locationId=290&t=20183219145214566`).then(res=>{
			// console.log(res.data)
			this.info = res.data
			
		}).catch(error=>{
			console.log(error);
		})

		axios.get(`/Service/callback.mi/Movie/HotLongComments.api?movieId=${this.$route.params.id}&pageIndex=1&t=20183219364230970`).then(res=>{
			
			this.comment = res.data.comments;
			// console.log(this.comment.length);
			// console.log(this.comment)
			
		}).catch(error=>{
			console.log(error);
		})

		window.addEventListener("scroll",this.handleScroll)

	},
	methods:{
		handleScroll(){
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
			// console.log(scrollTop);
			var offsetTop =document.querySelector('#section1')?document.querySelector('#section1').offsetTop:'';
			if (scrollTop > offsetTop) {
				 this.searchBarFixed = true;
				 } else {
				 this.searchBarFixed = false
				 }
		}
	}
}

	
</script>



<style lang="scss" scoped>
*{
	margin:0px;
	padding:0px;
}
li{
	list-style:none;
}

#header{
	background:url("http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmt%2F2018%2F03%2F07%2F104447.48999092_1280X720X2.jpg&width=420&height=280&clipType=") no-repeat -1500px -80px;
	background-size:2000px 300px;
	.con1{
		heigth:50px;
		line-height:50px;
		color:rgba(255,255,255,0.7);
		i{
			font-size:26px;
		}
		span:nth-of-type(1){
			padding:10px;
		}
		span:nth-of-type(2){
			margin-left:220px;
		}
		span:nth-of-type(3){
			margin-left:20px;
		}
	}
	.con2{
		color:white;
		margin-left:160px;
		p{
			line-height:30px;
		}
	}

}

#main{
	background:white;
	position:relative;
	height:150px;
	img{
		width:130px;
		border:2px solid #fff;
		position:absolute;
		left:20px;
		top:-60px;
	}
	div{
		float:right;
		margin-right:20px;
		margin-top:10px;
		font-weight:bold;
		line-height:25px;
		span:nth-of-type(1){
			color:#ccc;
			border:1px solid #ccc;
			padding:8px 20px;
			border-radius:20px;
			line-height:50px;
			font-weight:100;
		}
		span:nth-of-type(2){
			color:#659c0d;
			border:1px solid #659c0d;
			padding:8px 15px;
			border-radius:20px;
			line-height:50px;
			font-weight:100;

		}
	}
}

#section1{
	background:white;
	padding-bottom:50px;
	 .isFixed{
	 	position:fixed;
	 	top:0px;
	 	background:#fff;
	 	width:100%;
	 	padding:20px 0px;
	 	z-index:2;
	 }
	p{
		color:#fd8900;
		text-align:center;
		margin-bottom:20px;
	}
	span{
		background:#fd8900;
		color:white;
		font-size:18px;
		font-weight:bold;
		padding:10px 110px;
		margin-left:30px;
		border-radius:50px;
	}
}

#section2{
	background:white;
	margin-top:20px;
	padding:10px;
}
#section3{
	background:white;
	margin-top:20px;
	padding:10px;
	position:relative;
	span{
		position:absolute;
		top:10px;
		right:10px;
		i{
			font-size:22px;
			color:#555;
		}
	}
}

#section4{
	background:white;
	margin-top:20px;
	overflow:hidden;
	h2{
		position:relative;
		span{
			position:absolute;
			top:10px;
			right:10px;
			i{
				font-size:22px;
				color:#555;
			}
		}	
	}
	.left{
		float:left;
		width:100px;
		border-right:1px solid #ccc;
		padding-right:20px;
		margin-left:10px;
		img{
			width:100px;
		}
	}
	.right{
		float:right;
		height:150px;
		li{
			width:100px;
			float:left;
			height:150px;
			margin-right:20px;
			img{
				width:100px;
				height:130px;
			}
		}
	}
}


#section5{
	background:white;
	margin-top:20px;
	ul{
		margin:20px;
		
		li{
			height:100px;
			position:relative;
			padding:10px 1px;
			>div{
				margin-left:10px;
				width:300px;
				height:65px;
				overflow:hidden;
				padding-left:20px;
				}
			div.deal{
				position:absolute;
				bottom:0px;
				right:10px;
				color:#555;
				
				i{
					font-size:20px;
					color:#ccc;
					margin:5px;
				}
			}

			img{
				float:left;
				width:50px;
				border-radius:50%;


			}
		}
	}
}


#message{
	background:#eee;
	position:fixed;
	bottom:0px;
	height:50px;
	width:100%;

	input{
		width:300px;
		height:40px;
		margin-left:10px;
		margin-top:3px;
		font-size:16px;
	}
	button{
		width:80px;
		height:40px;
		font-size:16px;
		border:0;
		margin-left:5px;
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
	margin-bottom:50px;
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