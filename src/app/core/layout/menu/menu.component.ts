import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  constructor(private userService: UserService,private router : Router, private toastr: ToastrService) { }

  get isLoggedIn() { return this.userService.isLoggedIn(); }
  ngOnInit(): void {

  }

  logout(){
    this.userService.deleteToken();
    this.router.navigateByUrl('/security');
    // this.toastr.info('Déconnexion réussi', 'Déconnexion', { positionClass:'toast-top-center' });
    this.toastr.info('Successfully logged out','Logged out',{ timeOut: 10000 , closeButton: true});
  }

  

}
