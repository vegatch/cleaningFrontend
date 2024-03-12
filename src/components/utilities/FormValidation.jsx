const FormValidation = (formData) => {
    let formValid = true;
    let validationError ={};
    const validEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ ;
    const phoneFormat = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    

    if (formData.firstname === "") {
        validationError.firstname ='First name is required'
        formValid = false
    }else if(formData.firstname.length > 30 || formData.firstname.length < 2){
        validationError.firstname='Name maybe too short'    
        formValid = false      
    }

    if (formData.lastname === "") {
      validationError.lastname ='Last name is required'
      formValid = false
    }else if(formData.lastname.length > 30 || formData.lastname.length < 2){
      validationError.lastname='Name maybe too short'   
      formValid = false       
    }
      
    if(formData.email === ''){
        validationError.email ='Email is required'
        formValid = false        
    }else if(!validEmail.test(formData.email)){
      validationError.email ='Email is incorrect'
      formValid = false        
    }

    if(formData.phonenumber === ''){
      validationError.phonenumber ='Phone number is required'
      formValid = false      
    }else if(!phoneFormat.test(formData.phonenumber)){
      validationError.phonenumber =' Format 000-000-0000 expected'
      formValid = false        
    }

    if (formData.streetAddress === "") {
      validationError.streetAddress ='address is required'
      formValid = false
    }
    if (formData.city === "") {
      validationError.city ='city is required'
      formValid = false
    }
    if (formData.selectBedNum === "") {
      validationError.selectBedNum ='# bedroom is required'
      formValid = false
    }
    if (formData.selectBathNum === "") {
      validationError.selectBathNum ='# bathroom is required'
      formValid = false
    }
    if (formData.zipcode === "") {
      validationError.zipcode ='zipcode is required'
      formValid = false
    }else if(formData.zipcode.length !== 5){
      validationError.zipcode ='zipcode should be 5 digit long'
      formValid = false
    }else if(isNaN(formData.zipcode)){
      validationError.zipcode ='only numbers acccepted'
      formValid = false
    }

    if (formData.selectCleanType === '') {
      validationError.selectCleanType ='Cleaning type is required'
      formValid = false
    }

    if(formData.cleaningFrequency !=='1' 
      && formData.cleaningFrequency !=='0.7' 
      && formData.cleaningFrequency !=='0.75' 
      && formData.cleaningFrequency !=='0.8' ){
        validationError.cleaningFrequency ='cleaning frequence is required'
        formValid = false
    }
    
    if (formData.cleaningDate ==='') {
      validationError.cleaningDate ='Cleaning date is required'
      formValid = false
    }
    if (formData.selectCleanTime ==='') {
      validationError.selectCleanTime ='Cleaning time is required'
      formValid = false
    }

    // setFormError(validationError)
    return formValid;
}

export default FormValidation