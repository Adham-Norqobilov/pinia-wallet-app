<template>
  <h2>Mening hamyonim!</h2>
  <p>Hisobdagi mablag': <strong>{{ walletStore.formattedBalance }}</strong></p>
  <p v-if="walletStore.isLowBalance" style="color: red; font-weight: bold;">⚠️Diqqat: Mablag' kam qoldi!</p>


  <!-- Deposit -->
  <p>Deposit</p> <br>
  <button @click="walletStore.deposit(10)">10</button>
  <button @click="walletStore.deposit(20)">20</button>
  <button @click="walletStore.deposit(30)">30</button>
  <button @click="walletStore.deposit(40)">40</button>
  <button @click="walletStore.deposit(50)">50</button>


  <!-- Withdraw -->
  <p>Withdraw</p> <br>
  <button @click="walletStore.withdraw(10)">10</button>
  <button @click="walletStore.withdraw(20)">20</button>
  <button @click="walletStore.withdraw(30)">30</button>
  <button @click="walletStore.withdraw(40)">40</button>
  <button @click="walletStore.withdraw(50)">50</button>

  <!-- Transactions -->
  <p>Amallar tarixi:</p>
  <ol v-if="walletStore.transactions.length >0">
    <li v-for="x in walletStore.transactions" :key="x">
       {{ x }}
    </li>
  </ol>
</template>

<script setup>
  import {useWalletStore} from './stores/wallet.js'

  const walletStore = useWalletStore()
</script>

<style scoped>
  button{
    padding: 5px 8px;
    margin-right: 5px;
    background: rgb(19, 168, 19);
    border: solid black 1px;
    border-radius:4px;
    cursor: pointer;
    transition: .2s;
  }
  button:active{
    background: lightgreen;
  }
</style>