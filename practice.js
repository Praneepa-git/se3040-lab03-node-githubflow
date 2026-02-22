// 4) Making an HTTP request
const https = require("https");

// 5) Using a module
const myModule = require("./my-module.js");
console.log("Module output:", myModule.myFunction());

// 6) Promises
const myPromise = new Promise((resolve, reject) => {
  const condition = true; // change to false to test reject
  if (condition) resolve("Success!");
  else reject("Failure!");
});

myPromise
  .then((result) => console.log("Promise result:", result))
  .catch((error) => console.log("Promise error:", error));

// 7) Async/Await
async function myAsyncFunction() {
  try {
    const result = await myPromise;
    console.log("Async/Await result:", result);
  } catch (error) {
    console.log("Async/Await error:", error);
  }
}
myAsyncFunction();

// HTTP GET request (prints JSON)
https
  .get("https://jsonplaceholder.typicode.com/posts/1", (resp) => {
    let data = "";

    resp.on("data", (chunk) => {
      data += chunk;
    });

    resp.on("end", () => {
      console.log("HTTP GET result:", JSON.parse(data));
    });
  })
  .on("error", (err) => {
    console.log("Error:", err.message);
  });