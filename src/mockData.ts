import faker from 'faker';
import { v4 as uuid } from 'uuid';

function generateTakes(count = 100, users: any[]) {
    const takes = [];

    for (let i = 0; i < count; i++) {
        const randomUserIndex = Math.round(Math.random() * (users.length - 1));
        console.log(randomUserIndex);
        const user = users[randomUserIndex];

        takes.push({
            id: uuid(),
            user: {
                id: user.id,
                name: user.name,
                handle: user.handle,
            },
            message: faker.lorem.words(Math.round(Math.random() * 20) + 4),
            media: [
                {
                    id: uuid(),
                    type: 'image',
                    url: faker.image.imageUrl(),
                }
            ],
            createdOn: faker.date.recent().getTime()
        })
    }

    return takes;
}

function generateUsers(count = 10) {
    const users = [];

    for (let i = 0; i < count; i++) {
        users.push({
            id: uuid(),
            email: faker.internet.email(),
            handle: faker.internet.userName(),
            name: faker.name.jobDescriptor() + " " + faker.name.firstName(),
        })
    }

    return users;
}

const users = generateUsers(10);

const takes = generateTakes(100, users);

export default {
    users,
    takes
}