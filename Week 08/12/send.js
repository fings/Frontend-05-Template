


send(connection){
	return new Promise((resolve, reject) => {
		const parser = new ResponseParser;
		if (connection) {
			connection.write(this.toString);

		} else {
			connection = net.createConnection({
				hose: this.host,
				port: this.port
			}, () => {
				connection.write(this.toString());
			})
		}
		connection.on('data', (data) => {
			console.log(data.toString());
			parser.receive(data.toString());
			if (parser.isFinished) {
				resolve(parser.response);
				connection.end();
			}
		})
		connection.on('error', (err) => {
			reject(err);
			connection.end();
		})

	})
}

toString(){
	return `${this.method} ${this.path} HTTP/1.1\r
	${Object.keys(this.headers).map(key => `${key}: ${this.headers[key]}`).join('\r\n')}\r\r
	${this.bodyText}`
}


class ResponseParser {
	constructor() {

	}
	receive(string) {
		for (let i = 0; i < string.length; i++) {
			this.receiveChar(string.charAt(i));
		}
	}
	receiveChar(char) {

	}
}