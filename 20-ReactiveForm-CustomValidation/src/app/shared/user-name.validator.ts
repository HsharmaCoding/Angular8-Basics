import { AbstractControl, Validator, ValidatorFn } from "@angular/forms";
import { Key } from 'protractor';
import { from } from 'rxjs';

// export function forbiddenNameValidator(control:AbstractControl):{[Key:string]:any}{
//     const forbidden=/admin/.test(control.value);
//     return forbidden ? {'forbiddenName': {value : control.value}} : null;
// }

//Factory pattern. Common method to say ...hey this user name is not allowed. for example admin user name is not allowed.
//Matching paraneter will be passing from where this method will be calling.
//If the the matching parameter is available then it will say this user name is not allowed
//We can say this is factory function/method
export function forbiddenNameValidator(forbiddenName: RegExp): ValidatorFn{
   return (control:AbstractControl):{[Key:string]:any} | null => {
        const forbidden=forbiddenName.test(control.value);
        return forbidden ? {'forbiddenName': {value : control.value}} : null;
    }
}