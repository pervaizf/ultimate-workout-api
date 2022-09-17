document.querySelector("button").addEventListener("click", getMuscles)


async function getMuscles() {
    document.querySelector('ul').innerHTML = ""
    const muscle = document.querySelector("input").value
    try{
    const get = await fetch(`https://api-ultimate-workout.herokuapp.com/api/${muscle}`)
    console.log("Fetch successful")
    const data = await get.json()
    console.log(data)
    data.exercises.forEach(element => document.querySelector('ul').innerHTML += `<li>${element}</li>`)
} catch(error) {
        console.log(error)
    }
}