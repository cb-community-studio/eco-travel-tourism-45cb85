import { faker } from "@faker-js/faker";
export default (count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
            image: faker.image,
            packageName: faker.packageName,
            packageDuration: faker.packageDuration,
            packagePrice: faker.packagePrice,
            location: faker.location,
            description: faker.description,
            remark: faker.remark,
            isAvailable: true,
        };
        data = [...data, fake];
    }
    return data;
};
