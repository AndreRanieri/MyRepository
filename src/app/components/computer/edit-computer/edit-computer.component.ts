import { Component, OnInit } from '@angular/core';
import { ComputersService } from 'src/app/services/computers.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Computers } from 'src/app/models/computers';

@Component({
  selector: 'app-edit-computer',
  templateUrl: './computer/edit-computer.component.html',
  styleUrls: ['./computer/edit-computer.component.css']
})
export class EditComputerComponent implements OnInit {

  computerForm: Computers;

  brandDispo: string[];
  typeComputerDispo: string[];
  categoryDispo: string[];


  constructor(private activatedRoute: ActivatedRoute, private computerService: ComputersService, private router: Router) { }

  ngOnInit(): void {
    this.brandDispo = this.computerService.brandDispo;
    this.typeComputerDispo = this.computerService.typeComputerDispo;
    this.categoryDispo = this.computerService.categoryDispo;

    this.computerService.getComputerById(+this.activatedRoute.snapshot.paramMap.get('id'))
      .subscribe(data => {
        this.computerForm = data;
      });
  }
  editComputer() {
    this.computerService.editComputer(this.computerForm).subscribe((data) => {
      this.router.navigate(['/computers']);

    });
  }

}
