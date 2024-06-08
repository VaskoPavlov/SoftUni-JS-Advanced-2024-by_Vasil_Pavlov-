function cars(input) {
 
    let result = {};
 
    let creation = processor();
 
    for (let line of input) {
        if (line.includes('create') && !line.includes('inherit')) {
            let [command, name] = line.split(' ');
            creation[command](name);
        }
 
        if (line.includes('create') && line.includes('inherit')) {
            let [command1, name1, command2, name2] = line.split(' ');
            creation[command2](name1, name2);
        }
 
        if (line.includes('set')) {
            let [command, name, property, string] = line.split(' ');
            creation[command](name, property, string);
        }
 
        if (line.includes('print')) {
            let [command, objectName] = line.split(' ');
            creation[command](objectName);
        }
    }
 
    function processor() {
 
        function create(name) {
            result[name] = {};
            let objCopy = result[name];
        }
 
        function inherit(name1, name2) {
            result[name1] = Object.create(result[name2]);
        }
 
        function set(name, property, string) {
 
            result[name][property] = string;
        }
 
        function print(objectName) {
            let temp = [];
            for (key in result[objectName]) {
                temp.push(`${key}:${result[objectName][key]}`);
            }
            console.log(temp.join(','));
        }
 
        return {
            create,
            inherit,
            set,
            print
        }
    }
}