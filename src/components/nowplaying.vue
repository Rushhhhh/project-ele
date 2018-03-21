<template>
	<div>
	  <div id="up">
	  	  <span>北京</span>
	  	  <i class="iconfont icon-moreunfold"></i>
          <i class="iconfont icon-search"></i>
	  	  <input type="placeholder" value="影片/影院/影人,任你搜">
	  </div>

	  <div id="body">
	  <ul>
	     <li v-for="data in datalist" :key="data.id" @click="handleClick(data.id)">
		     <div class="first"><img :src="data.img" /></div>
		     <div class="second">
		     <h3>{{data.t}}<span>{{(data.r==-1)?'...':data.r}}</span></h3>
		     <h4>{{data.commonSpecial}}</h4>
		     <h5><span>3D</span><span>中国巨幕</span></h5>
		     <h6>{{data.NearestCinemaCount
}}家影院上映{{data.NearestShowtimeCount}}场</h6>
		     
		     <div class="pos">
		     <a href="#">
               购票
		     </a></div>
</div>
	     </li>

	  </ul>
	  </div>

	  

	</div>
</template>

<script type="text/javascript">
 import axios from "axios";
 import router from "../router"
	export default{
		name:'nowplaying',
		
		data(){
			return {
              datalist:[]
			}
		},
		methods:{
			handleClick(id){
				router.push(`/detail/${id}`);
			}
		},
		mounted(){
			axios.get("/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=201832018273613129").then(res=>{
				console.log(res.data)
				this.datalist=res.data.ms
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
		ul{
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
					color:#659d0e;
					font-weight:100;
					margin-top:13px;
				}
				h5{
					margin-top:13px;
					span{
						border:1px solid #659d0e;
						color:#659d0e;
						font-weight:100;
						margin-right:10px;
						font-size:12px;
						

					}
				}
				h6{
					font-weight:100;
					font-size:14px;
					color:#999;
					margin-top:13px;
				}
				.pos{
					a{
						background:#ff8600;
						position:absolute;
						bottom:9px;
						right:25px;
						color:#fff;
						display:block;
						width:80px;
						height:33px;
						text-align:center;
						line-height:33px;
						text-decoration:none;
						border-radius:20px;
					}
				}
			}
		}
	}
}

</style>
