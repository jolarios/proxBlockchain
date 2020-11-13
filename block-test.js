const Block = require('./block');

/*

const block = new Block('12-5-2020', '0'.repeat(64), '0'.repeat(64), "Data to send")

console.log(block.toString());
//In this case we call it like this because is an instance
//of the block who was created in this file

console.log(Block.genesisBlock().toString());
//We use the static method of Block to generate the genesis block */

/*
for(let i = 1; i <= 25; i++){
	//We create 25 blocks to see how it works
	block = new Block(Date.now(), '0'.repeat(64), '0'.repeat(64), `Data ${i}`);
	console.log(block.toString());
}
*/

const fooBlock = Block.mine(Block.genesisBlock(), 'foobar');
console.log(Block.genesisBlock().toString());
console.log(fooBlock.toString());
