*/
We have  a=daBcd and  b=ABC. We perform the following operation:

Capitalize the letters a and c in  so that  dABCd.
Delete all the remaining lowercase letters in  so that  ABC.
Because we were able to successfully convert a to b, we print YES on a new line.
/*

function abbreviation(a, b) {

    const seen = {}

    // Make a key
    const key = `${a}1${b}`
    
    //If we've seen it, return it 
    if(seen[key]) {return seen[key]}
    
    // If done with checking on the chars in b
    if(b.length === 0) {
        if(seen[key] = !/A-Z/.test(a)){
            return "YES"
        } else {
            return "NO"
        }
    }
 
    if(a.length < b.length) {
        seen[key] = "NO"
        return "NO"
    }
    if(a[a.length - 1] === a[a.length - 1].toUpperCase()) {
        if(a[a.length - 1] !== b[b.length-1]) {
            seen[key] = "NO"
            return "NO"
        }
    const result = abbreviation(a.substr(0, a.length - 1),
    b.substr(0, b.length - 1));

    seen[key] = result
    return result
    }
    const modifiedA = a.substring(0, a.length - 1)

    const result = abbreviation(modifiedA, b) === 'YES' || 
    abbreviation(modifiedA + a[a.length - 1].toUpperCase(), b) === 'YES' 
        ? 'YES'
        : 'NO'
    seen[key] = result;
    return result;

    return abbreviation(a,b)
       
}
