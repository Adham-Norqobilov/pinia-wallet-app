import {defineStore} from 'pinia'

export const useWalletStore = defineStore('wallet', {
    state:  () => ({
        balance: 100,
        transactions: []
    }),
    getters:{
        formattedBalance(state){
            return '$'+ state.balance
        },
        isLowBalance(state){
            if(state.balance < 20){
                return true
            }
            else{
                return false
            }
        },
    },
    actions: {
        deposit(amount){
            this.balance += amount;
            this.transactions.push(`Hisobingizga $${amount} qo'shildi. Hisobingizdagi umumiy mablag' $${this.balance} bo'ldi`)
        },
        withdraw(amount){
            if(this.balance < amount){
                return alert('Mablag\' yetarli emas!')
            }
            else{
                this.balance -= amount;
                this.transactions.push(`Hisobingizdan $${amount} yechildi. Hisobingizda umumiy mablag' $${this.balance} qoldi.`)
            }
            
        }
    }
})