<template>
  <ul class="category">
    <h2>{{title}}</h2>
    <li v-for="(item,index) in list" :key="index">{{item}}</li>
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