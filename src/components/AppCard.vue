<script>
import AppFather from './AppFather.vue';

export default {
    name: "AppCard",
    props: {
        thumbprops: String,
        prezzo: String,
        serie: String,
        tipo: String,
    },
};
</script>

<template>
    <div class="card">
        <div class="image">
            <img :src="thumbprops" alt="serie">
        </div>
        <div class="caption">{{ serie }}</div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    width: calc((100% / 6) - 25px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .image {
        width: 100%;
        aspect-ratio: 1/1;
        overflow: hidden;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center top;
    }

    .caption {
        text-align: center;
        font-size: 17px;
        padding: 5px;
        color: white;
    }
}
</style>