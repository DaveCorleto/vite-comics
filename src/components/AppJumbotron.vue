<script>
export default {
    name: "AppJumbotron",
}
</script>

<template>
    <div class="container">
        <span class="current">CURRENT SERIES</span>
    </div>
</template>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 400px;
    background-image: url("../assets/img/jumbotron.jpg");
    position: relative;
}

.current {
    background-color: rgb(97, 56, 211);
    color: white;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 20px;
    position: absolute;
    bottom: 0;
    transform: translateY(50%);
    left: 250px;
}
</style>
