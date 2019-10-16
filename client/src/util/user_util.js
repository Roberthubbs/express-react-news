import axios from 'axios';
export const login = async(user) => {
    // debugger;
    return await axios({
        method: "POST",
        url: '/login',
        data: { 
            user
        }
    })
    // .then((user) => {
    //     let data = {
    //         username: user.config.user.username,
    //         password: user.config.user.password
    //     }
    //     return data
    // })
};



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

