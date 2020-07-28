function soundex(string)
{
    let sou = [];
    let soui = 1;
    let c;
    let f;

    //             ABCDEFGHIJKLMNOPQRSTUVWXYZ
    let address = "01230120022455012623010202";
    if(typeof string[0] === 'string')
    {
        sou[0] = string[0].toUpperCase();
        f = sou[0].charCodeAt(0)-65;
    }
    
    for(let i = 1, l = string.length; i < l; i++)
    {
        c = (string[i].toUpperCase()).charCodeAt(0) - 65;

        if(c >= 0 && c <= 25)
        {
            if(address[c] !== '0')
            {
                if(address[c] !== sou[soui-1])
                    {
                        sou[soui] = address[c];
                        if (address[f] === sou[1])
                        {
                            sou.pop();
                        }
                        else if (address[f] !== sou[1])
                        {
                           soui = soui + 1;
                        }
                    }
   
                if(soui > 3)
                {
                    break;
                }
            }
        }
    }


    if (soui <= 3)
    {
        while(soui <= 3)
        {
            sou[soui] = 0;
            soui = soui + 1;
        }
    }

    return sou.join("");
}

module.exports = soundex;