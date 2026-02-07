import { defineStore } from 'pinia'

export const useWalletStore = defineStore('wallet', {
    state: () => {
        // 1. Avval xotirada ma'lumot bormi deb tekshiramiz
        const savedData = localStorage.getItem('my-wallet')

        // 2. Agar bo'lsa, o'shani obyektga aylantirib olamiz
        if (savedData) {
            return JSON.parse(savedData)
        }

        // 3. Agar yo'q bo'lsa (birinchi marta kirganda), standart qiymatni beramiz
        return {
            balance: 100,
            transactions: []
        }
    },
    getters: {
        formattedBalance(state) {
            return '$' + state.balance
        },
        isLowBalance(state) {
            if (state.balance < 20) {
                return true
            }
            else {
                return false
            }
        },
    },
    actions: {
        deposit(amount) {
            this.balance += amount;
            this.transactions.push(`Hisobingizga $${amount} qo'shildi. Hisobingizdagi umumiy mablag' $${this.balance} bo'ldi`)
        },
        withdraw(amount) {
            if (this.balance < amount) {
                return alert('Mablag\' yetarli emas!')
            }
            else {
                this.balance -= amount;
                this.transactions.push(`Hisobingizdan $${amount} yechildi. Hisobingizda umumiy mablag' $${this.balance} qoldi.`)
            }

        }
    }
})

import { watch } from 'vue' // Faylning eng tepasida watch-ni ham import qiling

const walletStore = useWalletStore()

// State o'zgarganda uni LocalStorage-ga yozib boramiz
watch(
    () => walletStore.$state,
    (state) => {
        localStorage.setItem('my-wallet', JSON.stringify(state))
    },
    { deep: true } // Bu ichki massivlarni ham kuzatish uchun shart!
)