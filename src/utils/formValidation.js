export const formValidationRules = {
  fullName: {
    required: 'Full name is required',
    pattern: {
      value: /^[a-zA-Z\s]*$/,
      message: 'Please enter a valid name (letters and spaces only)'
    },
    minLength: {
      value: 2,
      message: 'Name must be at least 2 characters long'
    }
  },
  email: {
    required: 'Email is required',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Please enter a valid email address'
    }
  },
  phone: {
    required: 'Phone number is required',
    pattern: {
      value: /^\+?[\d\s-()]{10,}$/,
      message: 'Please enter a valid phone number'
    }
  },
  college: {
    required: 'College name is required',
    minLength: {
      value: 2,
      message: 'College name must be at least 2 characters long'
    }
  },
  year: {
    required: 'Year of study is required',
    pattern: {
      value: /^[1-5](st|nd|rd|th)\s+Year$/i,
      message: 'Please enter a valid year (e.g., "2nd Year")'
    }
  },
  reason: {
    required: 'Please tell us why you want to join',
    minLength: {
      value: 20,
      message: 'Please provide a more detailed response (at least 20 characters)'
    }
  }
};