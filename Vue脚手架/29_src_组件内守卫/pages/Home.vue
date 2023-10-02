<template>
  <div class="col-xs-6">
    <div class="panel">
      <div class="panel-body">
        <div>
          <h2>Home组件内容</h2>
          <div>
            <ul class="nav nav-tabs">
              <li>
                <router-link
                  class="list-group-item"
                  active-class="active"
                  to="/home/home-news"
                  >News</router-link
                >
              </li>
              <li>
                <router-link
                  class="list-group-item"
                  active-class="active"
                  to="/home/home-message"
                  >Message</router-link
                >
              </li>
            </ul>
            <keep-alive include='Message'>
              <router-view></router-view>
            </keep-alive>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to,from,next){
    console.log("beforeRouteEnter",to,from);
    next()
  },
  
  beforeRouteLeave(to,from,next){
    console.log("beforeRouteLeave",to,from);
    next()
  }
};
</script>

<style>
</style>