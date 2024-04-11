const chai = window.chai
const expect = chai.expect
should = chai.should();
const target_word="apple"


describe("Test win or lose", ()=>{
    it("Compare guess and apple",()=>{
        expect(compareSame("guess", target_word)).to.deep.equal(false)
    })
    it("Compare apple and apple",()=>{
        expect(compareSame("apple", target_word)).to.deep.equal(true)
    })
});

describe("Test word not in the word list", ()=>{
    it("Check aaaaa",()=>{
        expect(notWord("aaaaa")).to.deep.equal(true)
    })
    it("Check apple",()=>{
        expect(notWord("apple")).to.deep.equal(false)
    })
});

describe("Test color change for apple, result should be all correct", ()=>{
    it("Check a",()=>{
        expect(colorChange("a", target_word, 0)).to.deep.equal("correct")
    })
    it("Check p",()=>{
        expect(colorChange("p", target_word, 1)).to.deep.equal("correct")
    })
    it("Check p",()=>{
        expect(colorChange("p", target_word, 2)).to.deep.equal("correct")
    })
    it("Check l",()=>{
        expect(colorChange("l", target_word, 3)).to.deep.equal("correct")
    })
    it("Check e",()=>{
        expect(colorChange("e", target_word, 4)).to.deep.equal("correct")
    })
});


describe("Test color change for hears", ()=>{
    it("Check h",()=>{
        expect(colorChange("h", target_word, 0)).to.deep.equal("wrong")
    })
    it("Check e",()=>{
        expect(colorChange("e", target_word, 1)).to.deep.equal("wrong-location")
    })
    it("Check a",()=>{
        expect(colorChange("a", target_word, 2)).to.deep.equal("wrong-location")
    })
    it("Check r",()=>{
        expect(colorChange("r", target_word, 3)).to.deep.equal("wrong")
    })
    it("Check s",()=>{
        expect(colorChange("s", target_word, 4)).to.deep.equal("wrong")
    })
});

describe("Test color change for books, result should be all wrong", ()=>{
    it("Check b",()=>{
        expect(colorChange("b", target_word, 0)).to.deep.equal("wrong")
    })
    it("Check o",()=>{
        expect(colorChange("o", target_word, 1)).to.deep.equal("wrong")
    })
    it("Check o",()=>{
        expect(colorChange("o", target_word, 2)).to.deep.equal("wrong")
    })
    it("Check k",()=>{
        expect(colorChange("k", target_word, 3)).to.deep.equal("wrong")
    })
    it("Check s",()=>{
        expect(colorChange("s", target_word, 4)).to.deep.equal("wrong")
    })
});

describe("Test word length is not 5", ()=>{
    it("Check aaa",()=>{
        expect(compareNotLengthOfFive("aaa",5)).to.deep.equal(true)
    })
    it("Check apple",()=>{
        expect(compareNotLengthOfFive("apple",5)).to.deep.equal(false)
    })
});

describe('Test only input English letter', function (){
    it('should return false when input number', function (){
        expect(checkKeyInput("1")).to.deep.equal(false)
        expect(checkKeyInput("9")).to.deep.equal(false)
    })
    it('should return false when input others character', function (){
        expect(checkKeyInput("@")).to.deep.equal(false)
        expect(checkKeyInput("#")).to.deep.equal(false)
    })
});

describe("Test time", function (){
    it("Check time number is exist",function (){
        getdisTime().should.be.a("number")
    })
    it("Check time is moving",function (){
        let time1=getdisTime()
        let time2=getdisTime()
        let check=time1-time2
        let checkMoving=false
        if (check>0)
            console.log(1111)
            checkMoving=true
        expect(checkMoving).to.deep.equal(true)
    })
});