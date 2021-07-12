const Intern = require("../library/Intern");

test("Should confirm a school was provided", () => {
    const school = "ACC";
    const employee = new Intern("Az", 23, "Az@noemail.com", school)
    expect(employee.school).toBe(school)
})

test("Getting school name", () => {
    const school = "ACC";
    const employee = new Intern("Az", 23, "Az@noemail.com", school)
    expect(employee.getSchool()).toBe(school)
})

test("Getting role to return as Intern", () => {
    const role = "Intern";
    const employee = new Intern("Az", 23, "Az@noemail.com", "ACC")
    expect(employee.getRole()).toBe(role)
})