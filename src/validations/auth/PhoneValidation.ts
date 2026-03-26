import { object, string, number, date, InferType } from 'yup';

const PhoneInputSchema = object({
  PhoneNumber: string()
    .required('Phone Number is Requried')
    .matches(/^[6-9]\d{9}$/, 'Invalid Indian phone number'),
});

export default PhoneInputSchema;
