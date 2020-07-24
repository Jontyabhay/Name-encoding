function is_vowel(string, pos)
{
    return /[AEIOUY]/.test(string.substr(pos, 1));
}

export {is_vowel};