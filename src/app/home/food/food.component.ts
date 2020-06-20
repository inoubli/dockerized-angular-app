import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FoodService, CategoryService } from 'src/app/core/services';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  foodForm: FormGroup;

  name: FormControl;
  legend: FormControl;
  selected_score: FormControl;
  deselected_score: FormControl;
  description: FormControl;
  image_url: FormControl;
  category_id: FormControl;

  categories: any;
  scores = [0,1,2,3,4,5,6,7,8,9,10];
  SELECT_DEFAULT_VALUE = 0;
  DSELECTED_DEFAULT_VALUE = 0;
  file : File;

  constructor(private foodService: FoodService, private categoryService: CategoryService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.initDdCategories();
    this.createFormControls();
    this.createForm();
  }

  /**
   * Initialize DropDownList with categories
   */
  initDdCategories() {
    this.categoryService.getDdCategories().subscribe(
      (data) => { 
        this.categories = data;      },
      err => { 
        alert(err['message']);
      });
  }

  createFormControls(){
      this.name = new FormControl('', [Validators.required,Validators.minLength(3)]);
      this.legend = new FormControl('',[Validators.minLength(3)]);
      this.selected_score = new FormControl('');
      this.deselected_score = new FormControl('');
      this.description = new FormControl('',[Validators.required,Validators.minLength(5)]);
      this.image_url = new FormControl('',Validators.required);
      this.category_id = new FormControl('',Validators.required);
  }

  createForm() {
    this.foodForm = new FormGroup({
      name: this.name,
      legend: this.legend,
      selected_score: this.selected_score,
      deselected_score: this.deselected_score,
      description: this.description,
      image_url: this.image_url,
      category_id: this.category_id      
    });
  }

  onFileSelected(event) {
    if(event.target.files.length > 0) 
     {
        this.foodForm.patchValue({
          image_url: event.target.files[0].name
        });
        this.file = event.target.files[0];
     }
   }

  /**
   * Save new food
   */
  submit(){
    this.foodService.create(this.foodForm.value, this.file).subscribe(
      (data) => { 
        this.toastr.success('Successfuly created', `Food ${data.name}`, { timeOut: 5000 , closeButton: true});      
        this.foodForm.reset();
      },
      err => { 
        this.toastr.error(err['message'], 'Error occured', { timeOut: 10000 , closeButton: true});
      });
  }

}
