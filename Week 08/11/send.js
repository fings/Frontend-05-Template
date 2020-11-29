


send(){
	return new Promise((resolve, reject)=>{
		const parser = new ResponseParser;
		resolve("");

	})
}


class ResponseParser{
	constructor(){

	}
	receive(string){
		for(let i = 0; i < string.length; i++){
			this.receiveChar(string.charAt(i));
		}
	}
	receiveChar(char){

	}
}