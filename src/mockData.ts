import faker from 'faker';
import { v4 as uuid } from 'uuid';

function generateMedia(count = 1) {
    const result = [];
    for (let i = 0; i < count; i++) {
        result.push({
            id: uuid(),
            type: 'image',
            url: `${faker.image.nature()}?random=${Math.round(Math.random() * 1000)}`,
        });
    }
    return result;
}

function generateTakes(count = 12, users: any[]) {
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
                profileImage: user.profileImage,
            },
            message: faker.lorem.words(Math.round(Math.random() * 20) + 4),
            media: Math.round(Math.random() * 100) < 20 ? generateMedia(Math.random() > 0.5 ? 1 : 2) : [],
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
            name: faker.name.firstName(),
            profileImage: `https://i.pravatar.cc/150?u=${Math.round(Math.random() * 1000)}`,
        })
    }

    return users;
}

const users = generateUsers(8);

const takes = generateTakes(24, users);

export default {
    users,
    takes
}