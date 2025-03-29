
export const environment = {
    production: true, 
    api: {
        protocol: 'https',
        host: 'randomuser.me',
        endpoints: {
            user: '/api/?results=1',
            users: '/api/?results=10'
        }
    }

};