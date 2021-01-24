<template>
    <div>
        <Card class="wrap-status">
            <span>Earnings</span>
            <div class="mb-8 mt-5 d-flex flex-column bl">
                <span class="grey--text">Total</span>
                <span class="font-weight-bold amount-size green--text">4 291.65 €</span>
            </div>
            <div class="line"></div>
            <div class="d-flex flex-column mt-5 bl">
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
        height: 37vh;

    }
    .amount-size {
        font-size: 25px;
    }

   @media screen and (max-height: 740px){
       .wrap-status {
           height: 40vh;
       }
       .line {
           margin: 0 !important;
       }
       .bl {
           margin-top: 10px !important;
           margin-bottom: 0 !important;
       }
       .bl span {
           margin: 0 !important;
       }
   }
    @media screen and (max-height: 610px){
        .wrap-status {
            height: 41vh;
        }
    }

</style>