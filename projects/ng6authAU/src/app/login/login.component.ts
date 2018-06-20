import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder, REACTIVE_FORM_DIRECTIVES} from '@angular/forms';
// import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from "./../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) {

      this.form = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      });
    }

    login() {
      const val = this.form.value;

      if (val.email && val.password) {
        this.authService.login(val.email, val.password)
        .subscribe(
          () => {
            console.log('User is logged in');
            this.router.navigateByUrl('/');
          }
        );
      }
    }
  }
