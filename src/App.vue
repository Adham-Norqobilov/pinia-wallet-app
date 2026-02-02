<template>
  <h1>Drop-down list in vue</h1>
<form @submit.prevent="tekshiruv(carSelected)">
  <label for="mashinalar">Choose a car:</label>
  <select v-model="carSelected" id="mashinalar">
    <option disabled value="">Please select one</option>
    <option value="Mercedez-Benz">Mercedez-Benz</option>
    <option value="BMW">BMW</option>
    <option value="Audi">Audi</option>
    <option value="Cadilac">Cadilac</option>
  </select>
  <br>
  <input type="submit" value="Submit">
</form>

<div>
  <h3>Tanlangamlar</h3>
  <p>{{ javob }}</p>
</div>
</template>

<script>
export default {
  data() {
    return {
      carSelected: '',
      javob: 'Tanlanmagan'
    }

  },
  methods: {
    tekshiruv(param){
      if(param){
        this.javob = param
      }
    }
  }
}
</script>

<style scoped>

</style>