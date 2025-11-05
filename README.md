
# Guestara Assignment ✅

This is a **Menu Management Backend Application** built using **Node.js, Express, and MongoDB**.  
It allows creation and management of **Categories, Sub-categories, and Items** with tax settings and price calculations.

---

## ✨ Features

- Create, edit, and retrieve categories with tax configuration
- Add sub-categories under categories with inherited tax settings
- Manage items with base price, discount, and tax applicability
- Auto-calculate final price (BaseAmount − Discount)
- Flexible menu structure (items can belong to category or sub-category)
- Search items by name
- RESTful CRUD APIs with clean architecture
- MongoDB + Mongoose schema validation & relationships
- Environment variables for secure configuration

---

## 🧠 Tech Stack

| Layer | Technology |
|------|-----------|
| Runtime | Node.js |
| Framework | Express.js |
| Database | MongoDB (Mongoose ODM) |
| Deployment | Render |
| API Testing | Postman |

---


## Installation 🛠️

Clone the repository : 

```bash
https://github.com/harshad-bondarde/Assignement-Guestara
```

Install dependencies :
```bash
npm install
```

Set up environment variables :

```bash
PORT=
MONGO_URI=
```
Run backend and frontend
```bash
node index
```

    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`MONGO_URI`
