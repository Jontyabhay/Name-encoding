const sonu = require('./Soundex');
const surnamearr = require('./input');
const firstnamearr = require('./input1.js');

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

function sindexnamematch(str)
{
    let namearr = [];
    let namesindex;
    for (let i=0;i<surnamearr.length;i++)
    {
        if (str === surnamearr[i].Surname.toLowerCase())
        {
            namesindex = surnamearr[i].Ref1;
        }
    }
    for (let k=0;k<surnamearr.length;k++)
    {
        if (namesindex === surnamearr[k].Ref1)
        {
            if (str !== surnamearr[k].Surname.toLowerCase())
            {
                namearr.push(surnamearr[k].Surname);
            }
        }
    }
    return namearr.join(", ");
}

function sindexcode(str)
{
    for (let i=0;i<surnamearr.length;i++)
    {
        if (str === surnamearr[i].Surname.toLowerCase())
        {
            return surnamearr[i].Ref1;
        }
    }
}

function findexcode(str)
{
    for (let i=0;i<firstnamearr.length;i++)
    {
        if (str === firstnamearr[i].Shortname.toLowerCase())
        {
            return firstnamearr[i].Ref;
        }
    }
}

function findexnamematch(str)
{
    let namearr = [];
    let namesindex;
    for (let i=0;i<firstnamearr.length;i++)
    {
        if (str === firstnamearr[i].Shortname.toLowerCase())
        {
            namesindex = firstnamearr[i].Ref;
        }
    }
    for (let k=0;k<firstnamearr.length;k++)
    {
        if (namesindex === firstnamearr[k].Ref)
        {
            if (str !== firstnamearr[k].Shortname.toLowerCase())
            {
                namearr.push(firstnamearr[k].Shortname);
            }
        }
    }
    return namearr.join(", ");
}

module.exports = {soundexnamematch,sindexnamematch
                ,sindexcode,findexcode,
                 findexnamematch};