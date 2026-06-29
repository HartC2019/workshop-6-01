import express from "express";
import employees from "#db/employees";
import { getEmployee, getRandom } from "#db/employees";

const app = express();

app.get("/", (request, response) => {
  response.send("Hello employees!");
});

app.get("/employees", (request, response) => {
  response.send(employees);
});

app.get("/employees/random", (request, response) => {
  const employee = getRandom();
  response.send(employee);
});

app.get("/employees/:id", (request, response) => {
  const { id } = request.params;
  const employee = getEmployee(Number(id));
  if (!employee) {
    return response.status(404).send(`Employee with ID: ${id} was not found.`);
  }
  response.send(employee);
});

export default app;
