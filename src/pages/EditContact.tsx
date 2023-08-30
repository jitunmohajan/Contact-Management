import { useMutation, useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom';
import { IContact } from '../types/globalType';
import { FormEvent } from "react";




const EditContact = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch(`https://contact-management-server-jitunmohajan.vercel.app/contacts/${id}`).then(res =>
        res.json()
        )
    )
    if (isLoading) return 'Loading...'

    if (error) {
        console.error(error);
    }


    const updateDataMutation = async (newData:IContact) => {
        const response = await fetch(`https://contact-management-server-jitunmohajan.vercel.app/contacts/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newData),
        });
        return response.json();
    };


    // eslint-disable-next-line react-hooks/rules-of-hooks
    const mutation = useMutation(updateDataMutation);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const form =event.target as HTMLFormElement;
        const first_name = form.first_name.value;
        const last_name = form.last_name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const address = form.address.value;

        const fields ={
            first_name: first_name,
            last_name: last_name,
            phone: phone,
            email: email,
            address: address
        }
        mutation.mutate(fields); 
        navigate('/');
    };

   
    return (
        <div>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        First Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="first_name" name="first_name" type="text" defaultValue={data.first_name} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Last Name
                    </label>
                    <input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="last_name" name="last_name" type="text" defaultValue={data.last_name} />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Phone Number
                    </label>
                    <input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" name="phone" type="text" defaultValue={data.phone}/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="text" defaultValue={data.email} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Address
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" name="address" type="text" defaultValue={data.address} />
                </div>
                
                <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                   Update Contact
                </button>

                </div>
            </form>           
        </div>
    );
};

export default EditContact;