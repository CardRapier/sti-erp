import React, { Component } from "react"
import { MDBContainer, MDBRow, MDBInput, MDBBtn, MDBCol,toast,ToastContainer} from "mdbreact";
import Recaptcha from "react-recaptcha"

class Login extends Component{
    constructor(props){
        super(props)
        this.handleCaptchaVerified = this.handleCaptchaVerified.bind(this)
        this.verifyCallback = this.verifyCallback.bind(this)
        this.expiredCallback = this.expiredCallback.bind(this)
        
        this.state = {
            captchaVerified: true
        }
    }

    handleCaptchaVerified(){
        return () => {
            if(this.state.captchaVerified){
                localStorage.setItem('user','user')
                localStorage.setItem('rol','rol')
                this.props.handleAppChange(this.props.name)
            }else{
                return toast.error('Error en el login', {
                    position: "top-right",
                });
            }
        };
    };

    callback = function () {
        console.log('Captcha Done!!!!');
    };

    verifyCallback(response){
        if(response){
            this.setState({
                captchaVerified: true
            })
        }
    }

    expiredCallback(response){
        console.log("alert")
        if(response){
            this.setState({
                captchaVerified: false
            })
        }
    }

    render(){
        return(
            <MDBContainer >
            <MDBRow>
            <MDBCol size="4"></MDBCol>
            <ToastContainer
                hideProgressBar={false}
                newestOnTop={true}
                autoClose={5000}
            />
            <MDBCol size="4">
                <form className="mt-5">
                <p className="h5 text-center mb-4">Sign in</p>
                <div className="grey-text">
                    <MDBInput
                      label="Email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Password"
                      icon="lock"
                      group
                      type="password"
                      validate
                    />
                </div>
                <div className="mt-5 mb-5">
                    <Recaptcha
                        sitekey="6LfzBZ8UAAAAANoXNMwEkpTAjADD2cTCaCT0t_1c"
                        render="explicit"
                        onloadCallback={this.callback}
                        verifyCallback={this.verifyCallback}
                        expiredCallback={this.expiredCallback}
                    />
                </div>
                <div className="text-center">
                    <MDBBtn onClick={this.handleCaptchaVerified()}>Login</MDBBtn>
                </div>
                </form>
                </MDBCol>
            <MDBCol size="4"></MDBCol>
            </MDBRow>
          </MDBContainer>
        );
    }

}

export default Login