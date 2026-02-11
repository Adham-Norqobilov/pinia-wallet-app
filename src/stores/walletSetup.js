import {defineStore} from 'pinia'
import {ref, computed} from 'vue'

export const useWalletSetupStore = defineStore('bank', () =>{

const balance = ref(1000)
const history =ref([])

const vipStatus = computed(()=>{
    if(balance.value >= 5000){
        return 'VIP mijoz'
    }
    else{
        return 'Oddiy mijoz'
    }
})

function deposit(amount){
    balance.value += amount;
    history.value.push(`Hisobingnizga ${amount} so'm qo'shildi. Hisobingizda ${balance.value} so'm mavjud.`)
}
function withdraw(amount){
    if(balance.value >= amount){
        balance.value -= amount;
    }
    else{
        alert('Hisobingizda mablag\' yetarli emas.')
    }
    history.value.push(`Hisobingizdan ${amount} so'm yechildi. Hisobingizda ${balance.value} qoldi.`)
}


return {
    balance,
    history,
    vipStatus,
    deposit,
    withdraw,
}
})

