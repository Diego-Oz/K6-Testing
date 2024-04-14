import http from 'k6/http';
import { check, sleep } from 'k6';

const baseUrl = 'https://your-project-url/api/records';
const recordId = 1;
export default function() {
 
  // Escenario 1
  const data = {
    name: 'Jose Marte',
    email: 'josejose3@hotmail.com',
    age: 22
  };

  const updatedData = {
    name: 'Juan Dominguez',
    email: 'jdominguez35@gmail.com',
    age: 35
  };

  const response = http.post(`${baseUrl}/create`, JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });

  check(response, {
    status: '200',
    'Content-Type': 'application/json'
  });

  const responseData = JSON.parse(response.body);

  check(responseData, {
    id: 1,
    name: data.name,
    email: data.email,
    age: data.age
  });

  // Escenario 2
  const registro = http.get(`${baseUrl}/${recordId}`);

  check(registro, {
    status: '200',
    'Content-Type': 'application/json'
  });

  const registroData = JSON.parse(response.body);

  check(registroData, {
    id: recordId,
    name: 'John Doe', 
    email: 'johndoe@example.com', 
    age: 30 
  });

  // Escenario 3
  const user = http.put(`${baseUrl}/${recordId}`, JSON.stringify(updatedData), { headers: { 'Content-Type': 'application/json' } });

  check(user, {
    status: '200',
    'Content-Type': 'application/json'
  });

  const userData = JSON.parse(response.body);

  check(userData, {
    id: recordId,
    name: updatedData.name,
    email: updatedData.email,
    age: updatedData.age
  });
}