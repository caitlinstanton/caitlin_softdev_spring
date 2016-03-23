
var republicans = [
    {state: "IA", count: 30, allocated: 16},
    {state: "NH", count: 23, allocated: 18}, 
    {state: "SC", count: 50, allocated: 50},
    {state: "NV", count: 30, allocated: 21},
    {state: "AL", count: 50, allocated: 49},
    {state: "AK", count: 28, allocated: 28},
    {state: "AR", count: 40, allocated: 30},
    {state: "GA", count: 76, allocated: 60},
    {state: "MA", count: 42, allocated: 26},
    {state: "MN", count: 38, allocated: 21},
    {state: "OK", count: 43, allocated: 28},
    {state: "TN", count: 58, allocated: 49},
    {state: "TX", count: 155, allocated: 152},
    {state: "VT", count: 16, allocated: 16}, 
    {state: "VA", count: 49, allocated: 30},
    {state: "KS", count: 40, allocated: 34},
    {state: "KY", count: 46, allocated: 39},
    {state: "LA", count: 46, allocated: 36},
    {state: "ME", count: 23, allocated: 23},
    {state: "HI", count: 19, allocated: 18},
    {state: "ID", count: 32, allocated: 32},
    {state: "MI", count: 59, allocated: 59},
    {state: "MS", count: 40, allocated: 37},
    {state: "WY", count: 29, allocated: 10},
    {state: "FL", count: 99, allocated: 99},
    {state: "IL", count: 69, allocated: 69},
    {state: "MO", count: 52, allocated: 52},
    {state: "NC", count: 72, allocated: 65},
    {state: "OH", count: 66, allocated: 66},
    {state: "AZ", count: 58, allocated: 0},
    {state: "UT", count: 40, allocated: 0},
    {state: "ND", count: 28, allocated: 0},
    {state: "WI", count: 42, allocated: 0},
    {state: "CO", count: 37, allocated: 0},
    {state: "NY", count: 95, allocated: 0},
    {state: "CT", count: 28, allocated: 0},
    {state: "DE", count: 16, allocated: 0},
    {state: "MD", count: 38, allocated: 0},
    {state: "PA", count: 71, allocated: 0},
    {state: "RI", count: 19, allocated: 0},
    {state: "IN", count: 57, allocated: 0},
    {state: "NE", count: 36, allocated: 0},
    {state: "WV", count: 34, allocated: 0},
    {state: "OR", count: 28, allocated: 0},
    {state: "WA", count: 44, allocated: 0},
    {state: "CA", count: 172, allocated: 0},
    {state: "MT", count: 27, allocated: 0},
    {state: "NJ", count: 51, allocated: 0},
    {state: "NM", count: 24, allocated: 0},
    {state: "SD", count: 29, allocated: 0}
];

d3.select(".chart")
    .selectAll("div")
    .data(republicans)
    .enter().append("div")
    .style("width", function(d) {
	   return d.count * 7 + "px";
    })
    .style("background-color", function(d) {
        if (d.allocated != 0) {
            return "green";
        } else {
            return "black";
        }
    })
    .text(function(d) {
        return d.state + ": " + d.count;
    });

d3.select("#transition").on("click", function(d) {

})