import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
    vus: 10,
    duration: '5m',
    iterations: 40,
};

export default function(){
    // let url = "https://httpbin.test.k6.io/post";
    // let response = http.post(url, "hola mundo");

    // check(response, {
    //     'La respuesta dice hola mundo':(r)=>r.body.includes("hola mundo")

    // });
    http.get('https://httpbin.test.k6.io/post');
    sleep(5);

}