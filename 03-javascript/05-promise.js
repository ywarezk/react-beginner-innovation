/**

Promises

 */
 
/*

-----O-|------------->

-----X--------------->

*/
 
setTimeout(
	function() {
		console.log('hello timer');
	},
	
	1000
)

/*

-----O-----O-----O-----O----->

*/

setInterval(
	function() {
		console.log('hello timer in interval');
	},
	
	1000
);

/**


V8 - stack, heap, garbage collector

C++ API - thread pool

Event loop


 */
 
 // class Promise
 
 /**
  * 
  
  class Promise {
	  
	  constructor(cb) {
		  cb(this.resolve, this.reject)
	  }
	  
	  resolve(data) {
		  
	  }
	  
	  reject() {
		  
	  }
	  
  }
  
  */
 
 /**
  * 
  
  promise state:
  
  1- pending
  2- fullfiled
  
  */
  
/**
 * 

Promise can handle
 
-----O-|------------->

-----X--------------->


Promise can not handle

-----O-----O-----O---->
 
 */
 
 // Promise<string>
 const timerPromise = new Promise(
	function(resolve, reject) {
	 
		// this function should contain your async code
		setTimeout(
			function() {
				// resolve('hello from timer promise')
				
				resolve('http://nztodo.herokuapp.com/api/tasks/?format=json');
				
				// reject(new Error('something happened'))
			},
			
			1000
		)
	 
 	}
);

timerPromise.then(
	function(msg) {
		console.log(msg);
	},
	function(err) {
		console.log(err.message);
	}
)

timerPromise.then(
	function(msg) {
		console.log(msg);
	}
)

/*
const otherPromise = new Promise(
	function() {
	 
		// this function should contain your async code
		XMLHttpRequest
	 
 	}
);
*/


/**
 * 
 
 request data from server
 
 fetch: Promise<Response>
 fetch('...')
 
 */

/*
timerPromise.then(
	function(url) {
		
		fetch(url).then(
			function(response) {
				
				response.json().then(function(contentFromServer) {
					
				})
				
			}
		)
		
	}
)
*/

timerPromise
	.then(
		function(url) {
			return fetch(url)
		}
	)
	.then(
		function(response) {
			return response.json()
		}
	)
	.then(
		function(contentFromServer) {
			console.log(contentFromServer)
		},
		// function(err) {
			
		// }
	)


/**
 * 
 * @returns Promise<string>
 */
async function getFromServer() {
	// http://nztodo.herokuapp.com/api/tasks/?format=json
	const url = await timerPromise;
	const response = await fetch(url);
	const contentFromServer = await response.json();
	
	return contentFromServer;
}

getFromServer().then(
	function(piglet) {
		console.log(piglet);
	}
)