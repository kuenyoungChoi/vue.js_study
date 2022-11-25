<template>
<div>
  <button @click="$router.go(-1)">뒤로가기</button>

  <template>
    <h1>User(사용자)</h1>


    <div v-for="item in items" :key="item.id" :item="item">

      <br>
      {{item.id}} || {{item.name}}
    </div>
    <button @click="readItems">get</button>

    <div>
      <input type="text" placeholder="name" v-model="item.name">
      <button @click="createItem">create</button>
    </div>

    <div>
      <input type="number" placeholder="index" v-model="item.index">
      <button @click="changeItem">change</button>
    </div>

    <div>
      <button @click="deleteItem">delete</button>
    </div>

    <div>
      <textarea name="join" id="" cols="30" rows="10"></textarea>
    </div>

    <div>
      <button @click="$router.push('/')">move to payment</button>
      <button @click="$router.push('/purOrder')">move to purOrder</button>
    </div>
  </template>





</div>
</template>

<script>
import axios from "axios";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "user",


  computed:{
    // computedUserPay(){
    //    const outs = this.items.map( v => {
    //
    //   })
    //   return outs
    // }
  },

  data : () => {
    return{
      items: [],
      item: {},
      http: 'http://localhost/api',
    }
  },

  methods:{
    async readItems(){
      const res = await axios.get(this.http + '/users')
      this.items = res.data.data
    },

    async createItem(){
      const res = await axios.post(this.http + '/users', {...this.item})
      console.log(res)
    },

    async changeItem(){
      const res = await axios.put(this.http + `/users/${this.item.index}`, {...this.item})
      console.log(res)
    },

    async deleteItem(){
      const res = await axios.delete(this.http + `/users/${this.item.index}`, {...this.item})
      console.log(res)
    }
  },






watch:{
    'item':{
      deep: true,
      handler(){
        console.log('watch', this.items)
      }
    }
}

}
</script>

<style scoped>

</style>