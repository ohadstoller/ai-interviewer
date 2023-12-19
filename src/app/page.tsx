import {BoltIcon, ExclamationTriangleIcon, SunIcon} from '@heroicons/react/24/outline'
import React from "react";
import {InfoColumn} from "@/app/components/infoColumn";


function HomePage() {
    return (
        <div className={"flex flex-col items-center justify-center h-screen text-white px-2"}>
            <h1 className={"text-5xl font-bold mb-20"}>
                Chat Buddy
            </h1>
            <div className={"flex space-x-2 text-center"}>
                <InfoColumn icon={<SunIcon/>}/>
                <InfoColumn icon={<BoltIcon/>}/>
                <InfoColumn icon={<ExclamationTriangleIcon/>}/>
            </div>
        </div>
    )
}

export default HomePage;