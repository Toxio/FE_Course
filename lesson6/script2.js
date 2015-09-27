// Task №2 (Array compare)
var a = [1, 3, 5]
var b = [5, 7, 2]


function compare(a, b){
	
	var resultate = {};

	if(sum(a) > sum(b)){
			resultate = {result:false, 
						bigger: a.sort(a-b).toString()};
		}
	else if (sum(a) < sum(b)) {
			resultate = {result:false, 
					  	bigger: b.sort(a-b).toString()};
		}
	else{
		if (identity(a,b)){
			resultate = true;
		} else {
			resultate = {result:false, 
					  	 bigger: [].toString()}
			}		
		}
	
	return resultate;	
}

function sum(mass){
	var result = 0;
	for(var i = 0; i < mass.length; i++){
		result += mass[i];
	}
	return result;
}

function identity(a, b){
	var same = true;
	if (a.length == b.length){		
		for (var i = 0; i < a.length; i++) {
			if ( !(a[i] === b[i]) ){
				same = false;	
			};			
		};
	} else {
		same = false;
	}

	return same;	
}

	
