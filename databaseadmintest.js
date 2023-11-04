let account = [
    {
        firstName: "Deer",
        lastName: "Doge",
        isAdmin: true,
        isUser: true,
        isFriend: true,
    },
    {
        firstName: "Racc",
        lastName: "Man",
        isAdmin: false,
        isUser: true,
        isFriend: true,
    },
    {
        firstName: "Glitched",
        lastName: "Gote",
        isAdmin: false,
        isUser: true,
        isFriend: true,
    },
    {
        firstName: "Stranger",
        lastName: "Guy",
        isAdmin: false,
        isUser: true,
        isFriend: false,
    },
];

function lookUpPermissions(user) {
    return user.isAdmin
}

for (let i = 0; i < account.length; i++) {
    const user = account[i];
    if (lookUpPermissions(user)) {
        console.log(user.firstName + " is an admin.")
    } else {
        console.log(user.firstName + " is not an admin.")
    }
}