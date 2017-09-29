var vue = new Vue({
	el:"#name",
	data:{
		name:"金闪闪"
	}
});
var app2 = new Vue({
  el: '#v-bind',
  data: {
    message: '页面加载于 ' + new Date().toLocaleString()
  }
});
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
});
var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: '学习 JavaScript' },
      { text: '学习 Vue' },
      { text: '整个牛项目' }
    ]
  }
});
app4.todos.push({text:'呵呵哒'});
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
});
var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
});
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});
var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: '蔬菜' },
      { id: 1, text: '奶酪' },
      { id: 2, text: '随便其他什么人吃的东西' }
    ]
  }
});
app7.groceryList.push({id:3,text:'呵呵哒'});
// $watch 是一个实例方法
vue.$watch('name', function (newValue, oldValue) {
    console.log(newValue);
    console.log(oldValue);
});
app4.$watch('todos', function (newValue, oldValue) {
    console.log(newValue);
    console.log(oldValue);
});
document.getElementsByClassName("dropdown")[0].addEventListener("mouseover" , function () {
    document.getElementsByClassName("ul-dropdown")[0].style.display="block";
},false);

document.getElementsByClassName("dropdown")[0].onmouseout = function () {
    document.getElementsByClassName("ul-dropdown")[0].style.display="none";
}


