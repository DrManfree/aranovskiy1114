import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/shared/interfaces/student';
import { StudentService } from 'src/app/shared/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students!: Student[];
  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    try {
      this.students = await this.studentService.getStudents() || [];
    } catch (error) {
      console.log(error);
    }
  }

  linkToItem(id?: number) {
    if (id) {
      this.router.navigate([this.router.url, 'item', id]);
    }
    else {
      this.router.navigate([this.router.url, 'item']);
    }
  }
}
