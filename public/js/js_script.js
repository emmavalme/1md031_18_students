function MenuItem(n, p, kcal, gl, veg) {
    this.name = n; // The this keyword refers to the object itself
    this.price = p;
    this.kcal = kcal;
    this.gluten = gl;
    this.vego = veg;
    this.menu = function() {
        return this.name + ' ' + this.kcal;
    };
}

var burger1 = new MenuItem('Die Beste Burger', '75kr', '1000', true, false);
console.log(burger1.name());
var burger2 = new MenuItem('Favoriten', '70kr', '500', false, true);
console.log( burger2.name());
var burger3 = new MenuItem("LOVE burger", "60kr", "600", true, false);
console.log( burger3.name());
var burger4 = new MenuItem('The other burger', '65kr', '400', false, false);
console.log( burger4.name());
var burger5 = new MenuItem('The last burger', '80kr', '450', false, true);
console.log( burger5.name());

var burgerMeny = [ {
  'name':'Die Beste Burger',
  'price': '75kr',
  'kcal':1000,
  'gluten': true,
  'vego': false},

{'name': 'Favoriten',
 'price': '60kr',
 'kcal': '500',
 'gluten': true,
 'vego': false},

{'name':'LOVE burger',
'price': '80kr',
'kcal': 600,
'gluten': false,
'vego': true}

{'name':'The other burger',
'price': '65kr',
'kcal': 400,
'gluten': true,
'vego': false}

{'name':'The last burger',
'price': '80kr',
'kcal': 450,
'gluten': true,
'vego': true}]
