export default function Hello(app) {
  const hello = (req, res) => {
    res.send("Hello World afesaf");
  };
  const home = (req, res) => {
    res.send("Welcome to full stack development");
  };
  app.get("/hello", hello);
  app.get("/", home);
}
