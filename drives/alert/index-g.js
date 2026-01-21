megrtnRegister("alert", {
  expose: {
    alert(msg) {
      window.alert(msg ?? "Hello world");
    }
  }
});
