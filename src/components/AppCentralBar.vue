<script>
export default {
    name: "AppCentralBar",
}
</script>

<template>
    <nav id="central">
        <div class="section">
            <img src="C:\Coding\vite-comics\src\assets\img\buy-comics-digital-comics.png" alt="digital comics">
            <div>DIGITAL COMICS</div>
        </div>
        <div class="section">
            <img src="C:\Coding\vite-comics\src\assets\img\buy-comics-merchandise.png" alt="Merchandise">
            <div>MERCHANDISE</div>
        </div>
        <div class="section">
            <img src="C:\Coding\vite-comics\src\assets\img\buy-comics-subscriptions.png" alt="SUBSCRIPTION">
            <div>SUBSCRIPTION</div>
        </div>
        <div class="section">
            <img src="C:\Coding\vite-comics\src\assets\img\buy-comics-shop-locator.png" alt="shop locator">
            <div>COMIC SHOP LOCATOR</div>
        </div>
        <div class="section">
            <img src="C:\Coding\vite-comics\src\assets\img\buy-dc-power-visa.svg" alt="power visa">
            <div>DC POWER VISA</div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
.section {
    display: flex;
    flex-basis: 15%;
    align-items: center;

    img {
        width: 50px;
        padding-right: 10px;
    }
}

#central {
    background-color: rgb(28, 88, 219);
    display: flex;
    color: white;
    height: 200px;
    font-size: 15px;
}
</style>