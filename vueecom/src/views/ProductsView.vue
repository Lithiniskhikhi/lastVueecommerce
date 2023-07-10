<template>
    <div>
        <div class="container" >
            <div class="row">
                <div class="col" v-for="data in Music" :key="data.ID">
                    <div class="card" style="width: 15rem;">
                        <img :src="data.picture" class="card-img-top" alt="...">
                        <div class="card-body">
                            <p>{{data.name}}</p>
                            <p>{{data.genre}}</p>
                            <p>{{data.price}}</p>
                            <button>add to cart</button>
                        </div>
                      </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
      export default {
        computed:{
            Music(){
                return this.$store.state.Music
            }
        },
        mounted(){
            this.$store.dispatch('fetchMusic')
        }
    }
</script>
<style scoped>
</style>
