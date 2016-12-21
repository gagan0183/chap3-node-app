/**
 * Created by Gagan on 21-12-2016.
 */
var censorWords = ["sad", "bad", "mad"];
var customCensorWords = [];
function censor(inStr) {
    for(idx in censorWords) {
        inStr = inStr.replace(censorWords[idx], "***");
    }
    for(idx in customCensorWords) {
        inStr = inStr.replace(customCensorWords[idx], "***");
    }
    return inStr;
}

function addCensoredWord(word) {
    customCensorWords.push(word);
}

function getCensorWords() {
    return censorWords.concat(customCensorWords);
}

exports.censor = censor;
exports.addCensorWord = addCensoredWord;
exports.getCensorWords = getCensorWords;