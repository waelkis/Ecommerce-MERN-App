import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import categorieRouter from "./routes/categorie.route.js";
import scategorieRouter from "./routes/scategorie.route.js";
import articleRouter from "./routes/article.route.js";
import userRouter from "./routes/user.route.js";
import cors from "cors";

dotenv.config();
const app = express();
//BodyParser Middleware
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
// app.use(express.json()); //req.body==>controller
app.use(cors());
// Connexion à la base données
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connexion à la base de données réussie");
  })
  .catch((err) => {
    console.log("Impossible de se connecter à la base de données", err);
    process.exit();
  });
app.use("/api/categories", categorieRouter);
app.use("/api/scategories", scategorieRouter);
app.use("/api/articles", articleRouter);
app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.send("bonjour");
});
app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
