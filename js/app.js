const { createApp } = Vue;

createApp({
    data() {
        return {
            logoPath: "./img/Logo.png",
            newTask: {
                text: '',
                done: false
            },
            currentIndex: 0,
            error: false,
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

            if (this.newTask.text.length >= 5) {
                this.tasks.unshift(this.newTask)
                this.newTask = { text: ''}
                this.error = false
            } else {
                this.error = true
            }

        },
        
        removeTask(taskIndex){
            this.tasks.splice(taskIndex, 1)
        },
    },
}).mount('#app')
