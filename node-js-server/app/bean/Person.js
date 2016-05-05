var method = Person.prototype;

function Person(id) {
    this.id = id;
}

method.setName = function(name) {
    this.name = name;
}

method.setDisclosableInfo = function(disclosableInfo) {
    this.disclosableInfo = disclosableInfo;
}

module.exports = Person;