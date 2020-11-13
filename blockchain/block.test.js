const Block = require('./block');



describe('block', ()=>{
    let data, lastBlock, block;
    beforeEach(()=>{
        data = 'bar';
        lastBlock = Block.genesisBlock();
        block = Block.mine(lastBlock, data);

    })

    it('Set the data to match the input', ()=>{
        expect(block.data).toEqual(data);
    })

    it('Set the lastHash in Block to match the hash of the last Block', ()=>{
        expect(block.lastHash).toEqual(lastBlock.hash);
    })
})



/*v1

const block = new Block('12-5-2020', '0'.repeat(64), '0'.repeat(64), "Data to send")

console.log(block.toString());
//In this case we call it like this because is an instance
//of the block who was created in this file

console.log(Block.genesisBlock().toString());
//We use the static method of Block to generate the genesis block */

/*v1.1
for(let i = 1; i <= 25; i++){
	//We create 25 blocks to see how it works
	block = new Block(Date.now(), '0'.repeat(64), '0'.repeat(64), `Data ${i}`);
	console.log(block.toString());
}
*/

/*v2
const gen = Block.genesisBlock();
const fooBlock = Block.mine(gen, 'foobar');
console.log(gen.toString());
console.log(fooBlock.toString());

v3
let BC = new Blockchain();
BC.addBlock('foo');
console.log(BC.chain[0].toString());
console.log(BC.getLastBlock().toString());
*/
