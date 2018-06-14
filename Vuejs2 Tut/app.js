new Vue ({
    el: '#vue-app',

    data: {
        name: 'Duong',
        job: 'Web developer',
        time: 'morning',
        website: 'http://www.thenetninja.co.uk',
        websiteTag: '<a href="http://www.thenetninja.co.uk">The Net Ninja Website</a>'
    },

    methods: {
        greet(time) {
            return  `Good ${time} ${this.name}`
        }
    }
})