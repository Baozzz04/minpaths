export function converter(s: string): string[] {
    // Convert a string of cities, separated by comma, convert to a list of cities
    let res: string[] = [];
    let record = "";
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) == ',') {
            res.push(record);
            record = "";
        } else {
            if (s.charAt(i) == ' ' && record == "") continue;
            record += s.charAt(i);
        }
    }

    if (record != "") res.push(record);

    // First letter need to be capitalized
    let recordCap: string[] = [];
    for (let i = 0; i < res.length; i++) {
        let cap = res[i].charAt(0).toUpperCase();
        let refix = "";
        refix += cap;
        let pref = false;
        for (let j = 1; j < res[i].length; j++) {
            if (res[i].charAt(j) == ' ') {
                refix += res[i].charAt(j);
                pref = true;
                continue;
            }
            
            if (pref) {
                refix += res[i].charAt(j).toUpperCase();
                pref = false;
            } else refix += res[i].charAt(j);
        }
        recordCap.push(refix);
    }

    return recordCap;
}