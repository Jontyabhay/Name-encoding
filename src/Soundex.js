function soundex(string)
{
    let sou = [];
    let soui = 1;
    let c;
    let f;

    //             ABCDEFGHIJKLMNOPQRSTUVWXYZ
    let address = "01230120022455012623010202";
    if(typeof string[0] === 'string') //Checks if First character is a string
    {
        if (string[0] === 'c' || string[0] === 'C')
        {
            sou[0] = 'K';
        }
        else
        {
            sou[0] = string[0].toUpperCase();
        }
    }
        if (string[0].toUpperCase() === 'MAC' || string[0].toUpperCase() === "M'" || string[0].toUpperCase() === 'MC')
        {
            sou[0] = string[1].toUpperCase();
        }
    for(let i = 1, l = string.length; i < l; i++)
    {
        c = (string[i].toUpperCase()).charCodeAt(0) - 65;
        f = (string[i-1].toUpperCase()).charCodeAt(0) - 65;

        if(c >= 0 && c <= 25)
        {
            if(address[c] !== '0')  //checks for vowels
            {
                if(string[i] !== string[i-1])  //checks for same adjacent letter
                {
                    if (address[c] !== address[f]) //checks for same adjacent groups
                    {
                        sou[soui] = address[c];
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