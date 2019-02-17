const parseStringToNumber = require('..');

let testees = {
    "nje milion e njembedhjete mije e nje qind e nje": 1011101,
    "njembedhjete": 11,
    "katermbedhjete": 14,
    "nentembedhjete": 19,
    "tridhjete e nente": 39,
    "dyqind e nje": 201,
    "katerdhjete e tre": 43,
    "pesedhjete": 50,
    "nje milion": 1000000,
    "peseqind e katermbedhjete": 514,
    "treqind e pesedhjete": 350,
    "dhjete mije e treqind e kater": 10304,
    "nentedhjete e nente": 99,
    "Nentedhjete e nje": 91,
    "teteqind e nje": 801,
    "katerdhjete e tre mije": 43000,
    "katerdhjete e tre mije e dyqind e shtatedhjete e tre": 43273,
};


for (let property in testees) {
    test(`Parses the number string: ${property}`, () => {
        let number = parseStringToNumber(property);
        expect(testees[property]).toBe(number);
    });
}
