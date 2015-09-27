// Task №3 (Fibonacci sequence)
var fibLength = prompt("Choose length of Fibonacci sequence");

function fib(){
	var array = [0,1];
	var i = 0; 
	return function(){
		if (i > 1) {		 		
			array.push(array[i-2]+array[i-1]);
		} 
		i ++ ;
		return array;	
	}
}

var fibList =  fib();

if (fibLength < 1){
	alert("Length of Fibonacci sequence must be longer then " + fibLength)
} else  {
	for (var i = 1; i < fibLength; i++) {
		fibList();
	};
	console.log(fibList());
}


