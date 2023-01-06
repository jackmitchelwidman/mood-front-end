
function getDefaultColorFromMood(mood)  {
    var colors = {}
    colors['excellent'] = [255,255,0];
    colors['joyful'] = [255,255,51];
    colors['excited'] = [255,69,0];
    colors['content'] = [255,165,0];
    colors['grateful'] = [255,99,71];
    colors['playful'] = [255,127,80];

    return colors[mood];
}

export default getDefaultColorFromMood;