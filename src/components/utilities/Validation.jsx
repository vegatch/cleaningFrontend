const FormValidation = (formState) =>{
    const validationError = {}
    const validEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ ;
    const phoneFormat = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

    
    if(formState.fullname === ''){
        validationError.fullname ='Name is required'
        
    }else if(formState.fullname.length > 30 || formState.fullname.length < 5){
        validationError.fullname='Name should be between 5 abd 30'
        
    }

    if(formState.email === ''){
        validationError.email ='Email is required'
        
    }else if(!validEmail.test(formState.email)){
        validationError.email ='Email is incorrect'
        
    }

    if(formState.phonenumber === ''){
        validationError.phonenumber ='Phone number is required'
        
    }else if(!phoneFormat.test(formState.phonenumber)){
        validationError.phonenumber =' Format 000-000-0000 expected'
        
    }

    if(formState.message === ''){
        validationError.message ='Message is required'
        
    }
    if( formState.message.length > 300 ){
        validationError.message =' message should be less than 300 characters'
        
    }
    if( formState.message.length < 11 ){
        validationError.message =' message should be at least 10 characters long'
        
    }


    
    return validationError;
}

export default FormValidation;