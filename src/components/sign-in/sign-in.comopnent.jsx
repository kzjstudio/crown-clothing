import React from 'react';


import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';

import CustomButton from '../custom-button/custom-button.component';

import {signInWithGoogle} from '../../firebase/firebase.utils.js';

class SignIn extends React.Component{
    constructor(props){
        super(props);


        this.state = {
            email: '',
            passwoord: '',
        }
    }

    handleSubmit = event =>{
        event.preventDefault();

        this.state({email:'', passwoord:''})
    }


    handleChange = event =>{
        const {value, name} = event.target;
        this.setState({[name]: value})
    }

    render (){
        return(
            <div className= 'sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with you email and password </span>

                <form onSubmit= {this.handleSubmit}>
                    <FormInput 
                    name='email'
                    type='email'
                    value={this.state.email} 
                    handleChange={this.handleChange} 
                    label = 'Email'
                    required
                  
                     />
              
              
                    <FormInput 
                    name='password' 
                    type='password' 
                    value={this.state.passwoord} 
                    handleChange={this.handleChange} 
                    label = "Password"
                    required
                    
                     />
                    <div className='buttons'>
                    <CustomButton type='submit'> Sign in </CustomButton> 
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                     Sign in With Google
                    </CustomButton> 
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;

