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
		seen: function(){
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