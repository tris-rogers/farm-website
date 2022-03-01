const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.join(__dirname, "client/build");

app.use(express.static(publicPath));

app.get("/:pages", (req, res) => {
  function checkPages(slug) {
    let result;
    switch (slug) {
      case "about":
      case "produce":
      case "contact":
        result = true;
        break;
      default:
        result = false;
    }
    return result;
  }

  if (checkPages(req.params.pages)) {
    res.sendFile(path.join(publicPath, "index.html"));
  } else {
    res.send("Error: Page Does Not Exist");
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});
