var data = [
				//Republicans
				[
					//Allocated
					[
						{state: "Iowa", racount: 30, dacount: 52, rncount: 0, dncount:0},
						{state: "New Hamphsire", racount: 23, dacount: 32, rncount: 0, dncount:0}, 
						{state: "South Carolina", racount: 50, dacount: 59, rncount: 0, dncount:0}, 
						{state: "Nevada", racount: 30, dacount: 43, rncount: 0, dncount:0},
						{state: "Alabama", racount: 50, dacount: 60, rncount: 0, dncount:0},
						***{state: "Alaska", racount: 28},
		       			{state: "Arkansas", racount: 40, dacount: 37, rncount: 0, dncount:0}, 
		       			{state: "Georgia", racount: 76, dacount: 116, rncount: 0, dncount:0}, 
		       			{state: "Massachuetts", racount: 42, dacount: 116, rncount: 0, dncount:0}, 
		       			{state: "Minnesota", racount: 38, dacount: 93, rncount: 0, dncount:0}, 
		       			{state: "Oklahoma", racount: 43, dacount: 42, rncount: 0, dncount:0},
		      	 		{state: "Tennessee", racount: 58, dacount: 76, rncount: 0, dncount:0}, 
		      	 		{state: "Texas", racount: 155, dacount: 252, rncount: 0, dncount:0}, 
		      	 		{state: "Vermont", racount: 16, dacount: 26, rncount: 0, dncount:0}, 
		      	 		{state: "Virginia", racount: 49, dacount: 110, rncount: 0, dncount:0}, 
		      	 		{state: "Kansas", racount: 40, dacount: 37, rncount: 0, dncount:0}, 
		      	 		***{state: "Kentucky", racount: 46},
		       			{state: "Louisiana", racount: 46, dacount: 58, rncount: 0, dncount:0}, 
		       			{state: "Maine", racount: 23, dacount: 30, rncount: 0, dncount:0}, 
		       			***{state: "Puerto Rico", racount: 23}, 
		       			***{state: "Hawaii", racount: 19}, 
		       			***{state: "Idaho", racount: 32}, 
		       			{state: "Michigan", racount: 59, dacount: 147, rncount: 0, dncount:0},
		       			{state: "Mississippi", racount: 40, dacount: 41, rncount: 0, dncount:0}, 
		       			***{state: "Washington DC", racount: 19}, 
		       			***{state: "Guam", racount: 9}, 
		       			***{state: "Wyoming", racount: 29},
		       			{state: "Florida", racount: 99, dacount: 246, rncount: 0, dncount:0}, 
		       			{state: "Illinois", racount: 69, dacount: 182, rncount: 0, dncount:0}, 
		       			{state: "Missouri", racount: 52, dacount: 84, rncount: 0, dncount:0}, 
		       			{state: "North Carolina", racount: 72, dacount: 121, rncount: 0, dncount:0},
		       			{state: "Northern Mariana Islands", racount: 9, dacount: 11, rncount: 0, dncount:0}, 
		       			{state: "Ohio", racount: 66, dacount: 159, rncount: 0, dncount:0},
		       			{state: "Colorado", racount: 0, dacount: 79, rncount: 0, dncount:0},
		       			***{state: "American Samoa", dacount: 10},
		       			***{state: "Abroad", dacount: 17},
		       			***{state: "Nebraska", dacount: 30},
		       			***{state: "Arizona", rncount: 58}, 
						***{state: "Utah", rncount: 40}, 
						***{state: "Wisconsin", rncount: 42}, 
						***{state: "New York", rncount: 95}, 
						***{state: "Connecticut", rncount: 28}, 
						***{state: "Delware", rncount: 16},
		       			***{state: "Maryland", rncount: 38}, 
		       			***{state: "Pennsylvania", rncount: 71}, 
		       			***{state: "Rhode Island", rncount: 19}, 
		       			***{state: "Indiana", rncount: 57}, 
		       			***{state: "Nebraska", rncount: 36},
		       			***{state: "West Virginia", rncount: 34}, 
		       			***{state: "Oregon", rncount: 28}, 
		       			***{state: "Washington", rncount: 44}, 
		       			***{state: "Califorinia", rncount: 172}, 
		       			***{state: "Montana", rncount: 27},
		       			***{state: "New Jersey", rncount: 51}, 
		       			***{state: "New Mexico", rncount: 24}, 
		       			***{state: "South Dakota", rncount: 29}
					]
				]
					//Not Allocated
					[
						{state: "Arizona", dncount: 85}, 
						{state: "Idaho", dncount: 27}, 
						{state: "Utah", dncount: 37}, 
						{state: "Alaska", dncount: 20}, 
						{state: "Hawaii", dncount: 34}, 
						{state: "Washington", dncount: 118}, 
						{state: "Wisconsin", dncount: 96},
		       			{state: "Wyoming", dncount: 18}, 
		       			{state: "New York", dncount: 291}, 
		       			{state: "Connecticut", dncount: 70}, 
		       			{state: "Delware", dncount: 31}, 
		       			{state: "Maryland", dncount: 118}, 
		       			{state: "Pennsylvania", dncount: 210},
		       			{state: "Rhode Island", dncount: 33}, 
		       			{state: "Indiana", dncount: 92}, 
		       			{state: "Guam", dncount: 12}, 
		       			{state: "West Virginia", dncount: 37}, 
		       			{state: "Kentucky", dncount: 61}, 
		       			{state: "Oregon", dncount: 74},
		       			{state: "Virgin Islands", dncount: 12}, 
		       			{state: "Puerto Rico", dncount: 67}, 
		       			{state: "California", dncount: 546}, 
		       			{state: "Montana", dncount: 27}, 
		       			{state: "New Jersey", dncount: 142},
		       			{state: "New Mexico", dncount: 43}, 
		       			{state: "North Dakota", dncount: 23}, 
		       			{state: "South Dakota", dncount: 25}, 
		       			{state: "Washington DC", dncount: 45}
					]
				]
			];


d3.select(".chart")
    .selectAll("div")
    .data(data)
    .enter().append("div")
    .style("width", function(d) {
    	for (var i = 0; i < data.length; i++) {
    		for (var j = 0; j < data[i].length; j++) {
    			return d.count * 7 +"px";
    		}
    	}
    });
    /*
    .style("background-color", function(d) {
        if (d.allocated != 0) {
            return "green";
        } else {
            return "black";
        }
    })
    */
    .text(function(d) {
    	for (var i = 0; i < data.length; i++) {
    		for (var j = 0; j < data[i].length; j++) {
    			return d.state + ": "d.count;
    		}
    	}
    });












/*
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
*/