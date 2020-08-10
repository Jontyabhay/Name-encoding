function is_vowel(string, pos)
{
    return /[AEIOUY]/.test(string.substr(pos, 1));
}

module.exports = is_vowel;