let topicMap

async function getTopics () {
  const res = await fetch("/static/js/mappings.json")
  const data = await res.json()
   return data
}
async function main () {
	 topicMap = await getTopics()
	 var e = document.getElementById("topic");
      	  
function onChange() {
  topic_val = e.value;
  topic_val=topic_val.trim();
if (topic_val !== "")
{
fetch("/static/js/group_centric.json")
.then(function(response){
	return response.json();
})
.then(function(groups){
	//groups = groups.slice().sort((a, b) => b.score - a.score);
	var ind = 0;
	var totalRows = 0;
	let placeholder = document.querySelector("#demographics-output");
	let out = "<thead><tr><th>Community</th><th># of members</th><th>Demographics</th><th>Outliers</th></tr></thead>";
	for(let group of groups){
		const filteredArray = topicMap[0][topic_val].filter(value => group.topics.includes(value));
		if (filteredArray.length > 0)
		{
			if(ind < 100){
			out += `
				<tr>
					<td>${group.title_label}</td>
					<td>${group.number_of_recorded_members}</td>
					<td>${group.demographic_factors}</td>
					<td>${group.outliers}</td>
				</tr>
			`;
	}
			ind = ind + 1;
			totalRows = totalRows + 1;
		}
	}

	placeholder.innerHTML = out;
	document.getElementById('totalRows').innerHTML = "<span style=\"color:yellow; align:right;\">"+totalRows + " total rows for " + topic_val +".</span>"
});	 
}
}
e.onchange = onChange;
onChange();
}
main();

	
