"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export function BookingSection() {
  const [date, setDate] = useState<Date>()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    time: "",
    notes: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Booking submitted:", { ...formData, date })
    // Handle booking submission
  }

  return (
    <div className="min-h-screen bg-[#F5F1ED] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-serif mb-4 text-[#2C2420]">Book an Appointment</h1>
          <p className="text-lg text-[#6B5D54] max-w-xl mx-auto leading-relaxed">
            Experience luxury and personalized service. Schedule your visit to our boutique.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-8 md:p-12 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-[#2C2420] font-medium">
                Full Name
              </Label>
              <Input
                id="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="border-[#D4C4B8] focus:border-[#8B7355] bg-[#FDFCFB]"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#2C2420] font-medium">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="border-[#D4C4B8] focus:border-[#8B7355] bg-[#FDFCFB]"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-[#2C2420] font-medium">
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+971 XX XXX XXXX"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="border-[#D4C4B8] focus:border-[#8B7355] bg-[#FDFCFB]"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="service" className="text-[#2C2420] font-medium">
              Service
            </Label>
            <Select
              value={formData.service}
              onValueChange={(value) => setFormData({ ...formData, service: value })}
              required
            >
              <SelectTrigger className="border-[#D4C4B8] focus:border-[#8B7355] bg-[#FDFCFB]">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="consultation">Personal Consultation</SelectItem>
                <SelectItem value="viewing">Private Viewing</SelectItem>
                <SelectItem value="custom">Custom Design</SelectItem>
                <SelectItem value="repair">Repair & Maintenance</SelectItem>
                <SelectItem value="appraisal">Jewelry Appraisal</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-[#2C2420] font-medium">Preferred Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal border-[#D4C4B8] hover:border-[#8B7355] bg-[#FDFCFB]",
                      !date && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    disabled={(date) => date < new Date()}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label htmlFor="time" className="text-[#2C2420] font-medium">
                Preferred Time
              </Label>
              <Select
                value={formData.time}
                onValueChange={(value) => setFormData({ ...formData, time: value })}
                required
              >
                <SelectTrigger className="border-[#D4C4B8] focus:border-[#8B7355] bg-[#FDFCFB]">
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10:00">10:00 AM</SelectItem>
                  <SelectItem value="11:00">11:00 AM</SelectItem>
                  <SelectItem value="12:00">12:00 PM</SelectItem>
                  <SelectItem value="14:00">2:00 PM</SelectItem>
                  <SelectItem value="15:00">3:00 PM</SelectItem>
                  <SelectItem value="16:00">4:00 PM</SelectItem>
                  <SelectItem value="17:00">5:00 PM</SelectItem>
                  <SelectItem value="18:00">6:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes" className="text-[#2C2420] font-medium">
              Additional Notes
            </Label>
            <Textarea
              id="notes"
              placeholder="Tell us about your preferences or special requests..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="border-[#D4C4B8] focus:border-[#8B7355] bg-[#FDFCFB] min-h-[120px]"
            />
          </div>

          <Button type="submit" className="w-full bg-[#2C2420] hover:bg-[#3D332C] text-white py-6 text-lg font-medium">
            Confirm Appointment
          </Button>

          <p className="text-center text-sm text-[#6B5D54] mt-4">
            We'll contact you within 24 hours to confirm your appointment
          </p>
        </form>
      </div>
    </div>
  )
}
