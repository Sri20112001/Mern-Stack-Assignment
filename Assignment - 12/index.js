// Dom Manipulation
const header = document.getElementById("header");
const fetchbtn = document.getElementById("fetchbtn");
const resetbtn = document.getElementById("rstbtn");

// Add event listener function is created for the fetch button so it can fetch data from the API
// This function is a async function

fetchbtn.addEventListener("click", async () => {
    header.textContent = 'Loading....'
    //try catch block is used to execute and catch the error
    try {
        // Fetch method is used to fetch data from the api by assigning a variable
    const url = await fetch("https://baconipsum.com/api/?type=all");
     // url.json() is await since it need some time
     const response = await url.json();
        header.textContent = response;

    } catch (error) {
        header.textContent = error.message;
    }
});

resetbtn.addEventListener("click", () => {
    header.textContent = "";
});