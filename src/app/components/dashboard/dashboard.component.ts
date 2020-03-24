import { Component, OnInit } from '@angular/core';
import { Computers } from 'src/app/models/computers';
import { ComputersService } from 'src/app/services/computers.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  computers: Computers[];
  isLoading: boolean;
  constructor(private computersService: ComputersService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.computersService.getComputer().subscribe(data => {
      this.computers = data;
      this.isLoading = false;
    });
  }

}
