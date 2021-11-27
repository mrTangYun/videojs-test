<template>
  <div class="home">
    <router-link to="/login">登陆</router-link>
    <router-link to="/home">主页</router-link>
    <router-link to="/artworks?id=23412341234">作品列表</router-link>
    <router-link to="/file-reader">文件预览</router-link>
    <router-link to="/rate">打分</router-link>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
}
</style>
