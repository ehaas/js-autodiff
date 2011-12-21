var assert = require('assert'),
		diff = require('./autodiff').diff;

function test(fn, at, derivative) {
	assert.equal(diff(fn, at), derivative.call(null, at));
}

function xsquared(x) {
	return x * x;
}

function xcubed(x) {
	return x * x * x;
}

function e_xsquared(x) {
	return Math.exp(x * x);
}

function e_sin_x2(x) {
	return Math.exp(Math.sin(x * x));
}

function x_over_ln_x(x) {
	return x / Math.log(x);
}

test(xsquared, 3, function(x) { return 2*x; });
test(xcubed, 4, function(x) { return 3*x*x; });
test(e_xsquared, 2, function(x) { return 2*x*Math.exp(x*x); });
test(e_sin_x2, Math.PI/2, function(x) { return 2*x*Math.exp(Math.sin(x*x))*Math.cos(x*x); });
test(x_over_ln_x, 5, function(x) { return (Math.log(x) - 1) / (Math.log(x) * Math.log(x)); });
