export default {
    users: [
        {
            id: '1',
            email: 'test@example.com',
            handle: 'ben',
            name: 'Ben',
        }
    ],
    takes: [
        {
            id: '1',
            user: {
                id: '1',
                username: 'Ben',
                handle: 'ben'
            },
            message: 'Hello World',
            createdOn: Date.now(),
        }
    ]
}