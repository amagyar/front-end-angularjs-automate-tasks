var Person = require('../bean/Person.js')

module.exports = function (app) {
    app.get('/rest/people', function (req, res) {
        var name = ["Adam", "Abe", "Maria", "Rose", "Mario", "Luigi"];
        var surname = ["Lincoln", "Franklin", "Jackson", "Miyazaki", "M'bebe"];
        var person = [];

        for (var i = 0; i < 10; i++) {
            var p = new Person(i);
            var nameIndex = Math.floor(Math.random() * (name.length));
            var surnameIndex = Math.floor(Math.random() * (surname.length));
            p.setName(name[nameIndex] + " " + surname[surnameIndex]);
            p.setDisclosableInfo("Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini" +
                "m veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo c" +
                "onsequat.");
            person.push(p);
        }

        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(person));
    });

    app.get('/', function (req, res) {
        res.send('Hello world')
    });
}