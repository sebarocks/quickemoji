import emojis from 'emojibase-data/en/compact.json';

export function getGroupIconEmoji(groupId){
    return emojis.filter(e => e.group == groupId)[0];
}

export function filterGroup(emojiArray, groupId){
    let filtered = emojiArray.filter(e => e.group == groupId && e.version);
    return filtered.sort();
}

export function getEmojiUrl(hexcode) {
    let url;
    let code = hexcode.toLowerCase();

    // Fix for "copyright" and "trademark" emojis
    if (code.substring(0, 2) == "00") {
        code = code.substring(2);

        // Fix for keycap emojis
        const regex = /-fe0f/i;
        code = code.replace(regex, "");
    }

    // Fix for "Eye in Speech Bubble" emoji
    if (code.includes("1f441")) {
        const regex = /-fe0f/ig;
        code = code.replace(regex, "");
    }

    //url = `https://twemoji.maxcdn.com/v/latest/svg/${code}.svg`
    url = `./svg/${code}.svg`;

    return url;
}

export const toastOptions =  {
    theme: {
        '--toastColor': 'mintcream',
        '--toastBackground': 'rgba(72,187,120,0.9)',
        '--toastBarBackground': '#2F855A'
    }
}