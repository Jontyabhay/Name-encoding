const sonu = require('./Soundex');
const surnamearr = require('./input');
const firstnamearr = require('./input1.js');
const meta = require('./DoubleMetaphone');

function soundexnamematch(str)
{
    let namearr = [];
    for (let j=0;j<surnamearr.length;j++)
    {
        if (sonu(str) === sonu(surnamearr[j].Surname))
        {
            if (str !== surnamearr[j].Surname.toLowerCase())
            {
                namearr.push(surnamearr[j].Surname);
            }
            
        }
    }
    return namearr.join(", ");
}


function nindex(str1, str2)
{
    let nin = 0;
    let fin = 0;
    let sin = 0;
    for (let i=0;i<firstnamearr.length;i++)
    {
        if (str1 === firstnamearr[i].Shortname.toLowerCase())
        {
              fin = firstnamearr[i].Ref;
        }
    }
    for (let k=0;k<surnamearr.length;k++)
    {
        if (str2 === surnamearr[k].Surname.toLowerCase())
        {
            sin = surnamearr[k].Ref1;
        }
    }
    nin = (sin * 1000) + fin;
    return nin; 
}

function foundex(str1,str2)
{
    let found = []
    for (let l=0;l<firstnamearr.length;l++)
    {
        if (str1 === firstnamearr[l].Shortname.toLowerCase())
        {
            found.push(firstnamearr[l].Ref);
            found.push(sonu(str2));
        }
    }
    return found.join("");
}

function findexmetaphone(str1,str2)
{
    let finone = [];
    for (let x=0;x<firstnamearr.length;x++)
    {
        if (str1 === firstnamearr[x].Shortname.toLowerCase())
        {
            finone.push(firstnamearr[x].Ref);
            finone.push(meta(str2));
        }
    }
    return finone.join("");
}

function nindexmatch(str1,str2)
{
    let newarr = [];
    for (let y=0;y<firstnamearr.length;y++)
    {
        for (let z=0;z<surnamearr.length;z++)
        {
            if (nindex(str1,str2) === nindex(firstnamearr[y].Shortname,surnamearr[z].Surname))
            {
                newarr.push(firstnamearr[y].Shortname+' '+surnamearr[z].Surname);
            }
        }
    }
    return newarr.join(", ");
}
module.exports = {soundexnamematch,nindex,foundex,findexmetaphone,nindexmatch};