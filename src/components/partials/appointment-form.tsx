"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export default function AppointmentForm() {
    const [date, setDate] = useState<Date | undefined>(undefined)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500))

        setLoading(false)
        alert("Appointment request submitted successfully! We'll contact you shortly to confirm.")
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
            <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" required />
            </div>

            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" required />
            </div>

            <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="+1 (123) 456-7890" required />
            </div>

            <div className="space-y-2">
                <Label htmlFor="date">Preferred Date</Label>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                        >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : "Select a date"}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                    </PopoverContent>
                </Popover>
            </div>
            <div className="flex items-center gap-4">
                <div className="w-full space-y-2">
                    <Label htmlFor="time">Preferred Time</Label>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a time" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="morning">Morning (9AM - 12PM)</SelectItem>
                            <SelectItem value="afternoon">Afternoon (1PM - 4PM)</SelectItem>
                            <SelectItem value="evening">Evening (5PM - 7PM)</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="w-full space-y-2">
                    <Label htmlFor="consultation-type">Consultation Type</Label>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="in-person">In-Person</SelectItem>
                            <SelectItem value="online">Online</SelectItem>
                            <SelectItem value="phone">Phone</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>





            <div className="space-y-2">
                <Label htmlFor="message">Health Concerns</Label>
                <Textarea
                    id="message"
                    placeholder="Please briefly describe your health concerns or the reason for your appointment."
                    className="min-h-[100px]"
                />
            </div>

            <Button type="submit" className="w-full bg-[#0059B3] hover:bg-[#002ab3] cursor-pointer" disabled={loading}>
                {loading ? "Submitting..." : "Book Appointment"}
            </Button>
        </form>
    )
}
