<template>

<div id="box1">

    
	<div class="parent">
	<div class="left"><a href="#/home"> < </a></div>
	<div class="right">
	   <ul>
		<router-link to="/list/nowplaying" tag="li" activeClass="active">正在热映</router-link>
		<router-link to="/list/comingsoon" tag="li" activeClass="active">即将上映</router-link>
	
       </ul>
   </div>

  </div>

<router-view></router-view>
</div>
</template>

<script>

import Vue from "Vue"
export default {


	name:"list",
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
	#box1{
      
		.parent{

		height:50px;
		width:100%;
		background:#1c2635;
		.left{
			float:left;
			a{
			padding-left:10px;
			color:#fff;
			line-height:50px;
			width:50px;
			text-align:center;
			font-size:20px;
			text-decoration:none;
		}
	  }
	  .right{
	  	float:right;

	  	ul{
             margin-right:64px;
             padding-top:10px;
	  		display:flex;
	  		li{
	  			color:#999;
	  			flex:1;
	  			list-style:none;
	  			height:30px;
	  			width:120px;
	  			border:1px solid #000;
	  			line-height:30px;
	  			text-align:center;
	  			border-radius:20px;
	  			background:#000;
	  		}
	  		li.active{
		      background:#1c2635;
		      color:#fff;

	     }
	  	}
	  }
	  }
	}

	

</style>
