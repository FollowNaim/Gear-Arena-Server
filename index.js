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

    // adding user to mongodb along with firebase
    app.post("/users", async (req, res) => {
      const user = req.body;
      const result = await usersCollection.insertOne(user);
      res.send(result);
    });

    // gettin all products available on collection and getting limited data when using limit query and getting sorted data along with limit when using sort query
    app.get("/products", async (req, res) => {
      // default variable to add result and return always
      let result;
      // checking if query has sort and limit both then will work this
      if (req.query.sort && req.query.limit) {
        if (req.query.sort === "ascending") {
          result = await productsCollection
            .find()
            .sort({ price: 1 })
            .limit(parseInt(req.query.limit))
            .toArray();
        } else if (req.query.sort === "descending") {
          result = await productsCollection
            .find()
            .sort({ price: -1 })
            .limit(parseInt(req.query.limit))
            .toArray();
        }
      }
      // checking if query has only sort not limit
      if (req.query.sort && !req.query.limit) {
        if (req.query.sort === "ascending") {
          result = await productsCollection.find().sort({ price: 1 }).toArray();
        } else if (req.query.sort === "descending") {
          result = await productsCollection
            .find()
            .sort({ price: -1 })
            .toArray();
        }
      }
      // checking if query has only limit not sort
      if (req.query.limit && !req.query.sort) {
        result = await productsCollection
          .find()
          .limit(parseInt(req.query.limit))
          .toArray();
      }
      // checking if nothing on query then return all data
      if (JSON.stringify(req.query) === "{}") {
        result = await productsCollection.find().toArray();
      }
      // ultimetly returning the result
      res.send(result);
    });

    // getting selected product info via id
    app.get("/products/:id", async (req, res) => {
      const result = await productsCollection.findOne({
        _id: new ObjectId(req.params.id),
      });
      res.send(result);
    });

    // adding single product to the collection
    app.post("/products", async (req, res) => {
      const product = req.body;
      const result = await productsCollection.insertOne(product);
      res.send(result);
    });

    // getting my added data with filtering
    app.post("/my-equipment", async (req, res) => {
      const { email } = req.body;
      const cursor = productsCollection.find({ userEmail: email });
      const result = await cursor.toArray();
      res.send(result);
    });

    // updating product info or partial update via update page
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

    // deleting product via id
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
