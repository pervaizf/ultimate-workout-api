document.querySelector("#button").addEventListener("click", getMuscles)


async function getMuscles() {
    const muscle = document.querySelector("input").value
    console.log(muscle)
    const get = await fetch(`localhost:8000/api/${muscle}`)
    const data = await get.json()
    data.exercises.forEach(element => document.querySelector("#exercises").innerHTML += `<li>${element}<li>`)
}