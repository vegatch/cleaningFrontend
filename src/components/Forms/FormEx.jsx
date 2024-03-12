import React from "react";
import Input from './Input.jsx'


const FormRegex = () =>{

    const initialState={
      firstName: '',
      middleName:'',
      lastName: '',
      email:'',
      phoneNumber:'',
    }

    const [formData, setFormData] = React.useState(initialState);
    const [formError, setFormError] = React.useState(initialState);

    const formValidation = () =>{
      let formValid = true;
      let validationError = {};
      const validName = /[a-z]i/
      if(formData.firstName === ''){
        validationError.firstName = 'First name is required';
        formValid = false;
      } else if(!formData.firstName.match(validName) ){
        validationError.firstName = 'Only letter accepted';
        formValid = false;
      }

      setFormError(validationError);
      return formValid;

    }

    

    
    const personalArray = [
        {
          id: 1,
          name: "firstName",
          type: "text",
          placeholder: "first name",
          pattern:"[a-z]i",
          msgErr:'only letters accepted',          
          label: "First name",
          required: true,
        },    
        {
          id: 2,
          name: "middleName",
          type: "text",
          placeholder: "middle name",
          label: "Middle name",
          // pattern:"[a-z]{1}i",
          msgErr:'only letters accepted',  
          maxLength: 1,
          required: true,
        },     
        {
          id: 3,
          name: "lastName",
          type: "text",
          placeholder: "last name",
          label: "Last name",
          pattern: "[a-z]i",
          msgErr:'only letters accepted',  
          required: true,
        },    
  
        {
          id: 4,
          name: "email",
          type: "email",
          placeholder: "Ex: benskya@benskya.com",
          label: "email",
          pattern:"/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$/",
          
          msgErr:'invalid email',  
        },
        {
          id: 5,
          name: "phoneNumber",
          type: "text",
          placeholder: "Type here",
          label: "Phone number",
          pattern: `[0-9]{3}-[0-9]{3}-[0-9]{4}`,
          msgErr:'invalid phone number',  
          maxlength:'16',
          required: true,
        },
        
      ]


     
      // const phoneConverter = () =>{
        
      //   let phone = formData.phoneNumber
      //   let phoneArray = phone.split(/\D/ig);
      //   let onlyDigit = phoneArray.join('');

      //   let number = onlyDigit.length;
      //   let result, a, b, c = ''
      //   if(number > 3){
      //     a=  onlyDigit.slice(0, 3)  
      //   }

      //   if(number > 6){
      //      b=  onlyDigit.slice(3, 6)  
      //   }

      //   if(number >= 10){
      //     c=  onlyDigit.slice(6, 10)   
      //   }
      //   result =  `${a}-${b}-${c}`
        
      //   return result;

      // }

     
      // let phoneFormat = /\d{3}-\d{3}-\d{4}/
      // if(phoneConverter().match(phoneFormat)){
      //   formData.phoneNumber = phoneConverter()
      // }
      // console.log('phone conversion', phoneConverter('bnmmm123456ghhhhh7890fghjk'))

      
      const handleFormChange = e => {
        const name = e.target.name;
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;      
        
        setFormData((prev) =>{
          return { ...prev, [name]: value}
        })      
      }
      
      
      const handleSubmit = (e) =>{
        if(formValidation()){
          console.log('submitted')
        }else{
          e.preventDefault();
          console.log(' not submitted') 
        }
      }
      
      
      
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Form Regex validation</h1>
                
                {


                    personalArray.map((input) => (
                    <Input
                      key={input.id}
                      {...input}
                      type={input.type}
                      value={formData[input.name]}     
                      error={formError[input.name]}  
                      onBlur={formValidation}              
                      onChange={handleFormChange}
                      
                      
                    />
                  ))

                }



                <input type="submit" />
            </form>
        </div>
    )
}

export default FormRegex;