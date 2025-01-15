import { defineStore } from 'pinia'

export const useCounter = defineStore('counter', {
    state: () => {
        return {
            count: 0
        } as {
            count: number
        }
    },

    actions: {
        increment() {
            this.count++
        }
    }
})