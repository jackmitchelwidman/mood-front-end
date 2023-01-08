import color from 'color';

const getAverageRed = (moods) => {
    const n = Math.round((moods.map(m => m.red).reduce((m,n) => m+n))/moods.length);
    console.log('red: ' + n);
    return n;
}

const getAverageGreen= (moods) => {
    return Math.round((moods.map(m => m.green).reduce((m,n) => m+n))/moods.length);
}

const getAverageBlue = (moods) => {
    return Math.round((moods.map(m => m.blue).reduce((m,n) => m+n))/moods.length);
}

const getAverageColor = (moods) => {
    console.log('Inside getAverageColor. moods.length=' + moods.length);
    const result = [getAverageRed(moods), getAverageGreen(moods), getAverageBlue(moods)];
    console.log('returning: ' + result);
    return result;
}

export const convertToHex = (rgb) => {
    const rgbColor = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
    const hexColor = color(rgbColor).hex().toString(); 
    return hexColor;
}


export default getAverageColor;


