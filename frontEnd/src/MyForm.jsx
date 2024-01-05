import { useState } from 'react';
import axios from 'axios';

function MyForm() {
    const [ID, setID] = useState('');
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            ID: ID,
            Name: Name,
            Email: Email,
            Phone: Phone,
        };

        axios.post('http://localhost:8081/add-user', data)
            .then((res) => {
                console.log(res.data);
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <form onSubmit={handleSubmit}>
                <input
                    type='number'
                    value={ID}
                    onChange={(e) => setID(e.target.value)}
                    placeholder='ID'
                    required = 'yes'
                />
                <input
                    type='text'
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Name'
                    required = 'yes'
                />
                <input
                    type='email'
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email'
                    required = 'yes'
                />
                <input
                    type='tel'
                    value={Phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder='Phone'
                    required = 'yes'
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default MyForm;