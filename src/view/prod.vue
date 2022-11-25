<template>
  <div>
    <div>
      <button @click="readItems">get prod list</button>
    </div>

    <div v-for="item in items" :key="item.id" :item="item">
         {{item.id}}      ||        {{item.title}} || {{item.cost}}
    </div>

    <div>
      <input type="number" v-model="prodNum">
      <button @click="putProd(prodNum)">select</button>
      <button @click="createItem">buy</button>
    </div>

    <div>
      <button @click="$router.push('/user')">move to user</button>
      <button @click="$router.push('/purOrder')">move to purOrder</button>
      <button @click="$router.push('/')">move to payment</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
// eslint-disable-next-line vue/multi-word-component-names
  name: "prod",

  data: () => {
    return{
      items: [],
      prodNum: 0,
      itemId: '',
      http: 'http://localhost/api/prods',
      params:{
        prodId:[]
      },
    }
  },


  methods: {
    async readItems(){
      const res = await axios.get(this.http)
      this.items = res.data.data
      console.log(this.items)
    },
    async createItem(){
      const res = await axios.post(this.http , {...this.params})
      console.log(res)
    },
    putProd(val){
      this.params.prodId.push(val)
    }
  },

  watch: {
    prodNum: {
      deep: true,
      handler () {
        console.log(this.prodNum)
      }
    },
  }


}
</script>

<style scoped>

</style>