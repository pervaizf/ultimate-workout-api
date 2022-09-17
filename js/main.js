document.querySelector("h1").addEventListener("click", getMuscles)


async function getMuscles() {
    const muscle = document.querySelector("input").value
    console.log(muscle)
    const get = await fetch(`https://api-ultimate-workout.herokuapp.com/api/${muscle}`)
    console.log("Fetch successful")
    const data = await get.json()
    console.log(data)
    data.exercises.forEach(element => document.querySelector("#exercises").innerHTML += `<li>${element}<li>`)
}