
enum Roles {
    user = 'user',
    admin = 'admin'
}

type LoginDetails = {
    name: string,
    email: string,
    password: string,
    role: Roles
};

const user1: LoginDetails = {
    name: 'deepanshu',
    email: 'deep@gmail.com',
    password: '12434',
    role: Roles.admin
};

const user2: LoginDetails = {
    name: 'shivam',
    email: 'shivam@gmail.com',
    password: '54321',
    role: Roles.user
};

function isAdmin(user: LoginDetails) {
    if (user.role === Roles.admin) {
        return `${user.name}, you are now an admin.`;
    } else {
        return `${user.name}, you are not an admin.`;
    }
}

console.log(isAdmin(user1)); // Output: deepanshu, you are now an admin.
console.log(isAdmin(user2)); // Output: shivam, you are not an admin.




