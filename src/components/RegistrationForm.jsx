import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import {
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  AcademicCapIcon,
  CalendarIcon,
  ChatBubbleBottomCenterTextIcon,
} from '@heroicons/react/24/outline';
import Input from './Input';
import TextArea from './TextArea';
import { formValidationRules } from '../utils/formValidation';

export default function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onBlur'
  });

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', data);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-lg mx-auto space-y-6 backdrop-blur-lg bg-black/30 p-8 rounded-xl border border-gray-700"
    >
      <Input
        label="Full Name"
        name="fullName"
        icon={UserIcon}
        register={register}
        error={errors.fullName}
        placeholder="John Doe"
        {...formValidationRules.fullName}
      />

      <Input
        label="Email Address"
        name="email"
        type="email"
        icon={EnvelopeIcon}
        register={register}
        error={errors.email}
        placeholder="john@example.com"
        {...formValidationRules.email}
      />

      <Input
        label="Phone Number"
        name="phone"
        icon={PhoneIcon}
        register={register}
        error={errors.phone}
        placeholder="+1 (555) 000-0000"
        {...formValidationRules.phone}
      />

      <Input
        label="College Name"
        name="college"
        icon={AcademicCapIcon}
        register={register}
        error={errors.college}
        placeholder="Your University"
        {...formValidationRules.college}
      />

      <Input
        label="Year of Study"
        name="year"
        icon={CalendarIcon}
        register={register}
        error={errors.year}
        placeholder="e.g., 2nd Year"
        {...formValidationRules.year}
      />

      <TextArea
        label="Why do you want to join?"
        name="reason"
        icon={ChatBubbleBottomCenterTextIcon}
        register={register}
        error={errors.reason}
        rows="4"
        placeholder="Tell us why you're interested..."
        {...formValidationRules.reason}
      />

      <motion.button
        type="submit"
        className={`w-full py-3 px-6 rounded-lg text-white font-medium
          ${isSubmitting ? 'bg-cyber-purple' : 'bg-gradient-to-r from-cyber-blue to-cyber-purple'}
          hover:shadow-lg hover:shadow-cyber-blue/20
          transition-all duration-300 ease-out
          disabled:opacity-50 disabled:cursor-not-allowed`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Processing...
          </motion.div>
        ) : (
          'Join OWASP Tech Club'
        )}
      </motion.button>
    </motion.form>
  );
}