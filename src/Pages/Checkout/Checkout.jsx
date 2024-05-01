import { useLoaderData } from "react-router-dom"

export const Checkout = () => {

    const data = useLoaderData()
    const {title, price} = data;

  return (
    <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
	<form action="" className="container flex flex-col mx-auto space-y-12 bg-[#F3F3F3]">
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<input id="firstname" type="text" placeholder="First name" className="w-full px-1 py-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"  />
				</div>
				<div className="col-span-full sm:col-span-3">
					<input id="lastname" type="text" placeholder="Last name" className="w-full px-1 py-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"  />
				</div>
				<div className="col-span-full sm:col-span-3">
					<input id="phone" type="text" placeholder="Email" className="w-full px-1 py-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"  />
				</div>
				<div className="col-span-full sm:col-span-3">
					<input id="email" type="email" placeholder="Email" className="w-full px-1 py-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"  />
				</div>
                <div className="col-span-full">
                   <textarea name="message" id="" placeholder="your Message" cols="30" rows="10" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"></textarea>
                </div>
			</div>
	</form>
</section>
  )
}
