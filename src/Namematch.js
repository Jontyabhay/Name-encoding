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
    let fx = 0;
    let sx = 0;
    let farr =[];
    let sarr =[];
    let newarr = [];
    for (let i=0;i<firstnamearr.length;i++)
    {
        if (str1 === firstnamearr[i].Shortname.toLowerCase())
        {
            fx = firstnamearr[i].Ref;
            break;
        }
    }
    for (let j=0;j<surnamearr.length;j++)
    {
        if (str2 === surnamearr[j].Surname.toLowerCase())
        {
            sx = surnamearr[j].Ref1;
            break;
        }
    }
    for (let k=0;k<firstnamearr.length;k++)
    {
        if (fx === firstnamearr[k].Ref)
        {
            farr.push(firstnamearr[k].Shortname);
        }
    }
    for (let l=0;l<surnamearr.length;l++)
    {
        if (sx === surnamearr[l].Ref1)
        {
            sarr.push(surnamearr[l].Surname);
        }
    }
    for (let a=0;a<farr.length;a++)
    {
        for (let b=0;b<sarr.length;b++)
        {
          newarr.push(farr[a]+' '+sarr[b]);
        }
    }
    return newarr.join(", ");
}
module.exports = {soundexnamematch,nindex,foundex,findexmetaphone,nindexmatch};