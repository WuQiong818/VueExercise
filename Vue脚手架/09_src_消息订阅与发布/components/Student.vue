<template>
	<div>
		<h2>学生姓名：{{name}}</h2>
		<h2>学生年龄：{{age}}</h2>
		<button @click="sendStudentName">点击展示学生姓名</button>
		<!-- <button @click="unbind">点击解绑事件</button> -->
	</div>
</template>

<script>
import pubsub from 'pubsub-js'
	 export default {
		name:'Student',
		data(){
			return {
				name:'张三',
				age:18
			}
		},
		methods: {
			sendStudentName(){
				pubsub.publish('hello',666)
			},
		},
	}
</script>
