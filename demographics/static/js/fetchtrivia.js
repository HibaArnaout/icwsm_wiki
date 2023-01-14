let ent
	
function getentity(){
	ent = document.querySelector('#entity').value;
	gettrivia();
	}
		
function gettrivia() {
fetch("/static/js/subject_centric.json")
.then(function(response){
	return response.json();
})
.then(function(groups){
	console.log("json read");
	let placeholder = document.querySelector("#trivia-output");
	let out = "<thead><tr><th>Subject</th><th>Statement</th><th>Relative Incidence</th></tr></thead>";
	for(let group of groups){
		if (group.subject_id == ent)
		{
			out += `
				<tr>
					<td>${group.subject_label}</td>
					<td>${group.statement}</td>
					<td>${group.score}</td>
				</tr>
			`;
	
	}
}
	placeholder.innerHTML = out;
});	 
}

