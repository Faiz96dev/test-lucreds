<template>
    <div>
        <Card class="wrap-status">
            <span>Earnings</span>
            <div class="mb-8 mt-5 d-flex flex-column">
                <span class="grey--text">Total</span>
                <span class="font-weight-bold amount-size green--text">4 291.65 €</span>
            </div>
            <div class="line"></div>
            <div class="d-flex flex-column mt-5">
                <span class="grey--text">Your earnings on January</span>
                <span class="mt-5 font-weight-bold amount-size green--text">8 497.20 €</span>
            </div>
        </Card>
    </div>
</template>

<script>
    import Card from "../Card";
    export default {
        name: "Earnings",
        components: {Card},
        props: {
            height: Number,
            width:Number
        },
    }

</script>

<style scoped>

    .line {
        width: 100%;
        height: 1px;
        background: #dddddd;
    }
    .wrap-status {
      padding: 20px;
        height: 40vh;
    }
    .amount-size {
        font-size: 25px;
    }


</style>
