import React from "react";
import Swal from 'sweetalert2';
import './contacto.css';


const Contacto = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "c9d6393a-e91f-4a6b-a031-b48ceaab7cbf");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Genial!",
                text: "Mensaje enviado con éxito!",
                icon: "success",
              });
        }
      };
    
    return(
<section className="contact">
    <form onSubmit={onSubmit}  action="">
<h2>
    Ponete en contacto con nosotros!
</h2>
<h3>
    Completá él formulario y te responderemos a la brevedad
</h3>
<div className="input-box">
<label >Nombre completo</label>
<input type="text" className="field" name="name" required />
</div>
<div className="input-box">
<label >Email</label>
<input type="email" className="field" name="email" required/>
</div>
<div className="input-box">
<label >Tu mensaje</label>
<textarea name="message" id="" type="text" className="field mess" placeholder="Escribe tu mensaje" required> </textarea>
</div>
<button type="submit"> Enviar</button>
    </form>

</section>
 
    )
}

export default Contacto;