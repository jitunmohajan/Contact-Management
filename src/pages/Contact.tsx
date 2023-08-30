import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'

const Contact = () => {


    const { isLoading, error, data } = useQuery('repoData', () =>
      fetch('https://contact-management-server-jitunmohajan.vercel.app/contacts').then(res =>
        res.json()
      )
    )
    if (isLoading) return 'Loading...'

    if (error) {
      console.error(error);
    }

    const handleDeleteContact = (id: any) =>{

      fetch(`https://contact-management-server-jitunmohajan.vercel.app/contact/${id}`,{
        method: 'DELETE'
      })
      .then(res=>res.json())
      .then(data=>{
              alert('deleted successfully');
              console.log(data);
      })
    }
    return (
      <div>

        <div className=' pt-3 pb-3'>
            <Link className="btn btn-primary drawer-button" to="/create-contact">Create Contact</Link>
        </div>
         
              {/* All Contact Card  start*/}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {

                  !data?
                  (<h2>No Contact Found please add contact from Create Contact Button</h2>)
                  : 
                    
                 ( data?.data?.map((contact : any)=> (
                    
                    <div className="card w-96 bg-base-100 shadow-xl m-6 p-6">
                      <Link to={`/view-contact/${contact._id}`}>
                        <div className="card-body">
                          <h2 className="card-title">{ contact.first_name } { contact.last_name }</h2>
                          <p>{ contact.phone }</p>
                          
                          
                        </div>
                      </Link>
                      <div className="card-actions justify-end">
                        
                        <Link to={`/edit-contact/${contact._id}`}><button className="btn btn-primary">Edit</button></Link>
                          <button className="btn btn-primary" onClick={()=>handleDeleteContact(contact._id)}>Delete</button>
                        </div>
                    </div>
                  )))


                }
                
               
              </div>

              {/* All Contact Card  end*/}
        </div>
    );
};

export default Contact;