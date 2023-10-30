import { useLoaderData } from "react-router-dom";
import CheckOutCard from "./CheckOutCard";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const BookService = () => {

    const service = useLoaderData()
    const {title , _id, price, img }= service
    const {user} = useContext(AuthContext)


    const handleBookService = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value
        const date = form.date.value
        const email = user?.email;
        const booking ={ 
            customerName : name,
            email,
            date,
            img,
            service: title,
            service_id: _id,
            price : price
        }
        console.log(booking);

        fetch('http://localhost:5000/bookings', {
          method: 'POST',
          headers: {
            'content-type' : 'application/json'
          },
          body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.insertedId){
            alert('service book successfully')
          }
        })
    }

    return (
        <div>
            <CheckOutCard></CheckOutCard>
            <h2 className="">Book Service:{title} </h2>

      <div className="card-body bg-base-200 p-20 my-20">
<form onSubmit={handleBookService}>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* form 1 */}
        <div className="form-control">
          <input type="text" name="name" defaultValue={user?.displayName} placeholder="Name " className="input input-bordered" required />
        </div>


        {/* form 2 */}
        <div className="form-control">
          <input type="date" name="date" placeholder="Date" className="input input-bordered" required />
        </div>

        {/* form 4 */}
        <div className="form-control">
          <input type="text" name="due" defaultValue={'$' + price} placeholder="Due Amount" className="input input-bordered" required />
        </div>
    
        {/* form 3 */}
        <div className="form-control">
          <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
        </div>

</div>
               {/* form 3 */}
               <div className="form-control pt-6">
          <input type="text" name="message" placeholder="Your Message" className="input input- h-[20vh]" required />
        </div>
        <div className="form-control mt-6">
        <input className="btn btn-block bg-red-500 text-white border-none" type="submit" value="Order Confirm" />
        </div>

</form>


 
      </div>
    </div>

    );
};

export default BookService;