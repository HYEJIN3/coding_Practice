fetch("https://api.jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
        title: "Test",
        body: "I am testing!",
        userId: 1,
    }),
}).then((response) => console.log(response));