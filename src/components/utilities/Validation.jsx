const FormValidation = (formState) =>{
          const formValidation = () => {
        const errMsg = {}
        const validEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ ;
        const phoneFormat = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
        

        if (formData.firstname === "") {
            errMsg.firstname ='First name is required'
        }else if(formData.firstname.length > 30 || formData.firstname.length < 2){
          errMsg.firstname='Name maybe too short'          
        }

        if (formData.lastname === "") {
          errMsg.lastname ='Last name is required'
        }else if(formData.lastname.length > 30 || formData.lastname.length < 2){
          errMsg.lastname='Name maybe too short'          
        }
          
        if(formData.email === ''){
            errMsg.email ='Email is required'
            
        }else if(!validEmail.test(formData.email)){
          errMsg.email ='Email is incorrect'
            
        }

        if(formData.phonenumber === ''){
          errMsg.phonenumber ='Phone number is required'
          
        }else if(!phoneFormat.test(formData.phonenumber)){
          errMsg.phonenumber =' Format 000-000-0000 expected'
            
        }
        if (formData.streetAddress === "") {
          errMsg.streetAddress ='address is required'
        }
        if (formData.city === "") {
          errMsg.city ='city is required'
        }
        if (formData.selectBedNum === "") {
          errMsg.selectBedNum ='# bedroom is required'
        }
        if (formData.selectBathNum === "") {
          errMsg.selectBathNum ='# bathroom is required'
        }
        if (formData.zipcode === "") {
          errMsg.zipcode ='zipcode is required'
        }else if(formData.zipcode.length !== 5){
          errMsg.zipcode ='zipcode doesn\'t match'
        }else if(isNaN(formData.zipcode)){
          errMsg.zipcode ='only numbers acccepted'
        }

        if (formData.selectCleanType === '') {
          errMsg.selectCleanType ='Cleaning type is required'
        }

        if(formData.cleaningFrequency !=='1' 
          && formData.cleaningFrequency !=='0.7' 
          && formData.cleaningFrequency !=='0.75' 
          && formData.cleaningFrequency !=='0.8' ){
            errMsg.cleaningFrequency ='cleaning frequence is required'
        }
        
        if (formData.cleaningDate ==='') {
          errMsg.cleaningDate ='Cleaning date is required'
        }
        if (formData.selectCleanTime ==='') {
          errMsg.selectCleanTime ='Cleaning time is required'
        }

        return errMsg;
  }
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