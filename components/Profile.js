export default {
  template: `<div>This is profile page of {{this.$route.params.name}} 
  and he lives in {{this.$route.query.state}}
  <button @click="update"> Update </button>
  </div>`,

  methods: {
    update() {
      this.$router.push({
        name: 'update',
        params: { name: this.$route.params.name },
      })
    },
  },
}
