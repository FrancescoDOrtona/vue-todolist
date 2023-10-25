const { createApp } = Vue;

createApp({
    data() {
        return {
            logoPath: "./img/Logo.png",
            newTask: '',
            currentIndex: 0,
            tasks: [
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
    methods: {
        addTask() {


            
        }
    },
}).mount('#app')
