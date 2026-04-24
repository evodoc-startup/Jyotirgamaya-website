async function test() {
  const payload = {
    access_key: "f2a5478c-4b9d-4858-bc1d-afcf5117b6a0",
    name: "Test CLI",
    email: "test@example.com",
    message: "Test message"
  };
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload)
  });
  const data = await res.json();
  console.log(data);
}
test();
