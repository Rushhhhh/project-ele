<template>

<div>
	<div id="header">
		<div class="con1">
			<span><i class="iconfont icon-back"></i></span>
			<span><i class="iconfont icon-favorite"></i></span>
			<span><i class="iconfont icon-share"></i></span>
		</div>
		<div class="con2">
			<h2>水形物语 chen</h2>
			<p>the shape of water</p>
		</div>
	</div>

	<div id="main">
		<img src="http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmt%2F2018%2F03%2F07%2F104447.48999092_1280X720X2.jpg&width=420&height=280&clipType=">
		<div>
			<p>123分钟</p>
			<p>爱情奇幻剧情</p>
			<p>2018中国上映</p>
			<span>我想看</span>
			<span>我要评分</span>
		</div>
		
	</div>

	<div id="section1">
		<p>奥斯卡最佳影片讲述人鱼浪漫爱情</p>
		<span>查影讯/购票</span>
	</div>

	<div id="section2">
		<p>该片的故事背景设定在1963年的美国冷战时期，由莎莉·霍金斯饰演的哑女艾丽莎在一间政府高度机密的实验室工作，她和同事泽尔达（奥克塔维亚·斯宾瑟 饰）发现政府在试验某种鱼形怪物，被怪物吸引的艾丽莎计划帮他逃出实验室，与迈克尔·珊农饰演的实验室负责人Strickland展开对抗，从而引发了一连串神秘奇幻的冒险故事。</p>
	</div>

	<div id="section3">
		<p>共获奖7次，提名14次。</p>
		<span><i class="iconfont icon-more"></i></span>
	</div>

	<div id="section4">
		<h2>47位演员<span><i class="iconfont icon-more"></i></span></h2>
		<div class="left">
			<p>导演</p>
		</div>
		<ul class="right">
			<li>演员1</li>
			<li>演员2</li>
		</ul>
	</div>

	<div id="section5">
		<h2>网友短评</h2>
		<ul>
			<li>
				<img src="http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg2.mtime.cn%2Fimages%2Fdefault%2Fhead_48X48.gif&width=80&height=80&clipType=">
				<div>
					<p>名字</p>
					<p>评论内容</p>
					<div class="deal">
						<span><i class="iconfont icon-comments"></i>回复</span>
						<span><i class="iconfont icon-good"></i>赞</span>
					</div>
					
				</div>
			</li>
			<li>
				<img src="http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg2.mtime.cn%2Fimages%2Fdefault%2Fhead_48X48.gif&width=80&height=80&clipType=">
				<div>
					<p>名字</p>
					<p>评论内容</p>
					<div class="deal">
						<span><i class="iconfont icon-comments"></i>回复</span>
						<span><i class="iconfont icon-good"></i>赞</span>
					</div>
					
				</div>
			</li>
			<li>
				<img src="http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg2.mtime.cn%2Fimages%2Fdefault%2Fhead_48X48.gif&width=80&height=80&clipType=">
				<div>
					<p>名字</p>
					<p>评论内容</p>
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

</div>

</template>

<script>
export default {
	name:"detail",
	data(){
		return {
			
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
	}
	.right{
		float:right;
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
			div.deal{
				position:absolute;
				bottom:10px;
				right:10px;
				color:#aaa;
				i{
					font-size:20px;
					color:#ccc;
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

	input{
		width:280px;
		height:40px;
		margin-left:10px;
		margin-top:3px;
		font-size:16px;
	}
	button{
		width:50px;
		height:40px;
		font-size:16px;
		border:0;
		margin-left:15px;
	}
}
</style>