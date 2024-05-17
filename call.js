//METODOS HTTP CON FETCH
// GET
// fetch("http://localhost:3000/posts/1")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Error:", error));

//POST
// fetch("http://localhost:3000/posts", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     id: 2,
//     title: "json-server",
//     author: "typicode",
//   }),
// });

//PUT
// fetch("http://localhost:3000/posts/3", {
//   method: "PUT",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//   "id": 3,
//   "title": "json-server",
//   "author": "CRACKDONA",
//   "telefono" : 300744678
// })
// });

//PATCH
// fetch("http://localhost:3000/posts/3", {
//   method: "PATCH",
//   headers: {
//     "Content-type": "application/json"
//   },
//   body: JSON.stringify({
//     title: "EDGAR",
//     author: "CRACKDONA"
//   })
// })
//   .then(response => response.json())
//   .then(data => (console.log(data)))
//   .catch(error => (console.error("Error", error)));

//DELETE
// fetch("http://localhost:3000/posts/3", {
//   method: "DELETE",
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data, "Se eliminó correctamente"))
//   .catch((error) => console.error(error));

//METODOS HTTP CON ASYNC AWAIT
//GET
// const getPost = async () => {
//   try {
//     const response = await fetch("http://localhost:3000/posts");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// };
// getPost();

//POST
const postPost = async () => {
  try {
    const response = await fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        id: "3",
        title: "EDGAR",
        author: "CRACKDONA"
      })
    })
    const data = await response.json()
    console.log(data, "Se agregó un nuevo elemento");
  } catch (error) {
    console.error(error)
  }
}
postPost();