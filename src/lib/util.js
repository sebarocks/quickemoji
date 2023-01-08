import emojis from 'emojibase-data/en/compact.json';

export function getGroupIconEmoji(groupId){
    return emojis.filter(e => e.group == groupId)[0];
}

export function filterGroup(emojiArray, groupId){
    let filtered = emojiArray.filter(e => e.group == groupId);
    return filtered.sort();
}