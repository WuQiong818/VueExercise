<template>
  <div class="col-xs-6">
    <div class="panel">
      <div class="panel-body">
        <div>
          <h2>Home组件内容</h2>
          <div>
            <ul class="nav nav-tabs">
              <li>
                <router-link class="list-group-item active" to="/home/home-news"
                  >News</router-link
                >
              </li>
              <li>
                <router-link class="list-group-item" to="/home/home-message"
                  >Message</router-link
                >
              </li>
            </ul>
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>