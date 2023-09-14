'use client'

import { Button } from '@/app/components'
import { sendMail } from '@/utils/mailer'
import { useState, useEffect } from 'react'

export default function Contact({}) {

    // State
    const [formValid, setFormValid] = useState(false);
    const [buttonMessage, setButtonMessage] = useState("Send");
    const [form, setForm] = useState({
        name: null,
        email: null,
        message: null
    });

    // Styles
    const formRowClasses = "w-full relative text-black";
    const labelClasses = "absolute text-[10px] text-gray-500 left-2 top-1";
    const inputClasses = "rounded-md p-2 pt-6 text-black outline-0 w-full";

    // Form Handlers
    const onChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        if (form.name && form.email && form.message) { setFormValid(true) } else { setFormValid(false) }
    }, [form])
        
    // Form Submission
    const onSubmit = async (e: any) => {

        e.preventDefault();

        setButtonMessage("Sending...");

        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        const result = await sendMail(String(data.name), String(data.email), String(data.message));

        console.log("result:",result)
        if (result?.rejected?.length > 0) {
            setButtonMessage("Error!");
        } else {
            setButtonMessage("Success!");
        }
        
    };
    
    return (
        <section className="flex flex-col max-w-2xl">
            <div id="content" className="flex flex-col p-0 sm:p-8">
                <h1 className="text-2xl font-bold mb-4">Get in touch</h1>
                <p>Whether you're looking to hire me, collaborate on a project, or just want to say hi, I'd love to hear from you.</p>
                
                <form name="contact" method="POST" data-netlify="true" className="flex flex-col gap-4 mt-2" onSubmit={onSubmit}>
                    <input type="hidden" name="form-name" value="contact"></input>
                    <div className={formRowClasses}>
                        <label htmlFor="name" className={labelClasses}>Name<span className="text-red-500">*</span></label>
                        <input type="text" name="name" id="name" className={`${inputClasses} h-[52px]`} onChange={onChange} required></input>
                    </div>
                    <div className={formRowClasses}>
                        <label htmlFor="email" className={labelClasses}>Email<span className="text-red-500">*</span></label>
                        <input type="email" name="email" id="email" className={`${inputClasses} h-[52px]`} onChange={onChange} required></input>
                    </div>
                    <div className={formRowClasses}>
                        <label htmlFor="message" className={labelClasses}>Message<span className="text-red-500">*</span></label>
                        <textarea name="message" id="message" className={`${inputClasses}`} rows={5} onChange={onChange} required></textarea>
                    </div>

                    <div className="flex flex-row justify-start">
                        <Button content={buttonMessage} className="px-6" type="input" disabled={!formValid || buttonMessage === "Success!"}></Button>
                    </div>
                </form>
            </div>
        </section>
    )
}