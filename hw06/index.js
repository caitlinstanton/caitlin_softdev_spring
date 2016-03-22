var data = [
				//Republicans
				[
					//Allocated
					[
						{state: "Iowa"},
						{state: "New Hamphsire"}, 
						{state: "South Carolina"}, 
						{state: "Nevada"},
						{state: "Alabama"},
						{state: "Alaska"},
		       			{state: "Arkansas"}, 
		       			{state: "Georgia"}, 
		       			{state: "Massachuetts"}, 
		       			{state: "Minnesota"}, 
		       			{state: "Oklahoma"},
		      	 		{state: "Tennessee"}, 
		      	 		{state: "Texas"}, 
		      	 		{state: "Vermont"}, 
		      	 		{state: "Virginia"}, 
		      	 		{state: "Kansas"}, 
		      	 		{state: "Kentucky"},
		       			{state: "Louisiana"}, 
		       			{state: "Maine"}, 
		       			{state: "Puerto Rico"}, 
		       			{state: "Hawaii"}, 
		       			{state: "Idaho"}, 
		       			{state: "Michigan"},
		       			{state: "Mississippi"}, 
		       			{state: "Washington DC"}, 
		       			{state: "Guam"}, 
		       			{state: "Wyoming"},
		       			{state: "Florida"}, 
		       			{state: "Illinois"}, 
		       			{state: "Missouri"}, 
		       			{state: "North Carolina"},
		       			{state: "Northern Mariana Islands"}, 
		       			{state: "Ohio"}
					]
					//Not Allocated
					[
						{state: "Arizona"}, 
						{state: "Utah"}, 
						{state: "Wisconsin"}, 
						{state: "New York"}, 
						{state: "Connecticut"}, 
						{state: "Delware"},
		       			{state: "Maryland"}, 
		       			{state: "Pennsylvania"}, 
		       			{state: "Rhode Island"}, 
		       			{state: "Indiana"}, 
		       			{state: "Nebraska"},
		       			{State: "West Virginia"}, 
		       			{state: "Oregon"}, 
		       			{state: "Washington"}, 
		       			{state: "Califorinia"}, 
		       			{state: "Montana"},
		       			{state: "New Jersey"}, 
		       			{state: "New Mexico"}, 
		       			{state: "South Dakota"}
					]
				]
				//Democrats
				[
					//Allocated
					[
						{state: "Iowa"}, 
						{state: "New Hamphsire"}, 
						{state: "Nevada"}, 
						{state: "South Carolina"}, 
						{state: "Alabama"}, 
						{state: "Arkansas"},
		       			{state: "Colorado"}, 
		       			{state: "Georgia"}, 
		       			{state: "Massachuetts"}, 
		       			{state: "Minnesota"}, 
		       			{state: "Oklahoma"}, 
		       			{state: "Tennessee"},
		       			{state: "Texas"}, 
		       			{state: "Vermont"}, 
		       			{state: "Virginia"}, 
		       			{state: "American Somoa"}, 
		       			{state: "Democrats Abroad"},
		       			{state: "Kansas"}, 
		       			{state: "Louisiana"}, 
		       			{state: "Nebraska"}, 
		       			{state: "Maine"}, 
		       			{state: "Michigan"}, 
		       			{state: "Mississippi"},
		       			{state: "Northern Mariana Islands"}, 
		       			{state: "Florida"}, 
		       			{state: "Illinois"}, 
		       			{state: "Missouri"},
		       			{state: "North Carolina"}, 
		       			{state: "Ohio"}
					]
					//Not Allocated
					[

					]
				]
			]
var allocated = 
		      []
		     ];
var notAllocated = [[],
		      ["Arizona", "Idaho", "Utah", "Alaska", "Hawaii", "Washington", "Wisconsin",
		       "Wyoming", "New York", "Connecticut", "Delware", "Maryland", "Pennsylvania",
		       "Rhode Island", "Indiana", "Guam", "West Virginia", "Kentucky", "Oregon",
		       "Virgin Islands", "Puerto Rico", "California", "Montana", "New Jersey",
		       "New Mexico", "North Dakota", "South Dakota", "Washington DC"]
		     ];
var totals = [[1489, 983, 2472], [2366, 2397, 4763]];
var allocatedTotals = [[30, 23, 50, 30, 50, 28, 40, 76, 42, 38, 43, 58, 155, 16, 49, 40, 46, 46, 23,
		     23, 19, 32, 59, 40, 19, 9, 29, 99, 69, 52, 72, 9, 66],
		    [52, 32, 43, 59, 60, 37, 79, 116, 116, 93, 42, 76, 252, 26, 110, 10, 17, 37, 58,
		     30, 30, 147, 41, 11, 246, 182, 84, 121, 159]];
var notAllocatedTotals = [[58, 40, 42, 95, 28, 16, 38, 71, 19, 57, 36, 34, 28, 44, 172, 27, 51, 24, 29],
		    [85, 27, 37, 20, 34, 118, 96, 18, 291, 70, 31, 118, 210, 33, 92, 12, 37, 61, 74,
		     12, 67, 546, 27, 142, 43, 23, 25, 45]
		   ];

d3.select(".chart")
    .selectAll("div")
    .data(party, allocated, notAllocated, totals, allocatedTotals, notAllocatedTotals)
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













var counter = 1;
var createbars = function() {
    counter = (counter + 1) % 2
    d3.select("title").transition().text(party[counter] + " Delegate Count");
    d3.select("h1").transition().text(party[counter] + " Delegate Count").style("color", colors[counter][0]);
    d3.select("#key0").transition().style("background-color", colors[counter][0]);
    d3.select("#key1").transition().style("background-color", colors[counter][1]);
    d3.select("#alloted_total").transition().text(totals[counter][0]);
    d3.select("#not_lot_total").transition().text(totals[counter][1]);
    d3.select("#total").transition().text(totals[counter][2]);

    d3.select(".alloted").selectAll("div").remove();
    d3.select(".alloted")
	.selectAll("div")
	.data(alloted_nums[counter])
	.enter().append("div")
	.style("width", function(d){return d*10 + "px";})
	.style("background-color", colors[counter][0])
	.style("font-size","15px")
	.text(function(d){return d;})
	.data(alloted_states[counter])
	.insert("span")
	.style("font-size", "7px")
	.text(function(d){return " - " + d;});
    
    d3.select(".not_lot").selectAll("div").remove();    
    d3.select(".not_lot")
	.selectAll("div")
	.data(not_lot_nums[counter])
	.enter().append("div")
	.style("width", function(d){return d*10 + "px";})
	.style("background-color", colors[counter][1])
	.style("font-size","15px")
	.text(function(d){return d;})
	.data(not_lot_states[counter])
	.insert("span")
	.style("font-size", "7px")
	.text(function(d){return " - " + d;});
}

document.getElementById("switch").addEventListener("click", createbars);
createbars();