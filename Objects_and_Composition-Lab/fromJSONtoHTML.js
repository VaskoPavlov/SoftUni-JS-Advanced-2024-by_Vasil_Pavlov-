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
