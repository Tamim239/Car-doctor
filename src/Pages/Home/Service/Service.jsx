import { useEffect, useState } from "react"
import { ServiceCard } from "../../../Components/ServiceCard/ServiceCard";

export const Service = () => {
const [services, setServices] = useState([]);

useEffect(()=>{
    fetch('/services.json')
    .then(res => res.json())
    .then(data => setServices(data))

},[])


  return (
    <div className="mt-5">
        <div className="text-center">
            <h2 className="text-xl font-bold text-orange-600">Services</h2>
            <h1 className="text-3xl font-bold">Our Service Area</h1>
            <p>
            the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. 
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                services?.map(service => <ServiceCard
                key={service?._id}
                service={service}
                >
                </ServiceCard>)
            }
        </div>
    </div>
  )
}
