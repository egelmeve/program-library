export async function init() {
  if (typeof window === "undefined" || typeof alert !== "function") {
    throw new Error("alert drive requires a browser environment");
  }
  return {
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
  };
}
