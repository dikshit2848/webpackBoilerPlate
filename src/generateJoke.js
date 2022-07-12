import axios from "axios";

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const data = await axios.get("https://icanhazdadjoke.com", config);
  console.log(data.data.joke);
  document.getElementById("joke").innerHTML = data.data.joke;
  // return data.data.joke;
}

export default generateJoke;
