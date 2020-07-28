function soundex(string)
{
    let s = [];
    let si = 1;
    let c;
    let f;

    //             ABCDEFGHIJKLMNOPQRSTUVWXYZ
    let address = "01230120022455012623010202";
    if(typeof string[0] === 'string')
    {
        s[0] = string[0].toUpperCase();
        f = s[0].charCodeAt(0)-65;
    }
    
    for(let i = 1, l = string.length; i < l; i++)
    {
        c = (string[i].toUpperCase()).charCodeAt(0) - 65;

        if(c >= 0 && c <= 25)
        {
            if(address[c] !== '0')
            {
                if(address[c] !== s[si-1])
                    {
                        s[si] = address[c];
                        if (address[f] === s[1])
                        {
                            s.pop();
                        }
                        else if (address[f] !== s[1])
                        {
                           si = si + 1;
                        }
                    }
   
                if(si > 3)
                {
                    break;
                }
            }
        }
    }


    if (si <= 3)
    {
        while(si <= 3)
        {
            s[si] = 0;
            si = si + 1;
        }
    }

    return s.join("");
}

module.exports = soundex;