//Blockchain project for the Computer Engeneering Degree subject SSI

const SHA256 = require('../node_modules/crypto-js/sha256');
//We require the hash function sha256 from crypto-js lybrary

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

	static mine(lastBlock, data){
	//This function add a new block to the Blockchain
		const timestamp = Date.now();
		const lastHash = lastBlock.hash;
		const hash = this.hash(timestamp, lastHash, data);
		return new this(timestamp, lastHash, hash, data);
	}

	static hash(timestamp, lastHash, data){
		return SHA256(`${timestamp}${lastHash}${data}`).toString();
	}

	static blockHash(block){
	//We do a new calc of the hash of the introduced blocks
	//This function is usefull to verificate hash
		//const {block.timestamp, block.lastHash, block.data} = Block;
		return Block.hash(block.timestamp, block.lastHash, block.data);
	}
}

module.exports = Block;
