'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'

const roles = [
  {
    title: 'Sales Executive — B2B',
    type: 'Full-time',
    location: 'Singapore',
    desc: 'Own a partner account end-to-end. Prospect, qualify, demo, and close. Strong base + commission.',
  },
  {
    title: 'Business Development Representative',
    type: 'Full-time',
    location: 'Hybrid',
    desc: 'Drive top-of-funnel. Multi-channel outbound — email, LinkedIn, calls. Fast track to AE.',
  },
  {
    title: 'Senior Sales Consultant',
    type: 'Full-time',
    location: 'Singapore',
    desc: 'Lead complex enterprise deals and mentor junior reps. 5+ years B2B sales experience required.',
  },
  {
    title: 'Commission-Based Sales Agent',
    type: 'Flexible',
    location: 'Remote',
    desc: 'Pure performance. Work on your terms, earn on your results. Experienced closers only.',
  },
]

type ApplicationForm = {
  name: string
  email: string
  phone: string
  position: string
  experience: string
  industry: string
  linkedin: string
  coverNote: string
  consent: boolean
}

type TalentForm = {
  talentEmail: string
  talentConsent: boolean
}

export function ApplicationFormComponent() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ApplicationForm>()
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (data: ApplicationForm) => {
    console.log('Application:', data)
    setSubmitted(true)
    reset()
  }

  if (submitted) {
    return (
      <div className="card text-center py-12">
        <div className="text-orange text-5xl mb-4">✓</div>
        <h3 className="font-display text-2xl text-ink mb-2">APPLICATION RECEIVED</h3>
        <p className="text-muted font-body text-sm">We review every application personally. Expect to hear from us within 3–5 business days.</p>
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
          <label className="block text-xs font-semibold text-ink mb-1.5">Phone Number *</label>
          <input
            {...register('phone', { required: true })}
            className={`input-field ${errors.phone ? 'input-error' : ''}`}
            type="tel"
            placeholder="+65 9123 4567"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">Required</p>}
        </div>
        <div>
          <label className="block text-xs font-semibold text-ink mb-1.5">Position Applying For *</label>
          <select
            {...register('position', { required: true })}
            className={`input-field ${errors.position ? 'input-error' : ''}`}
          >
            <option value="">Select a role</option>
            {roles.map((r) => (
              <option key={r.title} value={r.title}>{r.title}</option>
            ))}
          </select>
          {errors.position && <p className="text-red-500 text-xs mt-1">Required</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-ink mb-1.5">Years of Sales Experience *</label>
          <select
            {...register('experience', { required: true })}
            className={`input-field ${errors.experience ? 'input-error' : ''}`}
          >
            <option value="">Select</option>
            <option value="<1">Less than 1 year</option>
            <option value="1-3">1–3 years</option>
            <option value="3-5">3–5 years</option>
            <option value="5+">5+ years</option>
          </select>
          {errors.experience && <p className="text-red-500 text-xs mt-1">Required</p>}
        </div>
        <div>
          <label className="block text-xs font-semibold text-ink mb-1.5">Industry Background</label>
          <input
            {...register('industry')}
            className="input-field"
            placeholder="e.g. SaaS, Fintech, Logistics"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-ink mb-1.5">LinkedIn Profile URL</label>
        <input
          {...register('linkedin')}
          className="input-field"
          type="url"
          placeholder="https://linkedin.com/in/yourprofile"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-ink mb-1.5">Cover Note</label>
        <textarea
          {...register('coverNote')}
          className="textarea-field"
          rows={4}
          placeholder="Tell us why you'd thrive in a performance-driven sales environment..."
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          {...register('consent', { required: true })}
          type="checkbox"
          id="consent"
          className="mt-0.5 w-4 h-4 accent-orange"
        />
        <label htmlFor="consent" className="text-xs text-muted font-body leading-relaxed">
          I consent to Urban Werkz storing my personal data for recruitment purposes in accordance with PDPA guidelines. *
        </label>
      </div>
      {errors.consent && <p className="text-red-500 text-xs">Consent required</p>}

      <input type="text" name="_hp" className="hidden" tabIndex={-1} autoComplete="off" />

      <button type="submit" className="btn-primary w-full py-4">
        Submit Application →
      </button>
    </form>
  )
}

export function TalentCommunity() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<TalentForm>()
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (data: TalentForm) => {
    console.log('Talent pool:', data)
    setSubmitted(true)
    reset()
  }

  if (submitted) {
    return (
      <p className="text-orange font-semibold font-body text-sm">
        ✓ You're in the talent pool. We'll reach out when a role matches.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3">
      <input
        {...register('talentEmail', { required: true, pattern: /^\S+@\S+\.\S+$/ })}
        className={`input-field flex-1 ${errors.talentEmail ? 'input-error' : ''}`}
        type="email"
        placeholder="your@email.com"
      />
      <button type="submit" className="btn-primary whitespace-nowrap px-6 py-3">
        Join Talent Pool
      </button>
    </form>
  )
}
