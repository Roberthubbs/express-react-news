const $ = require('jquery')

export const login = user =>(
    $.ajax({
        method: "POST",
        url: '/login',
        data: { user }
    })
);


export const signup = user => (
    $.ajax({
        method: 'POST',
        url: '/register',
        data: { user }
    })
);

export const logout = () => (    
    $.ajax('/logout', {
        method: 'DELETE',
        data: {}
    })
);

