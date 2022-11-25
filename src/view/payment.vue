<template>
  <div>
    <template>

      <h1>paymentInfo(결제 정보)</h1>

      <div>
        <button @click="readItems">get</button>
        <div v-for="item in items" :key="item.id" :item="item">
          {{item.id}} || {{item.title}} <br> 결제고객번호 : {{item.user_id}}
        </div>
      </div>

      <input type="text" v-model="item.title" placeholder="name"/>
      <input type="text" v-model="item.user_id" placeholder="user_id"/>
      <button @click="createItem">create</button>

      <br><br>

      <div>
        <input type="text" v-model="itemId">
        <button @click="changeItem">change</button>
      </div>

      <button @click="deleteItem">delete</button>


      <div>
        <button @click="$router.push('/user')">move to user</button>
        <button @click="$router.push('/purOrder')">move to purOrder</button>
        <button @click="$router.push('/prod')">move to prod</button>
      </div>


    </template>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "payment",

  computed:{

  },

  data: () => ({
    item:{id: 0},
    httpVt:'http://localhost:8082/',
    http:'http://localhost/api/payments',
    changeData: '',
    items: [],
    itemId: 0,

  }),


  methods:{
    async readItems(){
      const res = await axios.get(this.http)
      console.log(res.data.data)
      this.items = res.data.data
    },

    async createItem() {
      const res = await axios.post(this.http,{...this.item} )
      console.log(res)
    },

    async changeItem(){
      const res = await axios.patch(this.http + `/${this.itemId}`, { ...this.item})
      console.log(res)
    },

    async deleteItem(){
      const res = await axios.delete(this.http + `/${this.itemId}`, { ...this.item})
      console.log(res)
    }

  },


  watch: {
    'item': {
      deep: true,
      handler() {
        console.log('watch', this.item)
      }
    }
  }

}
</script>

<style scoped>

</style>