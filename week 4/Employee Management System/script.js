// script.js
function Employee(name, age, department, salary) {
    this.name = name;
    this.age = age;
    this.department = department;
    this.salary = salary;
}

let employees = [
    new Employee("Klaus", 40, "HR", 5000000),
    new Employee("Rebekah", 35, "HR", 60000),
    new Employee("Elijah", 58, "HR", 70000),
    new Employee("Damon", 42, "IT", 65000),
    new Employee("Stefan", 40, "IT", 45000),
    new Employee("Elena", 25, "IT", 55000),
    new Employee("Caroline", 24, "Marketing", 40000),
    new Employee("Bonnie", 24, "Marketing", 41000),
    new Employee("Enzo", 52, "Marketing", 48000),
];

function displayOutput(output) {
    const outputElement = document.getElementById('output');
    outputElement.innerHTML = output;
    outputElement.style.marginTop = "20px";
}

function calculateAverageSalary() {
    document.getElementById('container').style.width = "50%";
    let totalSalary = employees.reduce((acc, emp) => acc + emp.salary, 0);
    let averageSalary = totalSalary / employees.length;
    displayOutput(`Average Salary: $${averageSalary.toFixed(2)}`);
}

function findEmployeesByDepartment(department) {
    let filteredEmployees = employees.filter(emp => emp.department === department);
    displayOutput(`Employees in ${department}: ${filteredEmployees.map(emp => emp.name).join(', ')}`);
}

function increaseSalary(percentage) {
    employees.forEach(emp => {
        emp.salary += emp.salary * (percentage / 100);
    });
    displayOutput('Salaries increased successfully!.');
}

function sortEmployeesByAge() {
    employees.sort((a, b) => a.age - b.age);
    displayOutput(`Employees Sorted by Age: ${employees.map(emp => emp.name).join(', ')}`);
}
