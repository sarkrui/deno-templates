addEventListener("fetch", (event) => {
  const response = new Response("", {
    status: 302,
    headers: {
      'location': 'https://DESINATED_DOMAIN'
    }
  })
  event.respondWith(response);
});
