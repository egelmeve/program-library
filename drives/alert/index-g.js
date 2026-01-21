megrtnRegister("alert", {
  expose: {
    alert: {
        hello(message = "Hello, world!") {
          alert(message);
        },
        raw(text) {
          alert(String(text));
        }
    }
  }
});
