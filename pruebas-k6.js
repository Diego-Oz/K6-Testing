import http from 'k6/http';
import { check, sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}

export let options = {
  vus: 10,
  duration: '30s',
};

export default function () {
  const res = http.post('https://jsonplaceholder.typicode.com/posts', {
    title: 'Prueba',
    body: 'Cuerpo de solicitud de prueba',
    userId: 1,
  });
  check(res, { 'status is 201': (r) => r.status === 201 });
  sleep(1);

  const res2 = http.put('https://jsonplaceholder.typicode.com/posts/1', {
    title: 'Prueba actualizada',
    body: 'Cuerpo de solicitud de prueba actualizado',
    userId: 1,
  });
  check(res2, { 'status is 200': (r) => r.status === 200 });
  sleep(1);
}

