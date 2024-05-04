import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const ServiceProduct = () => {

    const [services, setService] = useState([])
    console.log(services)

    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => {
            setService(data)
        })
    },[])
   

    return (
        <div className="text-center ">
            <h2>service</h2>
            <h2>service area</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default ServiceProduct;