Vue.createApp({
    data() {
        return {
            message: "",
            quantity: null,
            output: null,
        }
    },
    methods: {
        duplicate() {
            if (this.quantity < 0) {
                this.output = `Must be non-negative number: ${this.quantity}`
            }
            else {
                this.output = this.message
            }
        }
    }
}).mount("#app")