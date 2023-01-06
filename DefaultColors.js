
function getDefaultColorFromMood(mood)  {
    var colors = {}
    colors['excellent'] = [0,0,255];
    colors['joyful'] = [0,128,255];
    colors['excited'] = [127,0,255];
    colors['content'] = [102,178,255];
    colors['grateful'] = [51,51,255];
    colors['playful'] = [0,255,255];

    return colors[mood];
}

export default getDefaultColorFromMood;