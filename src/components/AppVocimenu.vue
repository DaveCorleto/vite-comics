<script>
export default {
    name: "AppVocimenu",
    props: {
        voicemenu: Array,
    }
}


</script>

<template>
    <ul>
        <li v-for="(menusingle, i) in voicemenu" key="i">{{ menusingle }}</li>
    </ul>
</template>

<style lang="scss" scoped>
ul {
    display: flex;
    justify-content: space-between;
    align-content: center;
    width: 60%;
    height: 150px;

    li {
        box-sizing: border-box;
        height: 150px;
        line-height: 150px;
    }

    li:hover {
        border-bottom: 10px solid blue;
        color: blue;
    }
}
</style>