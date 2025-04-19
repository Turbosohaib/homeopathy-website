"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"

type FormData = {
    fullName: string
    email: string
    phoneNumber: string
    preferredTime: string
    consultationType: string
    healthConcerns: string
}

export default function AppointmentForm() {
    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        email: "",
        phoneNumber: "",
        preferredTime: "",
        consultationType: "",
        healthConcerns: "",
    })

    const [preferredDate, setPreferredDate] = useState<Date | undefined>()
    const [loading, setLoading] = useState(false)

    const handleChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [field]: e.target.value }))
    }

    const handleSelectChange = (field: keyof FormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }

    const postForm = async () => {
        return await fetch("/api/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                ...formData,
                preferredDate: preferredDate ? format(preferredDate, "PPP") : "",
            }),
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        const res = await postForm()
        setLoading(false)

        if (res.ok) {
            alert("Appointment request submitted successfully!")
            // Reset form
            setFormData({
                fullName: "",
                email: "",
                phoneNumber: "",
                preferredTime: "",
                consultationType: "",
                healthConcerns: "",
            })
            setPreferredDate(undefined)
        } else {
            alert("Something went wrong. Please try again.")
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
            <FormField label="Full Name" id="name">
                <Input id="name" placeholder="John Doe" required value={formData.fullName} onChange={handleChange("fullName")} />
            </FormField>

            <FormField label="Email" id="email">
                <Input id="email" type="email" placeholder="john@example.com" required value={formData.email} onChange={handleChange("email")} />
            </FormField>

            <FormField label="Phone Number" id="phone">
                <Input id="phone" placeholder="+1 (123) 456-7890" required value={formData.phoneNumber} onChange={handleChange("phoneNumber")} />
            </FormField>

            <FormField label="Preferred Date" id="date">
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            className={cn("w-full justify-start text-left font-normal", !preferredDate && "text-muted-foreground")}
                        >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {preferredDate ? format(preferredDate, "PPP") : "Select a date"}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={preferredDate} onSelect={setPreferredDate} initialFocus />
                    </PopoverContent>
                </Popover>
            </FormField>

            <div className="flex flex-col sm:flex-row gap-4">
                <FormField label="Preferred Time" id="preferred-time" className="w-full">
                    <Select onValueChange={(val) => handleSelectChange("preferredTime", val)} value={formData.preferredTime}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a time" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Morning (9AM - 12PM)">Morning (9AM - 12PM)</SelectItem>
                            <SelectItem value="Afternoon (1PM - 4PM)">Afternoon (1PM - 4PM)</SelectItem>
                            <SelectItem value="Evening (5PM - 7PM)">Evening (5PM - 7PM)</SelectItem>
                        </SelectContent>
                    </Select>
                </FormField>

                <FormField label="Consultation Type" id="consultation-type" className="w-full">
                    <Select onValueChange={(val) => handleSelectChange("consultationType", val)} value={formData.consultationType}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="In-Person">In-Person</SelectItem>
                            <SelectItem value="Online">Online</SelectItem>
                        </SelectContent>
                    </Select>
                </FormField>
            </div>

            <FormField label="Health Concerns" id="health-concerns">
                <Textarea
                    id="health-concerns"
                    placeholder="Please briefly describe your health concerns or the reason for your appointment."
                    className="min-h-[100px]"
                    value={formData.healthConcerns}
                    onChange={handleChange("healthConcerns")}
                />
            </FormField>

            <Button type="submit" className="w-full bg-[#0059B3] hover:bg-[#002ab3]" disabled={loading}>
                {loading ? "Submitting..." : "Book Appointment"}
            </Button>
        </form>
    )
}

// Reusable form field wrapper
function FormField({ label, id, children, className }: { label: string; id: string; children: React.ReactNode; className?: string }) {
    return (
        <div className={cn("space-y-2", className)}>
            <Label htmlFor={id}>{label}</Label>
            {children}
        </div>
    )
}
