//function Person(name){
//	this.name = name;
//}
//var p = new Person();
//alert(p.__proto__ == Person.prototype)
//alert(Person.prototype.constructor.prototype.constructor.prototype)
//alert(p.__proto__.constructor)
//alert(Person.prototype.__proto__)
//alert(Person.__proto__)
//
//Person.prototype.say = function(){
//	console.log(this.name);
//}
//
//p.say();
//function Student(name,age){
//		Person.call(this,name);
//		this.age = age;
//}
//
//function inherits(Child, Parent) {
//  var F = function () {};
//  F.prototype = Parent.prototype;
//  Child.prototype = new F();
//  Child.prototype.constructor = Child;
//}
//
//class Teacher extends Person{
//	constructor(name,grade){
//		super(name);
//		this.grade = grade;
//	}
//	
//}
//inherits(Student,Person)
//var s = new Student("cc",20);
//s.say();
//var t = new Teacher("dd",20);
//t.say();

var vue = new Vue({
	el:"#name",
	data:{
		name:"金闪闪"
	}
})
var app2 = new Vue({
  el: '#v-bind',
  data: {
    message: '页面加载于 ' + new Date().toLocaleString()
  }
})
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})
var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: '学习 JavaScript' },
      { text: '学习 Vue' },
      { text: '整个牛项目' }
    ]
  }
})
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
})
var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})
var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: '蔬菜' },
      { id: 1, text: '奶酪' },
      { id: 2, text: '随便其他什么人吃的东西' }
    ]
  }
})