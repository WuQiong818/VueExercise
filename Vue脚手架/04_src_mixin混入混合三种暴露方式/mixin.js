const hunhe = {
    methods: {
        showName() {
            console.log(this.name);
            console.log(this);
        }
    },
    mounted() {
        console.log("你好,我是混合1!!");
    },
}

const hunhe2 = {
	data() {
		return {
			x:100,
			y:200
		}
	},
}
export{hunhe,hunhe2}