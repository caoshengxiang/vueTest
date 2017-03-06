const myMixin = {
    created() {
        this.hello()
    },
    methods: {
        hello() {
            alert('hello')
        }
    }
}

export default myMixin;