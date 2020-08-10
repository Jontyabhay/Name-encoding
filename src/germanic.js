function Slavo_Germanic(string) 
{
    return /W|K|CZ|WITZ/.test(string);     
}

module.exports = Slavo_Germanic;