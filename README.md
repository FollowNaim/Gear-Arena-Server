# GearArena Server

The backend for **GearArena**, a sports equipment e-commerce platform, built with **Node.js**, **Express**, **MongoDB**, and **CORS**. This server provides APIs for user authentication, product management, and other essential functionalities.

---

## 🌐 Live API URL

[GearArena Server](https://geararena-server.vercel.app)

---

## Features

- **RESTful API**: Endpoints for managing users, sports equipment, and product categories.
- **MongoDB Integration**: Secure data storage and retrieval with MongoDB.
- **User Authentication**: Implements JWT-based authentication for secure user sessions.
- **CORS Enabled**: Ensures seamless API communication between client and server.
- **Robust Error Handling**: Provides clear error messages for invalid requests.
- **CRUD Operations**: Supports Create, Read, Update, and Delete functionalities for resources.

---

## API Endpoints

### Products

- `GET /api/products`: Fetch all products.
- `GET /api/products?limit=your_limit`: Fetch limited products.
- `GET /api/products?sort=[ascending or descending]`: Sort the products.
- `GET /api/products?limit=your_limit&sort=[ascending or descending]`: Limit the products and then Sort them.
- `POST /api/products`: Add a new product (Admin only).
- `GET /api/products/:id`: Fetch product details by ID.
- `PUT /api/products/:id`: Update product details (Admin only).
- `DELETE /api/products/:id`: Delete a product (Admin only).

### Users

- `POST /api/users`: Add user details (Admin only).

---

## ⚙️ Technologies Used

- **Node.js**: Backend runtime environment.
- **Express**: Framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing application data.
- **CORS**: Middleware for enabling cross-origin requests.
- **JWT**: Secure authentication and authorization. (Future)

---

## 📦 Dependencies

- **cors** (^2.8.5) – A Node.js middleware to enable Cross-Origin Resource Sharing (CORS) for your Express app.
- **dotenv** (^16.4.6) – A library to load environment variables from a `.env` file into `process.env`.
- **express** (^4.21.1) – A web application framework for Node.js, used to build APIs and server-side applications.
- **mongodb** (^6.11.0) – A Node.js driver for MongoDB, allowing interaction with a MongoDB database.

---

## 🔧 How to Run

1. **Clone the repository.**

```bash
   git clone https://github.com/FollowNaim/Gear-Arena-Server
   cd Gear-Arena-Server
```

2. **Install Dependencies**

```bash
npm install
```

3. **Setup Environment Variables**

- create .env in the root directory.
- create a collection on mongodb atlas.
- Add `DB_USER, DB_PASS` variable and add your database username and password.

4. **Run the application**

```bash
npm run dev
```

5. **Access the app**

- Open http://localhost:5000 in your browser.

---

## 🛠️ Deployment

- Hosted on Netlify or Vercel for a fast and reliable experience.

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Add feature name"`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

---

## Contact

For queries or suggestions, please contact:

- **Name**: Naim
- **Email**: [naimxf@gmail.com](mailto:naimxf@gmail.com)
- **Portfolio**: [naim.vercel.app](https://naim.vercel.app)
- **LinkedIn**: [Ataur Rahman Naim](https://www.linkedin.com/in/ataurrahmannaim/)
