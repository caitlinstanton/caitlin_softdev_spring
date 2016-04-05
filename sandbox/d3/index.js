var data = [4,8,15,16,23,42];
undefined
var chart = d3.select(."chart");
VM891:2 Uncaught SyntaxError: Unexpected token .(…)InjectedScript._evaluateOn @ VM657:875InjectedScript._evaluateAndWrap @ VM657:808InjectedScript.evaluate @ VM657:664
var chart = d3.select(".chart");
undefined
var bar = chart.selectAll("div");
undefined
bar
[Array[0]]
var barUpdate = bar.data(data);
undefined
barUpdate
[Array[6]]
var barEnter = barUpdate.enter().append("div");
undefined
barEnter.style("width", function(d) {return d*10 + "px";});
[Array[6]]
barEnter.text(function(d) { return d;});
[Array[6]]