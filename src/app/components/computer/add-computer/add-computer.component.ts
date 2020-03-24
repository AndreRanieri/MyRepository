import { Component, OnInit } from '@angular/core';
import { Computers } from 'src/app/models/computers';
import { ComputersService } from 'src/app/services/computers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-computer',
  templateUrl: './computer/add-computer.component.html',
  styleUrls: ['./computer/add-computer.component.css']
})
export class AddComputerComponent implements OnInit {
  computerForm: Computers;

  brandDispo: string[];
  typeComputerDispo: string[];
  categoryDispo: string[];
  constructor(private computerService: ComputersService, private router: Router) { }

  ngOnInit(): void {
    this.brandDispo = this.computerService.brandDispo;
    this.typeComputerDispo = this.computerService.typeComputerDispo;
    this.categoryDispo = this.computerService.categoryDispo;
    this.computerForm = new Computers();
  }

  addComputer() {
    this.computerService.addComputer(this.computerForm).subscribe(data => {
      this.router.navigate(['/computers']);
    });
  }

}
