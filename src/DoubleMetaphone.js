const Slavo_Germanic = require('./germanic');
const is_vowel = require('./vowelcheck');
const string_at = require('./stringposition');

function double_metaphone( string )
{
    let primary = "";
    let current   =  0;
    
    let length   = string.length;
    let last     = length - 1;
    let original = string + "     ";

    original = original.toUpperCase();
    
    if (string_at(original, 0, 2, 
                        ['GN', 'KN', 'PN', 'WR', 'PS']))
      current++;
    
    if (original.substr(0, 1) === 'X') {
      primary   += "S";
      current++;
    }

    while (primary.length < 4) {  //limits the code to 4 character
      if (current >= length)
        break;

      switch (original.substr(current, 1)) {
        case 'A':
        case 'E':
        case 'I':
        case 'O':
        case 'U':
        case 'Y':
          if (current === 0) {
            // for all init vowels
            primary   += string[0].toUpperCase();
          }
          current += 1;
          break;

        case 'B':
          primary   += 'B';

          if (original.substr(current + 1, 1) === 'B')
            current += 2;
          else
            current += 1;
          break;

        case 'C':

          if (string_at(original, current, 2,
                         ["CH"])) {
            if ((current > 0)
                && string_at(original, current, 4, 
                         ["CHAE"])) {
              primary   += 'K';
              current += 2;
              break;
            }

            if ((string_at(original, 0, 4, ["VAN ", "VON "])
                 || string_at(original, 0, 3, ["SCH"]))
                || string_at(original, current - 2, 6, 
                         ["ORCHES", "ARCHIT", "ORCHID"])
                || string_at(original, current + 2, 1, 
                         ["T", "S"])
                || ((string_at(original, current - 1, 1, 
                         ["A","O","U","E"])
                     || (current === 0))
                    && string_at(original, current + 2, 1, 
                         ["L","R","N","M","B","H","F","V","W"," "]))) {
              primary   += 'K';
            } else {
              if (current > 0) {
                if (string_at(original, 0, 2, ["MC"])) {
                  primary   += 'K';
                } else {
                  primary   += 'X';
                }
              } else {
                primary   += 'X';
              }
            }
            current += 2;
            break;
          }
          if (string_at(original, current + 1, 3,
                     ["CIA"])) {
            primary   += 'X';
            current += 3;
            break;
          }

          if (string_at(original, current, 2,
                     ["CI","CE","CY"])) {
            if (string_at(original, current, 3,
                       ["CIO","CIE","CIA"])) {
              primary   += "S";
            } else {
              primary   += "S";
            }
            current += 2;
            break;
          }
          primary   += "K";
          break;

        case 'D':
          if (string_at(original, current, 2,
                     ["DG"])) {
            if (string_at(original, current + 2, 1,
                       ["I","E","Y"])) {
              primary   += "J";
              current += 3;
              break;
            } else {
              primary   += "T";
              current += 2;
              break;
            }
          }
          break;

        case 'F':
          if (original.substr(current + 1, 1) === 'F')
            current += 2;
          else
            current += 1;
          primary   += "F";
          break;

        case 'G':
          if (original.substr(current +1, 1) === 'G')
            current += 2;
          else
            current += 1;

          primary   += 'K';
          break;

        case 'H':
          // only keep if first & before vowel or btw. 2 vowels
          if (((current === 0) || 
               is_vowel(original, current - 1))
              && is_vowel(original, current + 1)) {
            primary   += 'H';
            current += 2;
          } else
            current += 1;
          break;

        case 'J':
          if (original.substr(current + 1, 1) === 'F')
            current += 2;
          else
            current += 1;
          primary   += "F";
          break;

        case 'K':
          if (original.substr(current + 1, 1) === 'K')
            current += 2;
          else
            current += 1;
          primary   += "K";
          break;

        case 'L':
          if (original.substr(current + 1, 1) === 'L')
            current += 2;
          else
            current += 1;
          primary   += "L";
          break;

        case 'M':
          if (original.substr(current + 1, 1) === 'M')
            current += 2;
          else
            current += 1;
          primary   += "M";
          break;

        case 'N':
          if (original.substr(current + 1, 1) === 'N') 
            current += 2;
          else
            current += 1;
          primary   += "N";
          break;

        case 'P':
          if (original.substr(current + 1, 1) === 'H') {
            current += 2;
            primary   += "F";
          }

          else
            current += 1;
          primary   += "P";
          break;

        case 'Q':
          if (original.substr(current + 1, 1) === 'Q') 
            current += 2;
          else 
            current += 1;
          primary   += "K";
          break;

        case 'R':
          if (original.substr(current + 1, 1) === 'R') 
            current += 2;
          else
            current += 1;
          break;

        case 'S':

          if (string_at(original, current, 2,
                     ["SH"])) {
            if (string_at(original, current + 1, 4,
                       ["HEIM","HOEK","HOLM","HOLZ"])) {
              primary   += "S";
            } else {
              primary   += "X";
            }
            current += 2;
            break;
          }

          if (string_at(original, current, 3,
                     ["SIO","SIA"])
              || string_at(original, current, 4,
                        ["SIAN"])) {
            if (!Slavo_Germanic(original)) {
              primary   += "S";
            } else {
              primary   += "X";
            }
            current += 3;
            break;
          }
          else 
          current += 1;
          primary   += "S";
          break;

        case 'T':
          if (string_at(original, current, 4,
                     ["TION"])) {
            primary   += "X";
            current += 3;
            break;
          }

          if (string_at(original, current, 3,
                     ["TIA","TCH"])) {
            primary   += "X";
            current += 3;
            break;
          }

          if (string_at(original, current, 2,
                     ["TH"])
              || string_at(original, current, 3,
                            ["TTH"])) {
            if (string_at(original, current + 2, 2,
                       ["OM","AM"])
                || string_at(original, 0, 4, ["VAN ","VON "])
                || string_at(original, 0, 3, ["SCH"])) {
              primary   += "T";
            } else {
              primary   += "0";
            }
            current += 2;
            break;
          }

          if (string_at(original, current + 1, 1,
                     ["T","D"]))
            current += 2;
          else
            current += 1;
          primary   += "T";
          break;

        case 'V':
          if (original.substr(current + 1, 1) === 'V')
            current += 2;
          else
            current += 1;
          primary   += "F";
          break;

        case 'W':
          if ((current === 0)
              && (is_vowel(original, current + 1)
                  || string_at(original, current, 2, 
                            ["WH"]))) {
            if (is_vowel(original, current + 1)) {
              primary   += "W";
            } else {
              primary   += "A";
            }
          }
          break;

        case 'X':
          if (!((current === last)
                && (string_at(original, current - 3, 3,
                           ["IAU", "EAU"])
                 || string_at(original, current - 2, 2,
                           ["AU", "OU"])))) {
            primary   += "KS";
          }
          break;

        case 'Z':
          if (original.substr(current + 1, 1) === 'Z') 
            current += 2;
          else 
            current += 1;
          primary   += "S";
          break;

        default:
          current += 1;

      } 

    }

    primary   = primary.substr(0, 4);
    
    return primary;
    
  }
  
  module.exports = double_metaphone;