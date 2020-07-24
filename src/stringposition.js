function string_at(string, start, length, list) 
{
    if ((start <0) || (start >= string.length))
      return 0;

    for (var i=0, len=list.length; i<len; i++) {
      if (list[i] === string.substr(start, length))
        return 1;
    }
    return 0;
  }

  export {string_at};