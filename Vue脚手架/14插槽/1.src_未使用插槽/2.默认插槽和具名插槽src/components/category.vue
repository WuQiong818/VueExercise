<template>
  <ul class="category">
    <h2>{{title}}</h2>
	<slot name="center">内容正在加载中</slot>
	<slot name="foot">内容正在加载中</slot>

  </ul>
</template>

<script>
    export default {
        name:"category",
        props:["title","list"]
    }
</script>

<style>
	.category{
		background-color: skyblue;
		width: 200px;
		height: 300px;
	}
	h3{
		text-align: center;
		background-color: orange;
	}
	video{
		width: 100%;
	}
	img{
		width: 100%;
	}
</style>