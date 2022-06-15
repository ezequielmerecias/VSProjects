var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function ShoppingList() {
    this.groceries = [];
}
ShoppingList.prototype.addItem = function (item) {
    this.groceries = this.groceries.concat([item]);
};
ShoppingList.prototype.removeItem = function (item) {
    this.groceries = this.groceries.filter(function (grocery) {
        return item !== grocery;
    });
};
var myList = new ShoppingList();
myList.addItem('Banana');
myList.addItem('Apple');
console.log(myList.groceries);
myList.removeItem('Banana');
console.log(myList.groceries);
var ShoppingList2 = /** @class */ (function () {
    function ShoppingList2() {
        this.groceries = [];
    }
    ShoppingList2.prototype.addItem = function (item) {
        this.groceries = __spreadArray(__spreadArray([], this.groceries, true), [item], false);
    };
    ShoppingList2.prototype.removeItem = function (item) {
        this.groceries = this.groceries.filter(function (grocery) { return item !== grocery; });
    };
    return ShoppingList2;
}());
var myNewList = new ShoppingList2();
myNewList.addItem('Pear');
myNewList.addItem('Pizza');
console.log(myNewList.groceries);
myNewList.removeItem('Pear');
console.log(myNewList.groceries);
