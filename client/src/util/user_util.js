import axios from 'axios';
export const login = user =>(
    axios({
        method: "POST",
        url: '/login',
        data: { user }
    })
);



export const signup = (user) => (
    // debugger;
    
    
    axios({
        method: 'POST',
        url: '/register',
        data: {
            username: user.username,
            password: user.password,
            
        }
        
    })
);



export const logout = (user) => (
    // e.preventDefault();
    
    
    axios({
        url: '/logout',
        method: 'DELETE',
        data: { user }
        
    })
    
)

