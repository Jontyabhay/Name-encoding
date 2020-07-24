function soundex(string)
{
    let s = [];
    let si = 1;
    let c;

    //              ABCDEFGHIJKLMNOPQRSTUVWXYZ
    let mappings = "01230120022455012623010202";
    if(typeof string[0] === 'string')
    {
        s[0] = string[0].toUpperCase();
    }
    
    for(let i = 1, l = string.length; i < l; i++)
    {
        c = (string[i].toUpperCase()).charCodeAt(0) - 65;

        if(c >= 0 && c <= 25)
        {
            if(mappings[c] !== '0')
            {
                if(mappings[c] !== s[si-1])
                {
                    s[si] = mappings[c];
                    si = si + 1;
                }

                if(si > 3)
                {
                    break;
                }
            }
        }
    }

    if(si <= 3)
    {
        while(si <= 3)
        {
            s[si] = '0';
            si = si + 1;
        }
    }

    return s.join("");
}

module.exports = soundex;