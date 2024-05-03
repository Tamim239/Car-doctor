import { useLoaderData } from "react-router-dom";
import { UseAuth } from "../../Hook/UseAuth";

export const BookService = () => {

    const data = useLoaderData()
    const {title, _id, price, img} = data;
    const {user} = UseAuth()

    const handleBookService = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const order ={
            customerName : name,
            email,
            date,
            img,
            service: title,
            service_id: _id,
            price
        }
       console.log(order)

       fetch('http://localhost:5000/bookings',{
        method: 'POST',
        headers:{
            'content-type' : 'application/json'
        },
        body: JSON.stringify(order)
       })
       .then(res => res.json())
       .then(data =>{
        console.log(data)
        if(data.insertedId){
            alert("service book successfully")
        }
       })

    }

  return (
    <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
        <h1 className="text-3xl text-center">Book service : {title}</h1>
	<form onSubmit={handleBookService} className="container flex flex-col mx-auto space-y-12 bg-[#F3F3F3]">
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<input id="name" type="text" name="name" placeholder="name" defaultValue={user?.displayName} className="w-full px-1 py-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"  />
				</div>
				<div className="col-span-full sm:col-span-3">
					<input id="date" type="date" name="date" className="w-full px-1 py-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"  />
				</div>
				<div className="col-span-full sm:col-span-3">
					<input id="phone" type="text" name="email" placeholder="Email" defaultValue={user?.email} className="w-full px-1 py-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"  />
				</div>
				<div className="col-span-full sm:col-span-3">
					<input id="email" type="text" name="dueAmount" defaultValue={'$' + price} className="w-full px-1 py-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"  />
				</div>
                <div className="col-span-full">
                    <input type="submit" value="Order Confirm" className=" btn btn-primary w-full"/>
                </div>
			</div>
	</form>
</section>
  )
}
