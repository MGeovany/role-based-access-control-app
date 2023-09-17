const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("*", (req, res) =>
  res.status(200).send({
    message: "Hello World!",
  })
);

const port = 4000;

app.listen(port, () => {
  console.log("App is now running at port ", port);
});
