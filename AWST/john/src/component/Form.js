import React from "react";

import axios from 'axios';

const URL = "https://bsgyzg0f9c.execute-api.us-east-1.amazonaws.com/v1/contact/";

const initData = {
  name: "",
  email: "",
  subject: "",
  phone: "",
  message:""
}

class Form extends React.Component {

  
    state = {
      errors: {
        ...initData
      },
    };

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    let errors = this.state.errors;

    switch (name) {
      case "name":
        errors.name = value.length === 0 ? "Name is not empty" : "";
        break;
      case "subject":
        errors.subject = value.length < 2 ? "Subject must be 5 characters" : "";
        break;
      case "phone":
        errors.phone = value.length < 5 ? "phone is not empty" : "";
        break;
      case "email":
        errors.email = value.length < 5 ? "Subject is not empty" : "";
        let appos = value.indexOf("@");
        let dots = value.lastIndexOf(".");

        if (appos < 1 || dots - appos < 2) {
          errors.email = "please enter valid email";
        }

        break;

      default:
        break;
    }
    this.setState({errors : {...errors, [name]: value }});
   
  };

  submitHandler = async (e) => {
    e.preventDefault();
    const data = {};
    data.id=Math.floor(Math.random() * 9000000000) +1000000000
    data.name = this.state.errors.name;
    data.email = this.state.errors.email;
    data.message = this.state.errors.subject;
    data.subject = this.state.errors.message;
    data.phone = this.state.errors.phone;

    console.log(data);

    const response = await axios.post(URL, data);
    console.log(response.data)
    alert(`Hello, Guest ${data.name} thank for your contact. I  will get back to the soonest possible!`)
    if(response.data==="Success"){
      
      this.setState({errors: {...initData}})
    }
   
  };

  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.submitHandler} className="form_class">
        <div className="row">
          <div className="col-lg-6">
            <input
              type="text"
              id="name"
              name="name"
              value ={this.state.errors.name}
              className="form-control"
              placeholder="Your Name*"
              required
              onChange={this.handleChange}
            />
            <p>{errors.name}</p>
          </div>
          <div className="col-lg-6">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value ={this.state.errors.email}
              placeholder="Your Email*"
              required
              onChange={this.handleChange}
            />
            <p>{errors.email}</p>
          </div>
          <div className="col-lg-6">
            <input
              type="text"
              id="subject"
              value ={this.state.errors.subject}
              name="subject"
              className="form-control"
              placeholder="Subject*"
              required
              onChange={this.handleChange}
            />
            <p>{errors.subject}</p>
          </div>
          <div className="col-lg-6">
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              value ={this.state.errors.phone}
              placeholder="Phone"
              onChange={this.handleChange}
            />
            <p>{errors.phone}</p>
          </div>
        </div>
        <textarea
          name="message"
          id="message"
          className="form-control"
          rows="6"
          placeholder="Your Message ..."
          value ={this.state.errors.message}
          onChange={this.handleChange}
          required
        ></textarea>
        <button type="submit" className="btn send_btn theme_btn">
          Send Message
        </button>
      </form>
    );
  }
}

export default Form;


