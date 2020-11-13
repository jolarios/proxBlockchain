//File for blockchain.js testing

const Block = require('./block');
const Blockchain = require('./index');


describe('blockchain', ()=>{
    let bc;
    let bc2;
    beforeEach(() =>{
        bc = new Blockchain();
        bc2 = new Blockchain();
    })

    it('Start the genesis Block', ()=>{
        expect(bc.chain[0]).toEqual(Block.genesisBlock());
    })

    it('Add new block', ()=>{
        const data = "Traspaso de 12 BTC a Fulano";
        bc.addBlock(data);
        expect(bc.chain[bc.chain.length - 1].data).toEqual(data);
    })

    it('Validate a valid chain', () =>{
        bc2.addBlock('foo');
        expect(bc2.chainValidator(bc2.chain)).toBe(true);
    })

    it('Validate chain with corrupt genesis block', () =>{
        bc2.chain[0].data = 'asdfg';
        expect(bc.chainValidator(bc2.chain)).toBe(false);
    })

    it('Invalidate a corrupt chain', () =>{
        bc2.addBlock('foo');
        bc2.chain[0].data = 'asdfg';
        expect(bc.chainValidator(bc2.chain)).toBe(false);
    })

    it('Replace chain with valid chain', () =>{
        bc2.addBlock('goo');
        bc.replaceChain(bc2.chain);
        expect(bc.chain).toEqual(bc2.chain);
    })

    it('Does not replace chain with one equal or less than length ', () =>{
        bc.addBlock('foo');
        bc.replaceChain(bc2.chain);
        expect(bc.chain).not.toEqual(bc2.chain);
    })



})
