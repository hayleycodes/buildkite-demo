const app = require("../src/app");

// eslint-disable-next-line no-undef
const port = process.env.PORT || 8080;

app.listen(port, () =>
  console.log(`app listening on http://localhost:${port}`)
);
