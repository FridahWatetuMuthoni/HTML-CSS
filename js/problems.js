//write code that will return a random letter from your name

function random_letter_in_string(name) {
    const random = Math.floor(Math.random() * name.length)
    //console.log(name[random])
    console.log(random)
    console.log(name.charAt(random))
}

random_letter_in_string("fridah")