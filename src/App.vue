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
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, nihil voluptatibus laborum, ab minus aliquam, placeat mollitia eos porro necessitatibus qui tempora modi reiciendis. Unde quibusdam aliquid nesciunt quam. Vel!
  <input type="submit" value="Submit">
</form>
asdfklasdjflasdkjf lasdjf lasdfj lasdjf lasdjfla ;sjdfla;sdkjf lasdfjl ksdf jlaskdjflsad j Akmal uchun
<div>
  <h3>Tanlangamlar</h3>
  <p>{{ javob }}</p>
</div>

Kamera bilan ishlash muammolari asdfkj dkd 

sdfsdkfj
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