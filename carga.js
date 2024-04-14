import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '1m', target: 25 },
    { duration: '1m', target: 50 },
    { duration: '1m', target: 75 },
    { duration: '1m', target: 100 },
  ],
};

export default function () {
  const res = http.get('https://jsonplaceholder.typicode.com/posts');
  check(res, { 'status is 200': (r) => r.status === 200 });
  sleep(1);
}