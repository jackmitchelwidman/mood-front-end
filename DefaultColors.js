
function getDefaultColorFromMood(mood)  {
    var colors = {}
    colors['excellent'] = [255,255,0];
    colors['joyful'] = [255,255,51];
    colors['excited'] = [255,69,0];
    colors['content'] = [255,165,0];
    colors['grateful'] = [255,99,71];
    colors['playful'] = [255,127,80];

    colors['bored'] = [176,196,222];
    colors['restless'] = [95,158,160];
    colors['pensive'] = [0,191,255];
    colors['apathetic'] = [240,248,255];
    colors['worried'] = [200,200,200];
    colors['anxious'] = [255,233,0];

    colors['depressed'] = [47,79,79];
    colors['hopeless'] = [0,0,0];
    colors['angry'] = [200,0,0];
    colors['unhappy'] = [116,139,151];
    colors['lonely'] = [220,220,220];
    colors['melancholy'] = [253,233,0];



    return colors[mood.word];
}

export function getPositionFromMood(mood) {
    var position = {};
    position['excellent'] = 3
    position['joyful'] = 3
    position['excited'] = 3
    position['content'] = 3
    position['grateful'] = 3
    position['playful'] = 3

    position['bored'] = 2
    position['restless'] = 2
    position['pensive'] = 2
    position['apathetic'] = 2
    position['worried'] = 2
    position['anxious'] = 2

    position['depressed'] = 3
    position['hopeless'] = 3
    position['angry'] = 3
    position['unhappy'] = 3
    position['lonely'] = 3
    position['melancholy'] = 3

    return position[mood.word];

}

export default getDefaultColorFromMood;
