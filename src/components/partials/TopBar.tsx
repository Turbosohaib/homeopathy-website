import React from 'react'
import { Phone, Mail, MapPin, Clock } from "lucide-react"


const TopBar = () => {
    return (
        <div className="bg-[#0059B3] text-primary-foreground py-2 px-6 hidden md:block">
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                        <Phone className="h-4 w-4" />
                        <span className="text-sm">+92-91-2551199</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <Mail className="h-4 w-4" />
                        <span className="text-sm">info@sjconsult.org</span>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">Peshawar, Kpk</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">Mon-Fri: 9AM-5PM</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar