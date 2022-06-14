export default {
  template: `<div>
     <h4> Create Task Here</h4>
     <input type="text" placeholder="Title" v-model="formData.title"/>
     <input type="text" placeholder="Description" v-model="formData.description"/>
     <button @click="postData"> Create Task </button>
  </div>`,

  data() {
    return {
      formData: {
        title: null,
        description: null,
      },
    }
  },
  methods: {
    async postData() {
      const response = await fetch('http://172.25.210.9:5001/api/tasks/2', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.formData),
      }).catch(() => {
        console.log('Network Error')
      })

      if (response) {
        alert(response.status)
      }
    },
  },
}
