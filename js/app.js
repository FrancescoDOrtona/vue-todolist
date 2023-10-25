const { createApp } = Vue;

createApp({
    data() {
        return {
            logoPath: "./img/Logo.png",
            newTask: '',
            todos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
                }
            ]
        }
    },
}).mount('#app')
