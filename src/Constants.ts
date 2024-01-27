let BASE_URL = "http://localhost:5000";
if (process.env.NODE_ENV == "development") {
  BASE_URL = "https://portfolio-api-e7be.onrender.com";
}

export { BASE_URL };
