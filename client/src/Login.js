import React, { Component } from "react"
import { MDBContainer, MDBRow, MDBInput, MDBBtn, MDBCol,toast,ToastContainer} from "mdbreact";
import Recaptcha from "react-recaptcha"
import { connect } from 'react-redux'
import { getUser } from './actions/userActions'



class Login extends Component{
    constructor(props){
        super(props)
        this.handleCaptchaVerified = this.handleCaptchaVerified.bind(this)
        this.verifyCallback = this.verifyCallback.bind(this)
        this.expiredCallback = this.expiredCallback.bind(this)
        
        this.state = {
            captchaVerified: false,
            document: "",
            password: "" 
        }
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    handleCaptchaVerified(){
        return () => {
            if(this.state.captchaVerified && this.state.document!==""&&this.state.password!==""){
                const { document, password } = this.state;
                const user = {
                    document,
                    password
                }
                this.props.getUser(user)
                setTimeout("location.reload(true);",1500);
                
            }else{
                return toast.error('Verifique todos los campos', {
                    position: "top-right",
                });
            }
        };
    };

    verifyLocalStorage(){
        if(localStorage.getItem('user')){
            toast.error('Login correcto', {
                position: "top-right",
            }); 
        }else{
            toast.error('Error en el login', {
                position: "top-right",
            });
        }
    }
    callback = function () {
        console.log("Captcha Done!")
    };

    verifyCallback(response){
        if(response){
            this.setState({
                captchaVerified: true
            })
        }
    }

    expiredCallback(response){
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
                <p className="h5 text-center mb-4">Ingresar</p>
                <div className="grey-text">
                    <MDBInput
                      label="Documento"
                      icon="envelope"
                      group
                      name="document"
                      type="number"
                      min="1"
                      validate
                      error="wrong"
                      success="right"
                      onChange={this.onChange}
                    />
                    <MDBInput
                      label="Contraseña"
                      icon="lock"
                      group
                      name="password"
                      type="password"
                      validate
                      onChange={this.onChange}
                    />
                </div>
                <div className="mt-5 mb-5">
                    <Recaptcha
                        sitekey="6LfzBZ8UAAAAANoXNMwEkpTAjADD2cTCaCT0t_1c"
                        render="explicit"
                        onloadCallback={this.callback}
                        verifyCallback={this.verifyCallback}
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

const mapStateToProps = state => ({
    user: state.user
}) 

export default connect(mapStateToProps, { getUser })(Login)