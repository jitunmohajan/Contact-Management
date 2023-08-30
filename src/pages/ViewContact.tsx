import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const ViewContact = () => {

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

    console.log(data);

    return (
        <div>
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h1 className="block text-gray-700 font-bold mb-2 text-3xl pb-3">Contact Details</h1>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        First Name : { data.first_name }
                    </label>
                    
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Last Name : { data.last_name }
                    </label>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Phone Number : { data.phone }
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Email : { data.email }
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Address : { data.address }
                    </label>
                </div>
                
               
            </div>           
        </div>
    );
};

export default ViewContact;