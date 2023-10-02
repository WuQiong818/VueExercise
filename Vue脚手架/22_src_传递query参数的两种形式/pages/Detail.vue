<template>
  <div>
    <h6>{{$route.query.id}}</h6>
    <h6>{{$route.query.title}}</h6>
  </div>
</template>

<script>
    export default {
        mounted() {
            console.log(this);
        },
    }
</script>

<style>

</style>