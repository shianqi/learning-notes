var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    items:[
    	{text:'hello'},
    	{text:'imudges'},
    	{text:'shianqi'}
    ]
  }
});

var app2 = new Vue({
	el: '#app2',
	data: {
		message: 'You loaded this page on'+ new Date()
	}
});

var app3 = new Vue({
	el:'#app3',
	data:{
	    click: function(){

        },
		seen: function () {
            return true;
        }
	}
});

var app5 = new Vue({
  el: '#app5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message+'!';
    }
  }
});

var app6 = new Vue({
    el: '#app6',
    data: {
        message: '2'
    }
});

Vue.component('todo-item', {
    props: ['todo2'],
    template: '<li>{{ todo2.text }}</li>'
})
var app7 = new Vue({
    el: '#app7',
    data: {
        groceryList: [
            { text: 'Vegetables' },
            { text: 'Cheese' },
            { text: 'Whatever else humans are supposed to eat' }
        ]
    }
})