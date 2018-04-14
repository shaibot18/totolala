import './index.css';

import {getUsers} from './api/userApi.js';
// import {deleteUser} from './api/userApi.js';

getUsers.then(result => {
    let usersBody = "";

    result.forEach(user => {
        usersBody+=`<tr>
        <td>DELETE</td>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        </tr>`
    });

    console.log(usersBody);//eslint-disable-line no-console
    global.document.getElementById('users').innerHTML = usersBody;
})

