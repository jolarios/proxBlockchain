//This class have the mission of append all the blocks on our Blockchain

const Block = require('./block');

class Blockchain{

    constructor(){
    //Properly the chain itself
        this.chain = [Block.genesisBlock()];
    }

    getLastBlock(){
    //Returns blockchain last block
        return this.chain[this.chain.length - 1]
    }

    addBlock(data){
    //Add block in the blockchain with the info of the previus block in the chain
        const block = Block.mine(this.getLastBlock(), data);
        this.chain.push(block);
        return block;
    }


    chainValidator(chain){
    //this function prooves the validity of the chain
        if(JSON.stringify(chain[0]) !== JSON.stringify(Block.genesisBlock())) {
            return false;
        }
        for(let i = 1; i < chain.length; i++){
            const block = chain[i];
            const lastBlock = chain[i - 1];
            if((block.lastHash !== lastBlock.hash) || (block.hash !== Block.blockHash(block))) {
                console.log(block.hash);
                console.log(Block.blockHash(block));
                return false;
            }
        }
        return true;
    }

    replaceChain(newChain){
    //This function replace the chain with the largest chain in the net after validate it
        if(newChain.length <= this.chain.length){
            console.log('Received chain is not longer than the current chain');
            return;
        } else if(!this.chainValidator(newChain)){
            console.log('The received chain is not valid');
            return
        }
        console.log('Replacing the received chain');
        this.chain = newChain;
    }
}


module.exports = Blockchain;
