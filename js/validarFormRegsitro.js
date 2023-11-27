class ValidadorFormulario{
    constructor(idFormulario){
        this.form = document.getElementById(idFormulario);
        this.nombre = document.getElementById("nombre");
        this.email = document.getElementById("email");
        this.password = document.getElementById("password");


        // seleccionar el mensaje de error
        this.nombreError = document.getElementById("nombreError");
        this.emailError = document.getElementById("emailError");
        this.passwordError = document.getElementById("passwordError");


        this.form.addEventListener("submit", (event) => {
            event.preventDefault();

            if(this.validarFormulario()){
                console.log("formulario enviado")

            }
        })
    }

    validarFormulario(){
        let valid = true;

          // Validación del nombre
          if(this.nombre.value === ""){
            this.nombreError.textContent = "El nombre es obligatorio";
            this.nombre.classList.add("error-input");
            valid = false;
        } else {
            this.nombreError.textContent = "";
            this.nombre.classList.remove("error-input");
        }
    
        // Validación del email
        if(this.email.value === ""){
            this.emailError.textContent = "El email es obligatorio";
            this.email.classList.add("error-input");
            valid = false;
        } else {
            this.emailError.textContent = "";
            this.email.classList.remove("error-input");
        }
    
        // Validación de la contraseña
        if(this.password.value === ""){
            this.passwordError.textContent = "La contraseña es obligatoria";
            this.password.classList.add("error-input");
            valid = false;
        } else {
            this.passwordError.textContent = "";
            this.password.classList.remove("error-input");
        }
    
        return valid;
    }
    
    }

    document.addEventListener('DOMContentLoaded', function () {
        const formularioRegistro = new ValidadorFormulario("formulario-registro");
        
    });
    