require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("GearArena server is running");
});

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.sdg7y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
    const db = client.db("gear-arena");
    const productsCollection = db.collection("all-products");
    const usersCollection = db.collection("users");

    app.post("/users", async (req, res) => {
      const user = req.body;
      const result = await usersCollection.insertOne(user);
      res.send(result);
    });

    app.get("/limited-products", async (req, res) => {
      const cursor = productsCollection.find().limit(6);
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/products/:id", async (req, res) => {
      const result = await productsCollection.findOne({
        _id: new ObjectId(req.params.id),
      });
      res.send(result);
    });

    app.patch("/products/:id", async (req, res) => {
      const product = req.body;
      const result = await productsCollection.updateOne(
        { _id: new ObjectId(req.params.id) },
        {
          $set: {
            itemName: product.itemName,
            categoryName: product.categoryName,
            image: product.image,
            description: product.description,
            price: product.price,
            rating: product.rating,
            customization: product.customization,
            processingTime: product.processingTime,
            stockStatus: {
              availability: product.stockStatus.availability,
              quantity: product.stockStatus.quantity,
            },
          },
        }
      );
      res.send(result);
    });

    app.get("/all-products", async (req, res) => {
      const result = await productsCollection.find().toArray();
      res.send(result);
    });

    app.post("/products", async (req, res) => {
      const product = req.body;
      const result = await productsCollection.insertOne(product);
      res.send(result);
    });

    app.post("/my-equipment", async (req, res) => {
      const { email } = req.body;
      const cursor = productsCollection.find({ userEmail: email });
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/products-sorted", async (req, res) => {
      const query = req.query.sort;
      let cursor;
      if (query === "ascending") {
        cursor = await productsCollection.find().sort({ price: 1 }).toArray();
      } else if (query === "descending") {
        cursor = await productsCollection.find().sort({ price: -1 }).toArray();
      }
      res.send(cursor);
    });

    app.delete("/products/:id", async (req, res) => {
      const result = await productsCollection.deleteOne({
        _id: new ObjectId(req.params.id),
      });
      res.send(result);
    });
  } catch (err) {
    console.log("Something went wrong :", err);
  }
}
run().catch((err) => console.log("Something went wrong :", err));

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
