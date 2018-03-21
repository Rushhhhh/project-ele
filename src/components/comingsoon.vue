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
	  </div>

	
	</div>
</template>

<script type="text/javascript">

	export default{
		name:'comingsoon',
		
		data(){
			return {

			}
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
	}
</style>
