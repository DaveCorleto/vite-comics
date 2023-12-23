<script>
export default {
    name: "AppOtherInfo",
}
</script>

<template>
    <div class="container">
        <div class="texts">
            <div class="col">
                <ul>
                    <li class="subtitle">DC COMICS</li>
                    <li>Characters</li>
                    <li>Comics</li>
                    <li>Movies</li>
                    <li>Tv</li>
                    <li>Games</li>
                    <li>Video</li>
                    <li>News</li>
                </ul>

                <ul>
                    <li class="subtitle">SHOP</li>
                    <li>Shop DC</li>
                    <li>Shop DC Collectibles</li>
                </ul>
            </div>
            <div class="col">
                <ul>
                    <li class="subtitle">DC</li>
                    <li>Therms of use</li>
                    <li>Privacy policy (new)</li>
                    <li>Ad Choices</li>
                    <li>Advertising</li>
                    <li>Jobs</li>
                    <li>Subscriptions</li>
                    <li>Talent Workshop</li>
                    <li>CPSC Certificates</li>
                    <li>Ratings</li>
                    <li>Shop Help</li>
                    <li>Contact Us</li>
                </ul>


            </div>
            <div class="col">
                <ul>
                    <li class="subtitle">SITES</li>
                    <li>DC</li>
                    <li>MAD Magazine</li>
                    <li>DC Kids</li>
                    <li>DC Universe</li>
                    <li>DC Power Visa</li>
                </ul>


            </div>
        </div>
        <div class="logo">
            <img src="C:\Coding\vite-comics\src\assets\img\dc-logo-bg.png" alt="logo bg">
        </div>

    </div>
</template>

<style lang="scss" scoped>
.col {
    padding-right: 20px;
}

.container {
    // background-color: rgb(36, 56, 56);
    background-image: url("C:/Coding/vite-comics/src/assets/img/footer-bg.jpg");
    background-position: center;
    background-size: cover;
    box-sizing: border-box;
    padding-left: 250px;
    max-width: 100%;
    color: white;
    display: flex;
    justify-content: space-between;

    .texts {
        display: flex;
        justify-content: space-between;
    }

    .subtitle {
        font-size: 15px;
        color: white;
    }

    ul {
        list-style: none;
        padding-left: 0;
        padding-top: 8px;
        color: grey;
        font-size: 10px;

        li {
            padding-top: 5px;
        }
    }

    .logo {
        padding-right: 250px;
    }

    img {
        max-width: 350px;
    }
}
</style>