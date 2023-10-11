import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
export const useChannelStore = defineStore("channel",()=>{
    //数据
    const channelList = ref([])

    //方法
    const getList = async () => {
        // 支持异步
        // const info = await axios.get('http://geek.itheima.net/v1_0/channels');
        // console.log("info",info.data.data.channels);
        const {data:{data}} = await axios.get('http://geek.itheima.net/v1_0/channels');
        
        channelList.value = data.channels
        console.log(data.channels);
    }
    return {
        channelList,
        getList
    }
})