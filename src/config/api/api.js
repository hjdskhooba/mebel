import ky from "ky";

const api = ky.create({prefixUrl: "https://jsonplaceholder.typicode.com/"})

export default api