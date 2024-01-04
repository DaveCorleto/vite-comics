<script>
export default {
    name: "AppFooter",
}
</script>

<template>
    <footer>
        <span class="sign-up">SIGN-UP NOW!</span>
        <nav>
            <span class="follow-us">FOLLOW US</span>
            <img src="../assets/img/footer-facebook.png" alt="Facebook">
            <img src="../assets/img/footer-twitter.png" alt="Facebook">
            <img src="../assets/img/footer-youtube.png" alt="Facebook">
            <img src="../assets/img/footer-pinterest.png" alt="Facebook">
            <img src="../assets/img/footer-periscope.png" alt="Facebook">

        </nav>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    height: 80px;
    background-color: rgb(33, 56, 56);
    display: flex;
    align-items: center;
    justify-content: space-between;

    .sign-up {
        padding: 10px;
        border: 2px solid rgb(109, 109, 235);
        color: white;
        margin-left: 250px;
    }

    nav {
        margin-right: 250px;
        display: flex;
        align-items: center;

        .follow-us {
            color: rgb(65, 183, 223);
            font-weight: 600;
        }

        img {
            padding-left: 15px;
        }

    }

}
</style>