import { useEffect, useState } from "react";
import { Form, useActionData } from "react-router-dom"

export const getContactFormData = async ({request}) =>  {
    const resp = await request.formData();
    const data = Object.fromEntries(resp);
    console.log(data);
    if(data) {
        return true;
    }else {
        return false;
    }
    
    
}
export const Contact = () => {
    
    const [successm, setSuccessm] = useState(false);
    const actionData = useActionData();
    // console.log(actionData);
    useEffect(() => {
        if(actionData) {
            setSuccessm(actionData);
            setTimeout(() => {
                setSuccessm(false);  
            }, 5000)
        }else {
            setSuccessm(false); 
        }
    }, [actionData]);
    
    return (
        <section className="container mt-5">
            <header>
                <h2>Contact Us</h2>
            </header>
            <div className="row">
                <div className="col-6">
                <Form method="POST" action="/contact">
                    <div className="input-group has-validation">
                        <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                        <div className="form-floating is-invalid">
                            <input type="text" name="name" className="form-control is-invalid" id="floatingInputGroup2" placeholder="Username" required />
                            <label htmlFor="floatingInputGroup2">Full Name</label>
                        </div>
                        <div className="invalid-feedback mb-4">
                            
                        </div>

                        <span className="input-group-text"><i className="fa fa-mail-forward"></i></span>
                        <div className="form-floating is-invalid">
                            <input type="text" name="email" className="form-control is-invalid" id="floatingInputGroup4" placeholder="Username" required />
                            <label htmlFor="floatingInputGroup4">Email</label>
                        </div>
                        <div className="invalid-feedback mb-4">
                        </div>

                        {/* <span className="input-group-text"><i className="fa fa-mail-forward"></i></span> */}
                        <div className="f">
                            <textarea type="text" name="message" rows="8" cols="65" className="form-control is-invalid" id="floatingInputGroup5" placeholder="Message" required ></textarea>
                            {/* <label htmlFor="floatingInputGroup5">Message</label> */}
                        </div>
                        <div className="form-floating mt-4">
                         <button type="submit" className="btn btn-info w-25">Send</button>
                        </div>
                        
                    </div>
                </Form>
                  <div className="success mt-4" style={{display: successm ? "inline-block" : "none"}}>
                    <div className="alert alert-success" role="alert">
                        Thanks, Your message has been sent successfully.
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  {/* <figure> */}
                    <img
                    src="./contact.png"
                    alt="contact pic"
                    className="contact_image w-100"
                    />
                  {/* </figure> */}

                </div>
            </div>
        </section>
    )
}