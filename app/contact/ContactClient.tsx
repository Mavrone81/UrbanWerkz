'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'

type ContactForm = {
  name: string
  email: string
  company: string
  enquiryType: string
  message: string
}

function ContactFormComponent() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const onSubmit = async (data: ContactForm) => {
    setLoading(true)
    await new Promise((r) => setTimeout(r, 800))
    console.log('Contact form:', data)
    setSubmitted(true)
    setLoading(false)
    reset()
  }

  if (submitted) {
    return (
      <div className="card text-center py-16">
        <div className="w-16 h-16 rounded-full bg-orange/10 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-2xl text-ink mb-2">MESSAGE SENT</h3>
        <p className="text-muted font-body text-sm max-w-xs mx-auto">
          We've received your enquiry and will respond within 1 business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-ink mb-1.5">Full Name *</label>
          <input
            {...register('name', { required: true })}
            className={`input-field ${errors.name ? 'input-error' : ''}`}
            placeholder="Jane Smith"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">Required</p>}
        </div>
        <div>
          <label className="block text-xs font-semibold text-ink mb-1.5">Email Address *</label>
          <input
            {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/ })}
            className={`input-field ${errors.email ? 'input-error' : ''}`}
            type="email"
            placeholder="jane@company.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">Valid email required</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-ink mb-1.5">Company</label>
          <input
            {...register('company')}
            className="input-field"
            placeholder="Acme Corp"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-ink mb-1.5">Enquiry Type *</label>
          <select
            {...register('enquiryType', { required: true })}
            className={`input-field ${errors.enquiryType ? 'input-error' : ''}`}
          >
            <option value="">Select</option>
            <option value="new-partner">New Partner Enquiry</option>
            <option value="existing-partner">Existing Partner</option>
            <option value="media">Media / Press</option>
            <option value="career">Career Enquiry</option>
            <option value="other">Other</option>
          </select>
          {errors.enquiryType && <p className="text-red-500 text-xs mt-1">Required</p>}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-ink mb-1.5">Message *</label>
        <textarea
          {...register('message', { required: true, minLength: 20 })}
          className={`textarea-field ${errors.message ? 'input-error' : ''}`}
          rows={5}
          placeholder="Tell us about your business and what you're looking for..."
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">Please add a little more detail (20+ chars)</p>}
      </div>

      <input type="text" name="_hp" className="hidden" tabIndex={-1} autoComplete="off" />

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full py-4 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? 'Sending...' : 'Send Message →'}
      </button>
    </form>
  )
}

export { ContactFormComponent }
