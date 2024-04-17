/**
 * Task: You’re tasked with creating an HTML table of students and their scores. 
 * You will receive a single string representing an array of objects, 
 * the table’s headings should be equal to the object’s keys, 
 * while each object’s values should be a new entry in the table. 
 * Any text values in an object should be escaped, to avoid introducing dangerous code into the HTML. 
 * 
Input
The input comes with a single string argument (the array of objects).
Output
The output should be printed on the console – for each entry row in the input print the object representing it.
 */

/**
 * @param {string} json // array of objects
 * @returns {string} text // html element
 */
function fromJsonToHtml(json) {
 
    let arr = JSON.parse(json);
    let text = `<table>\n\t<tr>`;
   
    for (const key of Object.keys(arr[0])) {
        text += `<th>${escape(key)}</th>`;
    }
    text += `</tr>\n`;
   
   
    for (const el of arr) {
        text += `\t<tr>`
        for (const value of Object.values(el)) {
            text += `<td>${escape(value.toString())}</td>`;
   
        }
        text += `</tr>\n`
    }
    text += '</table>';
   
    function escape(par) {
        return par.replace(/[&<>" –—©®™≈≠£€°]/g, (result) => {
            const map = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                "'": "&quot;",
                " ": "&nbsp;",
                "–": "&ndash;",
                "—": "&mdash;",
                "©": "&copy;",
                "®": "&reg;",
                "™": "&trade;",
                "≈": "&asymp;",
                "≠": "&ne;",
                "£": "&pound;",
                "€": "&euro;",
                "°": "&deg;",
            }
            if (map[result]) {
                return map[result];
            }
            return result;
        })
    }
   
    return text;
}