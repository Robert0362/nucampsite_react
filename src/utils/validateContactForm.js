

export const validateContactForm = (values) => {
    const errors = {};

        if (!values.firstName) 
        {
            errors.firstName = 'Required';
        }
        else if (values.firstName.length < 2)
        {
            console.log(values.firstName);
            errors.firstName = 'Must be at least 2 characters.';
        }
        else if (values.firstName.length > 15){
            errors.firstName = 'Must be 15 characters or less';
        }

        if (!values.lastName) {
            errors.lastName = 'Required';
        } 
        else if (values.lastName.length < 2){
            errors.lastName = 'Must be at least 2 characters.';
        } 
        else if (values.lastName.length > 20){
            errors.lastName = 'Must be 20 characters or less';
        }

    

    const reg = /^\d+$/;

        if (!reg.test(values.phoneNum)) {
            errors.phoneNum = 'The phone number should contain only numbers';
        } else if (values.phoneNum < 9){
            errors.phoneNum = 'Must be at least 9 numbers.';
        }

        if (!values.email.includes('@')) {
            errors.email = 'Email must include a @';
        }
        
    return errors;    
};