//save an user to mongodb
export const saveUser = user => {
    const currentUser = {
        email: user.email,
        userImage: user.photoURL,
        userName: user.displayName,
    }

    fetch(`https://run-the-stack-server-delta.vercel.app/users/${user?.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(currentUser),
        })
        .then(res => res.json())
        .then(data => console.log(data))
}