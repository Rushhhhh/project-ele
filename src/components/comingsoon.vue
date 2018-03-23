<template>
	
	<div>
	  <div id="up">
	  	  <span>北京</span>
	  	  <i class="iconfont icon-moreunfold"></i>
          <i class="iconfont icon-search"></i>
	  	  <input type="placeholder" value="影片/影院/影人,任你选">
	  </div>
	  

	  <div id="body">
		  <h1>最受关注<span>(9部)</span></h1>
	      <h2><span>{{datalist.rMonth}}</span>月<span>{{datalist.rDay}}</span>日</h2>
	      <div class="one">
             <div class="first"><img :src="datalist.image" /></div>
		     <div class="second">
			     <h3>{{datalist.title}}</h3>
			     <h4><span>{{datalist.wantedCount}}</span>人想看 - {{datalist.type}}</h4>
			     <h5>导演 : {{datalist.director}}</h5>
			     <h5>演员 : {{datalist.actor1}},{{datalist.actor2}}</h5>
			     
		     
		     <div class="pos">
		     <a href="#" class="span1"> 超前预告</a>
		     <a href="#" class="span2">预告片</a>
              
		     </div>
          </div>
	     </div>
	   </div>



	  <div class="pic">
	       <h1><img src="https://static1.mtime.cn/feature/mobile/banner/2018/0319/sjk750210.jpg" /></h1>
       </div>


    <div id="bottom">
		  <h1>即将上映<span>(45部)</span></h1>
	      <h2><span>{{numlist[0]?numlist[0].rMonth:''}}</span>月<span>{{numlist[0]?numlist[0].rDay:''}}</span>日</h2>
	      <ul>
	        <li class="one" v-for="data in numlist" @click="handleClick(data.id)">
             <div class="first"><img :src="data.image" /></div>
		     <div class="second">
			     <h3>{{data.title}}</h3>
			     <h4><span>{{data.wantedCount}}</span>人想看 - {{data.type}}</h4>
			     <h5>导演 : {{data.director}}</h5>
			    
			     
		     
		     <div class="pos">
		     <a href="#" class="span1"> 超前预告</a>
		     <a href="#" class="span2">预告片</a>
              
		     </div>
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

<script type="text/javascript">
 import axios from "axios";
 import router from "../router";
	export default{
		name:'comingsoon',
		
		data(){
			return {
               datalist:'',
               piclist:'',
               numlist:[],
			}
		},
		methods:{
			handleClick(id){
				router.push(`/detail/${id}`);
			}
		},

		mounted(){
			axios.get("/Service/callback.mi/Movie/MovieComingNew.api?locationId=290&t=2018321871438507").then(res=>{
				/* console.log(res.data.attention[0]); */
				this.datalist=res.data.attention[0]
			})

			axios.get("/Service/callback.mi/Advertisement/MobileAdvertisementInfo.api?locationId=290&t=201832110592620505").then(res=>{

                 /*  console.log(res.data.advList[0]) */
                 this.piclist=res.data.advList[0];
				})

			axios.get("/Service/callback.mi/Movie/MovieComingNew.api?locationId=290&t=2018321871438507").then(res=>{
				// console.log(res.data.moviecomings);
				this.numlist=res.data.moviecomings
			})
		}
	}
</script>

<style lang="scss" scoped>
*{
   	margin:0;
   	padding:0;
   }
	#up{
		height:62px;
		background:#f6f6f6;
		position:relative;
		border-bottom:1px solid #ccc;
		span{
			font-size:18px;
			line-height:62px;
			margin-left:18px;
			margin-right:9px;

		}
		.icon-search{
			position:absolute;
			top:24px;
			left:118px;
		}
		input{
			height:40px;
			border:1px solid #ccc;
			border-radius:8px;
			text-align:center;
			font-size:17px;
			color:#999;
			padding-left:5px;
			width:220px;
			margin-left:20px;

		}
	}

	#body{
		background:#fff;
		h1{
			font-size:22px;
			padding:18px;
			span{
				color:#999999;
			}
		}
		h2{
			font-size:16px;
			font-weight:100;
			color:#999;
			padding-left:18px;
		}
		.one{
				position:relative;
				width:100%;
				border-bottom:1px solid #ececec;
				list-style:none;
				padding-top:18px;
				padding-left:18px;
				height:150px;
				.first{
					float:left;
				img{
					height:115px;
					width:78px;
					padding-right:18px;

				}
			}
			.second{
				float:left;
				
				h3{
					font-size:17px;
					span{
						background:#659d0e;
						color:#fff;
						font-weight:100;
						font-size:14px;
						margin-left:20px;
						width:20px;
						height:15px;
						padding-left:5px;
						padding-right:5px;
					}

				}
				h4{
					color:#999;
					font-weight:100;
					margin-top:10px;
					span{
						color:#659d0e;
					}
				}
				h5{
					margin-top:10px;
					color:#999;
					font-weight:100;
					
				}
				
				.pos{
					
					.span1{
						background:#ff8600;
						position:absolute;
						bottom:9px;
						left:111px;
						color:#fff;
						display:block;
						width:97px;
						height:33px;
						text-align:center;
						line-height:33px;
						text-decoration:none;
						border-radius:20px;
					}
					.span2{
						color:#659d0e;
						border:1px solid #659d0e;
						position:absolute;
						width:97px;
						height:33px;
						display:block;
						line-height:33px;
						text-align:center;
						text-decoration:none;
						border-radius:20px;
						bottom:7px;
						right:49px;
					}
				   
				}
			}
		}
	}

	.pic{
		height:130px;
		img{
			height:130px;
			width:100%;
		}
	}




	#bottom{
		background:#fff;
		h1{
			font-size:22px;
			padding:18px;
			span{
				color:#999999;
			}
		}
		h2{
			font-size:16px;
			font-weight:100;
			color:#999;
			padding-left:18px;
		}
		li{
				position:relative;
				width:100%;
				border-bottom:1px solid #ececec;
				list-style:none;
				padding-top:18px;
				padding-left:18px;
				height:150px;
				.first{
					float:left;
				img{
					height:115px;
					width:78px;
					padding-right:18px;

				}
			}
			.second{
				float:left;
				
				h3{
					font-size:17px;
					span{
						background:#659d0e;
						color:#fff;
						font-weight:100;
						font-size:14px;
						margin-left:20px;
						width:20px;
						height:15px;
						padding-left:5px;
						padding-right:5px;
					}

				}
				h4{
					color:#999;
					font-weight:100;
					margin-top:10px;
					span{
						color:#659d0e;
					}
				}
				h5{
					margin-top:10px;
					color:#999;
					font-weight:100;
					
				}
				
				.pos{
					
					.span1{
						background:#ff8600;
						position:absolute;
						bottom:9px;
						left:111px;
						color:#fff;
						display:block;
						width:97px;
						height:33px;
						text-align:center;
						line-height:33px;
						text-decoration:none;
						border-radius:20px;
					}
					.span2{
						color:#659d0e;
						border:1px solid #659d0e;
						position:absolute;
						width:97px;
						height:33px;
						display:block;
						line-height:33px;
						text-align:center;
						text-decoration:none;
						border-radius:20px;
						bottom:7px;
						right:49px;
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
