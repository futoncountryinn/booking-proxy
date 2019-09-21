import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  rps: 1000,
  vus: 150,
  duration: "10s"
};

export default function() {
  let url = "http://localhost:3000/reservation";
  let res = http.get(url);
  check(res, {
    "transaction time OK": (r) => r.timings.duration < 500
  });
  sleep(1);
};