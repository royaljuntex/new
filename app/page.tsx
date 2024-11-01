'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, Users, Calendar, PhoneCall, Target, ClipboardCheck, Shield, Zap, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function JReachLandingPage() {
  const currentYear = new Date().getFullYear()

  const features = [
    {
      title: "Unmatched Cold Outbound Expertise",
      description: "Our strategies generate high-quality leads that paid ads can't touch, ensuring a steady flow of potential clients",
      icon: <Target className="h-6 w-6 text-yellow-500" />,
    },
    {
      title: "Protect Your Brand Reputation",
      description: "We use our own accounts for outreach, safeguarding your brand image and eliminating the risk of account blocks",
      icon: <Shield className="h-6 w-6 text-yellow-500" />,
    },
    {
      title: "Stay Ahead of Competitors",
      description: "While others struggle with copied ad content, our unique outbound approach keeps you steps ahead",
      icon: <Users className="h-6 w-6 text-yellow-500" />,
    },
    {
      title: "Guaranteed Results",
      description: "We're so confident in our methods, we guarantee new clients within your first month with us",
      icon: <CheckCircle className="h-6 w-6 text-yellow-500" />,
    },
    {
      title: "Scalable Growth",
      description: "Our strategies are designed to scale with your business, ensuring consistent growth as you expand",
      icon: <TrendingUp className="h-6 w-6 text-yellow-500" />,
    },
    {
      title: "Rapid Implementation",
      description: "Get your campaigns up and running quickly with our streamlined onboarding and implementation process",
      icon: <Zap className="h-6 w-6 text-yellow-500" />,
    },
  ]

  const process = [
    {
      title: "Strategic Outreach",
      description: "We craft personalized messages that resonate with your ideal clients, opening doors to meaningful conversations",
      icon: <Target className="h-6 w-6 text-yellow-500" />,
    },
    {
      title: "Expert Lead Qualification",
      description: "Our team meticulously vets each lead, ensuring you only speak with prospects who are ready to engage",
      icon: <ClipboardCheck className="h-6 w-6 text-yellow-500" />,
    },
    {
      title: "Seamless Integration",
      description: "Qualified leads are added directly to your calendar, streamlining your sales process and maximizing your time",
      icon: <Calendar className="h-6 w-6 text-yellow-500" />,
    },
    {
      title: "Continuous Optimization",
      description: "We analyze campaign performance and make data-driven adjustments to improve results over time",
      icon: <TrendingUp className="h-6 w-6 text-yellow-500" />,
    },
    {
      title: "Personalized Follow-up",
      description: "Our team handles follow-ups, ensuring no opportunity slips through the cracks",
      icon: <PhoneCall className="h-6 w-6 text-yellow-500" />,
    },
    {
      title: "Comprehensive Reporting",
      description: "Get detailed insights into your campaign performance with our transparent reporting system",
      icon: <CheckCircle className="h-6 w-6 text-yellow-500" />,
    },
  ]

  return (
    <div className="min-h-screen bg-beige-50">
      <header className="bg-white shadow-sm fixed w-full z-10">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20(2)-7KJvz3pm1KJm5BrKAYiUCnweHd5PTP.png"
                alt="J-reach logo"
                width={48}
                height={48}
                className="h-12 w-auto"
              />
            </div>
            <nav className="flex items-center space-x-6">
              <Link href="#" className="text-yellow-800 hover:text-yellow-600 font-medium">Home</Link>
              <Link href="/about" className="text-yellow-800 hover:text-yellow-600 font-medium">About</Link>
              <Link href="#" className="text-yellow-800 hover:text-yellow-600 font-medium">Services</Link>
              <Link href="#" className="text-yellow-800 hover:text-yellow-600 font-medium">Contact</Link>
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white">
                <a href="https://calendly.com/j-reach/intro" target="_blank" rel="noopener noreferrer">Get Started</a>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="pt-24">
        <section className="bg-yellow-100 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-yellow-800 mb-6">
                Revolutionize Your Lead Generation with J-Reach's Cold Outbound Mastery
              </h1>
              <p className="text-xl text-yellow-700 mb-8">
                Unlock a steady stream of high-quality leads without the risks of paid ads or reputation damage
              </p>
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white">
                <a href="https://calendly.com/j-reach/intro" target="_blank" rel="noopener noreferrer">Discover Our Secret Weapon</a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-yellow-800 mb-8 text-center">How We've Transformed Businesses</h2>
            <div className="max-w-4xl mx-auto">
              <div className="aspect-w-16 aspect-h-9 relative">
                <iframe
                  src="https://www.loom.com/embed/c1d20d06bce544e39b423a57a8a994a0"
                  frameBorder="0"
                  allowFullScreen
                  style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
                ></iframe>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white">
                <Link href="/success-stories">See Our Success Stories</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-beige-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-yellow-800 mb-8 text-center">Why J-Reach is Your Ultimate Lead Generation Partner</h2>
            <p className="text-lg text-yellow-700 mb-12 text-center max-w-3xl mx-auto">
              We specialize in cold outbound strategies that deliver consistent results, protect your reputation, and stay ahead of the competition
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((item, index) => (
                <Card key={index} className="border-yellow-500 border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-yellow-800">
                      {item.icon}
                      <span>{item.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-yellow-700">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-yellow-800 mb-8 text-center">Our Proven Process</h2>
            <p className="text-lg text-yellow-700 mb-12 text-center max-w-3xl mx-auto">
              We've refined our approach to deliver consistent results for our clients. Here's how we turn cold prospects into warm leads:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {process.map((item, index) => (
                <Card key={index} className="border-yellow-500 border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-yellow-800">
                      {item.icon}
                      <span>{item.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-yellow-700">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-yellow-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold text-yellow-800 mb-6">Ready to Revolutionize Your Lead Generation?</h2>
            <p className="text-xl text-yellow-700 mb-8 max-w-2xl mx-auto">
              Join the ranks of successful businesses that have transformed their growth trajectory with J-Reach's cold outbound mastery.
            </p>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white">
              <a href="https://calendly.com/j-reach/intro" target="_blank" rel="noopener noreferrer">Schedule Your Strategy Call Now</a>
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-beige-100 text-yellow-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20(2)-7KJvz3pm1KJm5BrKAYiUCnweHd5PTP.png"
                alt="J-reach logo"
                width={40}
                height={40}
                className="h-10 w-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="text-yellow-700 hover:text-yellow-600">Home</Link></li>
                <li><Link href="/about" className="text-yellow-700 hover:text-yellow-600">About</Link></li>
                <li><Link href="/services" className="text-yellow-700 hover:text-yellow-600">Services</Link></li>
                <li><Link href="/contact" className="text-yellow-700 hover:text-yellow-600">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-sm text-yellow-700">Email: junte@j-reach.com</p>
              <p className="text-sm text-yellow-700">Phone: +1 (833) 470-0525</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy-policy" className="text-yellow-700 hover:text-yellow-600">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="text-yellow-700 hover:text-yellow-600">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-yellow-300 text-center">
            <p className="text-sm text-yellow-700">
              &copy; {currentYear} J-Reach. All rights reserved. | <Link href="/privacy-policy" className="hover:text-yellow-600 ml-2">Privacy Policy</Link> | <Link href="/terms-of-service" className="hover:text-yellow-600 ml-2">Terms of Service</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
