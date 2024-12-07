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

- `GET /api/all-products`: Fetch all products.
- `GET /api/limited-products`: Fetch limited products for homepage design.
- `POST /api/products`: Add a new product (Admin only).
- `GET /api/products/:id`: Fetch product details by ID.
- `PUT /api/products/:id`: Update product details (Admin only).
- `DELETE /api/products/:id`: Delete a product (Admin only).

### Users

- `POST /api/users`: Add user details (Admin only).

---

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express**: Framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing application data.
- **CORS**: Middleware for enabling cross-origin requests.
- **JWT**: Secure authentication and authorization. (Future)

---

## Deployment

The server is hosted on **Vercel**.

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Add feature name"`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

For queries or suggestions, please contact:

- **Name**: Naim
- **Email**: [naimxf@gmail.com](mailto:naimxf@gmail.com)
- **Portfolio**: [naim.vercel.app](https://naim.vercel.app)
- **LinkedIn**: [Ataur Rahman Naim](https://www.linkedin.com/in/ataurrahmannaim/)
