import Swal from "sweetalert2";

function Contactform() {


    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "4c8f78d4-774f-4b2e-a96b-853b7f85fe61");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
          });
      
          const data = await response.json();
    
        
        if (data.success) {
            Swal.fire({
                title: "Thank You!",
                text: "Your Email has been sent successfully",
                icon: "success"
        });
        event.target.reset();
      }
      else { 
        console.log("Error", data);
        

      };
    }

    return(
       <>
       <section className="contact">
        <form onSubmit={onSubmit}>
            <h2>Contact Form</h2>
            <div className="input-box">
                <label>Full Name</label>
                <input type="text" className="field" placeholder="Please Enter Name" required/>
                
            </div>
            <div className="input-box">
                <label>Email Address</label>
                <input type="email" className="field" placeholder="Please Enter Email" required/>
                
            </div>
            <div className="input-box">
                <label>Your Message</label>
                <textarea className="field-mess" name="" id="" placeholder="Enter Your Message Here" required></textarea>
                
            </div>
            <div>
                <button type="submit" className="sub-button">Send Message</button>
            </div>


        </form>
       </section>
       
       </>
    )
}

export default Contactform;