import {useEffect, useState} from "react";

import { $Header } from "./common"


interface Asana {
    benefits: string,
    name: string,
    notes: string,
    sanskrit: string,
}

const Asanas = () => {

    // const [data, setData] = useState<Asana>([]);
    const [data, setData] = useState<Asana[]>([]);


    useEffect(() => {
    async function fetchData() {
        const resp = await fetch("http://localhost:8080/v1/asanas")
        // const data = await resp.json();
        console.log("resp=", resp);
        
        const asanas = resp;
        const asanasJson = resp.json;
        const respData = await resp.json();

        console.log("asanas=", asanas);
        console.log("asanas.body=", asanas.body);
        console.log("asanasJson=", asanasJson);
        console.log("data=", respData);
        console.log("respData.name=", respData.name);
        setData(respData);
        }
        fetchData();
    }, [])


    const renderAsanas = () => {
        console.log("renderAsanas data=", data)
        return data.map((asana) => {
            return (
                <h3>{asana.name}</h3>

            )
        })
    }

    return (
        <>
            <$Header>Asanas</$Header>
            {/* <h2>{data.name}</h2> */}
            {renderAsanas()}
        </>
    )
}


export default Asanas;