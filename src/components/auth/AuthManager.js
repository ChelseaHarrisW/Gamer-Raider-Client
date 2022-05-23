export const getUser = () => {
    return fetch("http://localhost:8000/players", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}