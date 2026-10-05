# MS Dhoni GOAT Reasons API 🏏

A REST API built using **Node.js and Express.js** that provides reasons why MS Dhoni is considered one of the greatest cricketers of all time.

Retrieve a random reason, fetch a specific reason by ID, or filter reasons by category using simple HTTP GET requests. All responses are provided in JSON format.

## ✨ Features

* Retrieve a random reason about MS Dhoni.
* Fetch a reason using its unique ID.
* Filter reasons by category.
* Receive structured JSON responses.
* Integrate with websites, React applications, and other clients.

## 🛠️ Tech Stack

* Node.js
* Express.js
* JavaScript (ES Modules)
* JSON

## 📂 Project Structure

```text
dhoni-goat-api/
├── data.js
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/) and npm.

### Installation

Clone the repository: https://github.com/SanjaysudhanSivashunmugam/Dhoni-API

```bash
git https://github.com/SanjaysudhanSivashunmugam/Dhoni-API
cd Dhoni-API
```

Install dependencies:

```bash
npm install
```

Ensure your `package.json` includes `"type": "module"` because the project uses ES module imports.

### Start the Server

```bash
npm start
```

For deployment, configure your hosting platform to run the start command and use the port supplied through the `PORT` environment variable.

## 📖 API Documentation

**Base URL:** `https://dhoni-api.onrender.com`

Replace this placeholder with the public URL provided by your hosting platform.

All endpoints use the HTTP `GET` method. No request body is required.

### 1. Get a Random Reason

**Endpoint:** `/random`

Returns one randomly selected reason from the dataset.

**Request:**

```http
GET YOUR_DEPLOYED_API_URL/random
```

**Example response:**

```json
{
  "id": 1,
  "category": "Leadership",
  "reason": "MS Dhoni is known for his calm leadership under pressure."
}
```

The response is illustrative; the actual data depends on `data.js`.

### 2. Get a Reason by ID

**Endpoint:** `/reason/:id`

Retrieves a specific reason using its unique ID.

**Request:**

```http
GET https://dhoni-api.onrender.com/reason/1
```

**Path parameter:**

| Parameter | Type    | Description                       |
| --------- | ------- | --------------------------------- |
| `id`      | Integer | Unique ID of the requested reason |

**Example response:**

```json
{
  "id": 1,
  "category": "Leadership",
  "reason": "MS Dhoni is known for his calm leadership under pressure."
}
```

If the ID does not exist, the current implementation may return an empty response. A `404 Not Found` response is recommended for missing IDs.

### 3. Filter Reasons by Category

**Endpoint:** `/filter`

Returns all reasons matching the specified category.

**Request:**

```http
GET https://dhoni-api.onrender.com/filter?category=Leadership
```

**Query parameter:**

| Parameter  | Type   | Description                         |
| ---------- | ------ | ----------------------------------- |
| `category` | String | Category used to filter the reasons |

**Example response:**

```json
[
  {
    "id": 1,
    "category": "Leadership",
    "reason": "MS Dhoni is known for his calm leadership under pressure."
  },
  {
    "id": 2,
    "category": "Leadership",
    "reason": "He led India to major international cricket victories."
  }
]
```

The example content is illustrative. Category names must match the values in your dataset, including capitalization.

If no reasons match, the API returns an empty JSON array:

```json
[]
```

## 💻 Using the API in JavaScript

You can call the hosted API from a frontend application using the Fetch API.

```javascript
const API_BASE_URL = "https://dhoni-api.onrender.com/";

async function getRandomReason() {
    try {
        const response = await fetch(
            `${API_BASE_URL}/random`
        );

        if (!response.ok) {
            throw new Error("Failed to fetch reason");
        }

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.error("API Error:", error);
    }
}

getRandomReason();
```

If your frontend and API use different origins, configure CORS on the server if necessary.

## ⚙️ How It Works

1. A client sends a GET request to an endpoint.
2. Express matches the request to the appropriate route.
3. The application reads the ID or category, if provided.
4. JavaScript searches or filters the dataset imported from `data.js`.
5. The server returns the result as JSON.

## 🌐 REST API Principles

This project demonstrates REST-style API concepts:

* Resource access through URLs.
* Standard HTTP GET requests.
* JSON data exchange.
* Path parameters for retrieving individual resources.
* Query parameters for filtering resources.

This is a beginner-friendly REST API project. It currently uses an imported JavaScript dataset rather than a database.

## 🚀 Future Improvements

* Add proper error handling and input validation.
* Implement keyword search and pagination.
* Connect a database such as MongoDB or PostgreSQL.
* Add automated API tests.
* Introduce API versioning.
* Publish interactive documentation using Swagger or OpenAPI.

## 🤝 Contributing

1. Fork the repository.
2. Create a branch for your changes.
3. Implement and test your improvements.
4. Submit a pull request with a clear description.

## 📄 License

Add a `LICENSE` file to specify how others may use and distribute this project.

## 👨‍💻 Author

**Sanjaysudhan S**

GitHub: https://github.com/SanjaysudhanSivashunmugam

LinkedIn: https://www.linkedin.com/in/sanjaysudhan-sivashanmugam-a5a901255/

---

Built with Node.js and Express.js, inspired by MS Dhoni's legendary cricketing journey. 🏏
