import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  get isLoading() {
    return this.loadingService['_pendingRequests'];
  }

  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder, private loadingService : LoadingBarService, private toastr: ToastrService) { }

  form: FormGroup;
  submitted = false;

  // model = {
  //   username: '',
  //   password: ''
  // };
  //emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;

  ngOnInit() {
    if (this.userService.isLoggedIn())
      this.router.navigateByUrl('/home');

    this.form = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      _remember_me: ['']
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }




  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      // console.log("form invalid !");
      return;
    } else {
      this.userService.login(this.form.value).subscribe(
        res => {
          this.userService.setToken(res['token']);
          this.router.navigateByUrl('/home');
          //{"id":62,"iat":1554661655,"exp":1554665255,"roles":["ROLE_ADMIN"],"username":"admin"}
          let username = this.userService.getUserPayload1().username; 
          this.toastr.success(username, 'Logged in as', { timeOut: 5000 , closeButton: true});
        },
        err => {
          this.serverErrorMessages = err.error.message;
        }
      );
    }
  }

}
