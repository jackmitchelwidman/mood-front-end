// mood = {wprd. email, description, red, green, blue, created}

//Here, moods is an array of mood objects
const getAverageRed = (moods) => {
    (moods.map(m => m.red).reduce((m,n) => m+n))/moods.length
}

const getAverageGreen= (moods) => {
    (moods.map(m => m.green).reduce((m,n) => m+n))/moods.length
}

const getAverageBlue = (moods) => {
    (moods.map(m => m.blue).reduce((m,n) => m+n))/moods.length
}

const getAverageColor = (moods) => {
    return [getAverageRed(moods), getAverageGreen(moods), getAverageBlue(moods)];
}

export default getAverageColor;


