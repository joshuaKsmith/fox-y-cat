fetch('https://randomfox.ca/floof')
    .then(response => response.json())
    .then(
        (convertedData) => {
            const foxImgElement = document.querySelector("#fox")
            foxImgElement.src = convertedData.image
        }
    )


const getTheDog = async () => {
    const response = await fetch("https://random.dog/woof.json")
    const dogJSONConvertedToObject = await response.json()
    const dogImgElement = document.querySelector("#dog")
    dogImgElement.src = dogJSONConvertedToObject.url
}

getTheDog()