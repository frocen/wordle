const chai = window.chai
const expect = chai.expect
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

describe('retries', function () {
    // Retry all tests in this suite up to 4 times
    this.retries(4);
    it('should succeed on the 3rd try', function () {
      // Specify this test to only retry up to 2 times
      this.retries(2);
      expect($('.foo').isDisplayed()).to.eventually.be.true;
    });
  });