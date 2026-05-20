'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'

type PartnerForm = {
  name: string
  company: string
  website: string
  industry: string
  revenue: string
  message: string
}

export function PartnerEnquiryForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<PartnerForm>()
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = async (data: PartnerForm) => {
    console.log('Partner enquiry:', data)
    setSubmitted(true)
    reset()
  }

  if (submitted) {
    return (
      <div className="card text-center py-12">
        <div className="text-orange text-5xl mb-4">✓</div>
        <h3 className="font-display text-2xl text-ink mb-2">ENQUIRY RECEIVED</h3>
        <p className="text-muted font-body text-sm">We'll be in touch within 1 business day.</p>
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
          <label className="block text-xs font-semibold text-ink mb-1.5">Company *</label>
          <input
            {...register('company', { required: true })}
            className={`input-field ${errors.company ? 'input-error' : ''}`}
            placeholder="Acme Corp"
          />
          {errors.company && <p className="text-red-500 text-xs mt-1">Required</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-ink mb-1.5">Website</label>
          <input
            {...register('website')}
            className="input-field"
            placeholder="https://yourcompany.com"
            type="url"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-ink mb-1.5">Industry *</label>
          <input
            {...register('industry', { required: true })}
            className={`input-field ${errors.industry ? 'input-error' : ''}`}
            placeholder="e.g. SaaS, Fintech, Services"
          />
          {errors.industry && <p className="text-red-500 text-xs mt-1">Required</p>}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-ink mb-1.5">Monthly Revenue Range *</label>
        <select
          {...register('revenue', { required: true })}
          className={`input-field ${errors.revenue ? 'input-error' : ''}`}
        >
          <option value="">Select range</option>
          <option value="pre-revenue">Pre-revenue / Early stage</option>
          <option value="0-50k">SGD 0 – 50K</option>
          <option value="50k-200k">SGD 50K – 200K</option>
          <option value="200k-1m">SGD 200K – 1M</option>
          <option value="1m+">SGD 1M+</option>
        </select>
        {errors.revenue && <p className="text-red-500 text-xs mt-1">Required</p>}
      </div>

      <div>
        <label className="block text-xs font-semibold text-ink mb-1.5">Tell Us About Your Sales Challenge</label>
        <textarea
          {...register('message')}
          className="textarea-field"
          rows={4}
          placeholder="What does your current sales motion look like? Where do you need help most?"
        />
      </div>

      <input type="text" name="_hp" className="hidden" tabIndex={-1} autoComplete="off" />

      <button type="submit" className="btn-primary w-full py-4">
        Become a Partner →
      </button>
    </form>
  )
}
