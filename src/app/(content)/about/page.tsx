'use client'

import { Button } from "@/app/components"
import { useRouter } from "next/navigation"

export default function About({}) {

    const router = useRouter()

    return (
        <div className="flex flex-row flex-wrap max-w-4xl pb-8">

            <div id="sidebar" className="flex flex-col p-0 md:p-8">
                <h1 className="text-2xl font-bold">About me</h1>
                <img src="/profile-seb.jpg" alt="Sebastian Bryers" className="rounded-sm aspect-square max-w-[150px] mt-8 mb-8" />
                <div id="socials" className="flex flex-row row-wrap gap-4">
                    <a href="https://linkedin.com/in/sebastianbryers" target="_blank" rel="noopener noreferrer" className="text-xs">LinkedIn</a>
                    <a href="https://github.com/srbryers" target="_blank" rel="noopener noreferrer" className="text-xs">Github</a>
                </div>
            </div>
            
            {/* @TODO: Move to Contentful */}
            <div id="content" className="flex flex-col flex-1 p-0 max-w-full min-w-[66%] sm:p-8">
                <p>Originally hailing from New Zealand, and now based in Boston, MA, I am a growth marketer and full-stack developer intent on finding ways to use technology to improve the human experience.</p>
                <p>I am an idealist. To me, technological progress is not the goal - tech is a tool. I believe in building technology and businesses that:</p>
                <ul>
                    <li>Improve our ability to communicate effectively with each other;</li>
                    <li>Help us to better understand our society - its strengths, weaknesses, economics, and systemic biases; and</li>
                    <li>Enable us to bridge the knowledge and education gap and help to shed light on or actively reduce inequality.</li>
                </ul>
                <p>I find the most fulfillment working on projects in Ecommerce, Artificial Intelligence, and Climate Change, and I am looking to work for or with organizations that are finding practical uses for technology to help incrementally improve our world.</p>

                <div id="actions" className="mt-2">
                    <Button content="Get in touch" onClick={() => { router.push("/contact" )}}></Button>
                </div>
            </div>

        </div>
    )
}