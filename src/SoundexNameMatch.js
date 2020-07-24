const arre = require('./input.js');
const sonu = require('./Soundex.js');

function NameMatch(str)
{
    let n = [];
    for (let j=0;j<arre.length;j++)
    {
        if (sonu(str) === sonu(arre[j].Surname))
        {
            if (str !== arre[j].Surname.toLowerCase())
            {
                n.push(arre[j].Surname);
            }
            
        }
    }
    return n.join(", ");
}

module.exports = NameMatch;


