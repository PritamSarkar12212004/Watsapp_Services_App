import { object, string, number } from 'yup';

const ProfileSetupSchema = object({
  fullName: string()
    .trim()
    .required('Full Name is required')
    .min(3, 'Minimum 3 characters')
    .max(50, 'Maximum 50 characters'),

  gender: string()
    .oneOf(['male', 'female', 'other'], 'Select valid gender')
    .required('Gender is required'),

  age: number()
    .typeError('Age must be a number')
    .required('Age is required')
    .min(1, 'Minimum age is 1')
    .max(120, 'Maximum age is 120'),

  profilePic: string().required('Profile picture is required'),
});

export default ProfileSetupSchema;
