<template>
  <div>
   <div id="top" @click="handclick">
	<div><i class="iconfont icon-less"></i></div>
	</div>
  	<router-view></router-view>

  </div>
</template>

<script>
import Vue from "Vue"
export default {
  name: 'App',
  methods:{
  	handclick:function(){
  		 document.documentElement.scrollTop =  0;
  	}
  }
}


</script>

<style>

#top{
      	position:fixed;
      	bottom:100px;
      	right:41px;
      	z-index:1;
      	width:50px;
      	height:50px;
      	border:1px solid #999;
      	border-radius:50%;
      	text-align:center;
      	line-height:50px;
      	.iconfont{

        display:block;
        font-size:26px !important;
      	
      }
    }
</style>
