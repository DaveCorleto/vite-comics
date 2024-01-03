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

<style lang="scss" scoped></style>