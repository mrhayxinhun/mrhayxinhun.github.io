let app = new Vue({
  el: '#vue-app',

  data: {
    name: 'Duong',
    age: 27,
    job: 'Web developer',
    time: 'morning',
    website: 'http://www.thenetninja.co.uk',
    websiteTag: '<a href="http://www.thenetninja.co.uk">The Net Ninja Website</a>',
    x: 0,
    y: 0
  },

  methods: {
    greet(time) {
      return `Good ${time} ${this.name}`
    },

    add(inc) {
      this.age += inc
    },

    subtract(dec) {
      this.age -= dec
    },

    updateXY(event) {
      this.x = event.offsetX
      this.y = event.offsetY
    },

    click() {
      alert('Welcome to Vue.js')
    }
  }
})

let app2 = new Vue({
  el: '#vue-app2',

  data: {
    name: '',
    age: ''
  },

  methods: {
    addName() {
      this.name = event.target.value
    },

    addAge(event) {
      this.age = event.target.value
    }
  }
})

let app3 = new Vue({
  el: '#vue-app3',
  data: {
    age: 20,
    a: 0,
    b: 0
  },

  // methods: {
  //     AddToA() {
  //         console.log('A')
  //         return this.age + this.a
  //     },

  //     AddToB() {
  //         console.log('B')
  //         return this.age + this.b
  //     }
  // },

  computed: {
    AddToA: {
      get() {
        return this.age + this.a
      },
      set(newValue) {
        this.a = newValue - this.age
      }
    },

    AddToB() {
      return this.age + this.b
    }
  }
})

let app4 = new Vue({
  el: '#vue-app4',
  data: {
    available: false,
    nearby: false
  },
  computed: {
    compClass() {
      return {
        available: this.available,
        nearby: this.nearby
      }
    }
  }
})

let app5 = new Vue({
    el: "#vue-app5",
    data: {
        error: false,
        success: false
    }
})

let app6 = new Vue({
  el: '#vue-app6',
  data: {
    characters: ['Mario', 'Luigi', 'Yoshi', 'Bowser' ],
    ninjas: [
      {name: 'Duong', age: 27},
      {name: 'mrhayxinhun', age: 18},
      {name: 'Ziong', age: 25}
    ]
  }
})

let app7 = new Vue({
  el: '#vue-app7',
  data: {
    health: 100,
    isHitted: false
  },
  methods: {
    punch() {
      this.health -= 10
      if (this.health <=0){
        this.isHitted=true
       
      }
    },

    restart() {
      this.health = 100
      this.isHitted=false
    },

    test(event) {
      console.log(event)
    }

  }, 
  computed: {
    
  }
})