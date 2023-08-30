import {  useState } from "react";

import { useMutation } from 'react-query';
import { useNavigate } from "react-router-dom";
import { ContactFormState, IContact } from "../types/globalType";
import { ChangeEvent, FormEvent  } from 'react';

// creating mutation for creating new contact
const saveDataMutation = async (newData:IContact) => {

    console.log("test");
    const response = await fetch('https://contact-management-server-jitunmohajan.vercel.app/contacts', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
    });
    const data = await response.json();
    console.log(data);

};


const CreateContact = () => {

    const [fields, setFields] = useState<ContactFormState>({
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        address: '',
      });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setFields({ ...fields, [event.target.name]: event.target.value });
    };
    
    const mutation = useMutation(saveDataMutation);

    const navigate = useNavigate();

    // form Submission function for creating contact
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        mutation.mutate(fields); 
        alert('Order placed successfully')
        
        navigate('/')
    };


    console.log(fields);
    return (
        <div>
            {/* Create Contact Start */}
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        First Name
                    </label>
                    <input onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="first_name" name="first_name" type="text" placeholder="First Name" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Last Name
                    </label>
                    <input onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="last_name" name="last_name" type="text" placeholder="Last Name" />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Phone Number
                    </label>
                    <input onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" name="phone" type="text" placeholder="Phone Number" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Email
                    </label>
                    <input onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="text" placeholder="Email" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Address
                    </label>
                    <input onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" name="address" type="text" placeholder="Address" />
                </div>
                
                <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                   Create Contact
                </button>

                </div>
            </form>          
            {/* Create Contact End */}

        </div>
    );
};

export default CreateContact;