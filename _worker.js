const hostname = "http://your.example.com"
// const hostname = "http://192.168.199.199"
// const hostname = "https://your.example.com"
// const hostname = "https://your.example.com/api/path"

function handleRequest(request) {
    let url = new URL(request.url);
    return fetch(new Request(hostname + url.pathname,request))
}

addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})