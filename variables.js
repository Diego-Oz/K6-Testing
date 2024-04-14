import http from 'k6/http'

const hostname = "http://test.ke.io"

export default function(){

    let response = http.post(hostname, "hola mundo");
}