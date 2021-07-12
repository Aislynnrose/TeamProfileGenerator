const Engineer = require("../library/Engineer")

describe("Engineer", () => {
  it("should return object", () => {
    const engineer = new Engineer();
    expect(typeof (engineer)).toBe("object");
  })
});


describe("getGithub", () => {
  it("should return string of engineers github", () => {
    const github = new Engineer('Az', 23, 'Az@noemail.com','Aislynnrose');
    expect(github.getGithub()).toEqual('Aislynnrose');
  })
});

describe("getRole", () => {
  it("Should return a string of engineers role", () => {
    const role = new Engineer('Az', 23, 'Az@noemail.com','Aislynnrose', 'Engineer');
    expect(role.getRole()).toEqual('Engineer');
  })
});