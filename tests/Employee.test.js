const Employee = require("../library/Employee")

test("Should return an object", () => {
  const employee = new Employee()
      expect(typeof (employee)).toBe("object");
  
  })
  
  test("Should create a name", () => {
      const name = "Az";
      const employee = new Employee(name)
      expect(employee.name).toBe(name)
  })
  
  test("Should create ID", () => {
      const id = 23;
      const employee = new Employee("Az", id)
      expect(employee.id).toBe(id)
  })
  
  test("Should create an email", () => {
      const email = "Az@noemail.com";
      const employee = new Employee("Az", 23, email)
      expect(employee.email).toBe(email)
  })
  
  test("Get name", () => {
      const name = "Az";
      const employee = new Employee(name)
      expect(employee.getName()).toBe(name)
  })
  
  test("Get id", () =>{
      const id = 23;
      const employee = new Employee ("Az", id)
      expect(employee.getId()).toBe(id)
  })
  
  test("Get email", () =>{
      const email = "Az@noemail.com";
      const employee = new Employee("Az", 23, email)
      expect(employee.getEmail()).toBe(email)
  })
  
  test("Get role", () =>{
      const role = "Employee";
      const employee = new Employee("Az", 23,"aabd@gmail.com")
      expect(employee.getRole()).toBe(role)
  })
