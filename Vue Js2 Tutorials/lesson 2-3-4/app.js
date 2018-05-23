new Vue ({
    el: "#vue-app",
    data: {
        name: "Duong",
        job: "Ninja",
        website: "http://www.thenetninja.com",
        websiteTag: "<a href ='http://www.thenetninja.com'>The Net Ninja</a>"
    },
    methods: {
        greet: function(time){
            return `Good ${time}, ${this.name}`;
        }
    }
})