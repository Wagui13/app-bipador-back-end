const { faker } = require('@faker-js/faker');

function make() {
    const user = {
        id: faker.datatype.uuid(),
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: faker.internet.password()
    }

    return user;
}

const factory = (n) => {

    if (n == undefined || n == 1) {
        return make();
    }

    const elements = [];

    for (let i = 0; i < n; i++) {
        elements[i] = make();
    }

    return elements
}

module.exports = factory;