import * as yup from 'yup';
import {ref} from 'yup';

const getCharacterValidation =(str)=>{
    return `Your password must have at least one ${str} character`;
}
export const registerSchema = yup.object({
    FirstName: yup.string()
        .max(10, 'First name cannot be more than 10 characters')
        .required('First name required')
        .matches(/[A-Za-z ]/,"Special characters are not allowed"),
    LastName: yup.string()
        .max(10, 'Last name cannot be more than 10 characters')
        .required('User name required')
        .matches(/[A-Za-z ]/,"Special characters are not allowed"),
    Country: yup.string()
        .required('Select Country'),
    Password: yup.string()
        .required('Password required')
        .matches(/[0-9]/,getCharacterValidation('digit'))
        .matches(/[A-Z]/,getCharacterValidation('uppercase'))
        .matches(/[a-z]/,getCharacterValidation('lowercase')),
    ConfirmPassword: yup.string()
        .required('Please re-enter your password')
        .oneOf([ref('Password')],'Passwords does not match')
})