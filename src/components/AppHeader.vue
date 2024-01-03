<script>
import AppVocimenu from './AppVocimenu.vue';

export default {
    name: "AppHeader",
    components: {
        AppVocimenu,
    },
    data() {
        return {
            menu: [
                'CHARACTERS', 'COMICS', 'MOVIES', 'TV', 'GAMES', 'COLLECTIBLES', 'VIDEOS', 'FANS', 'NEWS', 'SHOP'
            ],
        };
    },
};
</script>

<template>
    <nav class="division">
        <div class="logo">
            <img src="C:\Coding\vite-comics\src\assets\img\dc-logo.png" />
        </div>
        <AppVocimenu :voicemenu="menu" />
    </nav>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixins" as *;
</style>
