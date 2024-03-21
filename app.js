const app = Vue.createApp({
    // template: '<h1>{{ title }}</h1>',
    data: function () {

        return {
            title: 'Mr',
            firstName: 'Lukas',
            lastName: 'Cort',
            email: 'jochen.scheerer@example.com',
            phone: '128 891 22 90',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/25.jpg'
        }
    },
    methods: {
        getUser() {
            fetch('https://randomuser.me/api/')
                .then(value => value.json())
                .then(value => {
                    info = value.results[0]

                    this.title = info.name.title
                    this.firstName = info.name.first
                    this.lastName = info.name.last
                    this.email = info.email
                    this.phone = info.phone
                    this.gender = info.gender
                    this.picture = info.picture.large
                })
        }
    }

})
// 'https://randomuser.me/api/'
app.mount('#app')