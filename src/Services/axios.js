import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


export const todos = async () => {
    try {
        const response = await axios(
            {
                url: 'https://jsonplaceholder.typicode.com/todos',
                method: 'GET',
            }
        );
        return response;
    } catch (error) {
        return error;
    }

}

