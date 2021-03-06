# Hack3 2022 | Server

## ⚡ Setup

1. `npm install` to install dependencies
2. `npm run dev` to start server.

## ❓ General

Exposes API to interact with machine learning model. Model is able to classify percent concentration of salt in water to help identify salt water intruded rivers.

## 📑 Documentation

Server starts on localhost port 5000. POST request using URLs below. Key for file in request body must be `file`.

### Salt Water Intrusion Classification

http://localhost:5000/api/salinity

### Dependencies

Salt water model (generated in Google Colab) must be located in `./server` directory under the name `keras.model`.

## ⚙️ Technologies Used

- Python, Tensorflow
- TypeScript, Express
