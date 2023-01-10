let comm
	
function getcommunity(){
	comm = document.querySelector('#community').value;
	getresults();
	}
		
function getresults() {
fetch("/static/js/group_centric.json")
.then(function(response){
	return response.json();
})
.then(function(groups){
	console.log("json read");
	let placeholder = document.querySelector("#community-output");
	let out = "<thead><tr><th>Community</th><th># of members</th><th>Demographics</th><th>Outliers</th></tr></thead>";
	for(let group of groups){
		console.log(group.title_id)
		console.log(comm)
		if (group.title_id == comm)
		{
			out += `
				<tr>
					<td>${group.title_label}</td>
					<td>${group.number_of_recorded_members}</td>
					<td>${group.demographic_factors}</td>
					<td>${group.outliers}</td>
				</tr>
			`;
	
	}
}
	placeholder.innerHTML = out;
});	 
}

