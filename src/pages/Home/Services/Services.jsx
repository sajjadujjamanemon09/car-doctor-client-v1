import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {


    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div className="my-10">
            <div className="text-center">
                <h2 className="text text-xl font-semibold text-red-500">Service</h2>
                <h2 className="text text-4xl font-bold">Our Service Area</h2>
                <p>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which dont look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard
                         key={service._id}
                         service={service}
                         ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;