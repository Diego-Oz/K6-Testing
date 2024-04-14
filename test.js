import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    vus: 10,
    duration: '5m',
    iterations: 40,
};

export default function(){
    let url = "https://httpbin.test.k6.io/post";
    let response = http.post(url, "Estoy haciendo mis pruebas de rendimiendo con k6");
    check(response, {
        'Respuesta de la solicitud':(r)=>r.body.includes("Estoy haciendo mis pruebas de rendimiendo con k6"),
        'Estatus de la respuesta':(r)=>r.status === 200,
        'Tiempo de solicitud < 500ms':(r)=>r.timings.duration < 500
    })
    sleep(1);
}