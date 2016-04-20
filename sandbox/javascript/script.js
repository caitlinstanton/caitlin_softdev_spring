
var base ="this is in f1 in the global namespace";
var x ="x in the global namespace";
var f2 = function() {
	console.log("this is f2");
};

var f1 = {
	x : 'something in the namespace',
	f2: f2,
	f: function() {
		console.log("this is in f in the f1 namespace");
		console.log("x is " + x);
		console.log("f1.x is " + f1.x);
		console.log("better way: " + this.x);
	}	
};

var count = 0;
var inc = function makeIncrementer() {
	count++;
	return count;
}

var makeAdder = function(n) {
	n++;
	return n;
}

var x = 0;
var makeIncrementer2 = function() {
	var inner = function() {
		x = x + 1;
		return x;
	}
	return inner();
}

var makeAdder2 = function(n) {
	var x = n;
	var inner = function() {
		x = x + 1;
		return x;
	}
	return inner(n);
}

//CLASSCODE
var makeAdder3 = function(n) {
	return function(x) {
		return x + n;
	}
}

var add3 = makeAdder3(3);

var makeCounter = function() {
	var i = 0;
	return {
		x: "this is a string in dictionary",
		set: function(x) {
			i = x;
			return "variable set!";
		}, 
		get: function() {
			return i;
		},
		inc: function() {
			i = i + 1;
			return "variable increased!";
		},
		dec: function() {
			i = i - 1;
			return "variable decreased!";
		},
		setx: function(n) {
			this.x = n;
		}
	}
}

var a = makeCounter();