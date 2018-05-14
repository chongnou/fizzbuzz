

// print all numbers from 1-100
for(let i = 1; i <= 100; i++){
	if((i % 3 === 0) && (i % 5 === 0)){
		console.log('fizzbuzz');
		}
	else if (i % 3 === 0){
		console.log('fizz');
		}
	else if(i % 5 === 0){
		console.log('buzz');
		}
	else {
		console.log(i);
		}
	}

// if number is divisible by 3, print 'fizz'
// if number is divisible by 5, print 'buzz'
// if number is divisible by 3, print 'fizzbuzz'