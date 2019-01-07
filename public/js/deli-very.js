/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
'use strict';
var socket = io();

var vm = new Vue({
  el: '#vue-container',
  data: {
    orders: {},
    message: "hello burgers!!!",
    burgertext: "HEJ, Vilken burgare är du sugen på idag?",
    menu: food,
    cho_burg: [],
    full_name: [],
    email: [],
    /*home: [],*/
    theMoney: [],
    gender: [],
    location: {x: 0, y: 0},
    showOrder: false,
    details: {},
    orderNum: 0,
    /*food1: [ {
          name:'Die Beste Burger',
          price: '75kr',
          kcal:'1000 kcal',
          gluten: true,
          vego: false},

        {name: 'Favoriten',
         price: '60kr',
         kcal: '500 kcal',
         gluten: true,
         vego: false},

        {name:'LOVE burger',
        price: '80kr',
        kcal: '600 kcal',
        gluten: false,
        vego: true},

        {name:'The other burger',
        price: '65kr',
        kcal: '400 kcal',
        gluten: true,
        vego: false},

        {name:'The last burger',
        price: '80kr',
        kcal: '450 kcal',
        gluten: true,
        vego: true}],*/
  },

  created: function () {
    socket.on('initialize', function (data) {
      this.orders = data.orders;
    }.bind(this));

    socket.on('currentQueue', function (data) {
      this.orders = data.orders;
    }.bind(this));
  },
  methods: {
    getNext: function () {
      var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
        return Math.max(last, next);
      }, 0);
      /*return lastOrder + 1;*/
      return "T";
    },
    getNextDisp: function () {
      this.orderNum = this.orderNum + 1
      return this.orderNum;
    },
    setLocation: function (ev) {
      var offset = {x: ev.currentTarget.getBoundingClientRect().left,
                    y: ev.currentTarget.getBoundingClientRect().top};
       this.location.x = ev.clientX - 10 - offset.x;
       this.location.y = ev.clientY - 10 - offset.y;
    },
    addOrder: function (event) {
      var theBurger = " " + this.cho_burg;
      var theCustomer = " " + this.full_name + ", " + this.email;
      var locx = this.location.x;
      var locy = this.location.y;
      socket.emit("addOrder", { orderId: this.getNextDisp(),
                                details: {x: locx, y: locy},
                                orderItems: [theBurger, theCustomer]
                              });
    },

    changeText: function () {
      if (this.message === "changed"){
        this.message = "HURRA!"
      }
      else {this.message = "changed";}
    },
   theOrder (){
     var order = [
       {'burgers': ' ' + this.cho_burg,
        'name': ' ' +this.full_name,
        'gender': ' ' +this.gender,
        'email': ' ' +this.email,
        /*'home': ' ' +this.home,*/
        'money': ' ' +this.theMoney,
        'locationx': ' '+ this.location.x,
        'locationy': ' '+ this.location.y
      }]
      console.log(order);
      return order;
   },
   toggleshowOrder(){
     this.showOrder=!this.showOrder;
   }

}});
