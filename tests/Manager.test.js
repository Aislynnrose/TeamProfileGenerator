const Manager = require("../library/Manager")

describe("Manager", () => {
  it("Should return object", () => {
    const manager = new Manager();
    expect(typeof (manager)).toBe("object");
  })
});

describe("getOfficeNumber", () => {
  it("should return office number for the manager", () => {
    const officeNum = new Manager('Az', 1, 'Az@noemail.com', 23);
    expect(officeNum.getOfficeNumber()).toEqual(23);
  })
});

describe("getRole", () => {
  it("should return a string for role of manager", () => {
    const role = new Manager('Az', 1, 'Az@noemail.com', 23, 'Manager');
    expect(role.getRole()).toEqual('Manager');
  })
});