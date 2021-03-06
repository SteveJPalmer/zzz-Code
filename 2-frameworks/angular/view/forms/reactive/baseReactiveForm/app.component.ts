import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';              //(if required)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'baseReactiveApp';

  constructor(private formBuilder: FormBuilder) {}			  // inject FormBuilder service (if required)

  /* Create Form Model objs */
  /* via native FormGroup constructor */
  loginForm = new FormGroup({  				          // pass in obj containing all the FormControl instances		Note: quite a mass of code
    username: new FormControl(),
    password: new FormControl(),
    otherField: new FormControl(true)   	      // can pass default value & validation rules
  });
  /* or via FormBuilder service */
  loginForm2 = this.formBuilder.group({     //create instance of form  - no need to manually create FormControl() instances
    username: 'S',
    password: 'blar',
    otherField: true																	  // can set default values (via value, expression or empty string ‘’)
  });


  onSubmit(myForm: any) {
    /* can use the stored comp model (Think: same as myForm.form below) */
    console.log(this.loginForm);                // (obj) holds the FormGroup instance
    console.log(this.loginForm.value);          // (obj) contains values of all forms control values
    console.log(this.loginForm2);                // (obj) holds the FormGroup instance
    console.log(this.loginForm2.value);          // (obj) contains values of all forms control values

    /* or can still pass in temp ref var (like template form) */
    console.log(myForm.value);									// (obj) direct access - contains values of all forms control values (JSON.stringify for readability)
    console.log(myForm.valid); 									// (true/false) direct access to form status (one of duplicated props)
    //
    console.log(myForm);
    console.log(myForm.form);	 	 							  // (obj) holds the FormGroup instance & nested FormControl instances ( type FormGroup)
    console.log(myForm.form.value);						  // (obj) contains values of all forms control values (JSON.stringify for readability)
    console.log(myForm.form.controls);	 	 	    // (obj) nested FormControl instances (each of type FormControl)
    console.log(myForm.form.valid);	            // the FormGroup instance, valid prop (form level)

    }

}
