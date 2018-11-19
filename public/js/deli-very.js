/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
'use strict';
var socket = io();

var vm = new Vue({
  el: '#vue-container',
  data: {
    orders: {},
    message: "hello burgers",
    burgertext: "HEJ, Vilken burgare är du sugen på idag?",
    menu: food,
    cho_burg: [],
    full_name: [],
    email: [],
    home: [],
    theMoney: [],
    gender: [],
    showOrder: false,
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
      return lastOrder + 1;
    },
    addOrder: function (event) {
      var offset = {x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top};
      socket.emit("addOrder", { orderId: this.getNext(),
                                details: { x: event.clientX - 10 - offset.x,
                                           y: event.clientY - 10 - offset.y },
                                orderItems: ["Beans", "Curry"]
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
       {'theOrder': ' ' + this.cho_burg,
        'name': ' ' +this.full_name,
        'gender': ' ' +this.gender,
        'email': ' ' +this.email,
        'home': ' ' +this.home,
        'money': ' ' +this.theMoney,
      }]
      console.log(order);
      return order;
   },
   toggleshowOrder(){
     this.showOrder=!this.showOrder;
   }

}});
