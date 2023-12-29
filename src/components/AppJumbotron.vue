<script>
export default {
    name: "AppJumbotron",
}
</script>

<template>
    <div class="container">
        <img src="C:/Coding/vite-comics/src/assets/img/jumbotron.jpg" alt="">
    </div>
</template>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 400px;
}

img {
    height: 100%;
    object-fit: cover;
    object-position: top;
}
</style>
