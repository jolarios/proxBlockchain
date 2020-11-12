//Blockchain project for the Computer Engeneering Degree subject SSI

class Block{

	constructor(timestamp, lastHash, hash, data){
		this.timestamp = timestamp;
		this.lastHash = lastHash;
		this.hash = hash;
		this.data = data;

		//timestamp: block creation date
		//lastHash: prev block hash
		//hash: from itself
		//data: who transports the block
	}


	toString(){
	//With this method we return the content of the block
		return `Block
		Timestamp: 	${this.timestamp}
		Last Hash: 	${this.lastHash}
		Hash: 		${this.hash}
		Data: 		${this.data}`
	}

	static genesisBlock(){
		return new this('Genesis Time', "0".repeat(64), "0".repeat(64), []);
	}

	static mine(lastHash, data){
		const timestamp = Date.now();
		const lastHash = lastHash.hash;
		const hash = '0'.repeat(64);
		return new this(timestamp, lastHash, hash, data);
	}
}

module.exports = Block;