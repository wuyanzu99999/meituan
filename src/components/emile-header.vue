<template>
  <div class="emile-header">
      <p class="top-message">消息</p>
      <p class="top-no">清除未读</p>
  </div>
</template>

<script>

export default {
  name: 'emileHeader',
  data(){
    return {
    }
  }
}
</script>

<style scoped>
.emile-header {
    width: 100%;
    height: 56px;
    background-color: #ffd101;
}

.emile-header .top-message {
    position: absolute;
    top: 16px;
    left: 164px;
    font-size: 19px;
}

.emile-header .top-no {
    position: absolute;
    top: 13px;
    right: 15px;
    font-size: 14px;
}
</style>