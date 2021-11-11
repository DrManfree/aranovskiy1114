import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/shared/interfaces/student';
import { StudentService } from 'src/app/shared/student.service';

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.css']
})
export class StudentItemComponent implements OnInit {
  id: number | null = null;
  student!: Student;
  studentForm!: FormGroup;
  constructor(private studentService: StudentService, private fb: FormBuilder, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params => {
      this.id = params.id ? +params.id : null;
      this.getData();
    });
  }

  async getData() {
    const controls = {
      surname: [null, [Validators.required, Validators.maxLength(100)]],
      name: [null, [Validators.required, Validators.maxLength(100)]],
      midname: [null, [Validators.maxLength(100)]],
      phone: [null, [Validators.required, Validators.maxLength(500)]],
      mail: [null, [Validators.required, Validators.maxLength(100)]],
      birthdate: [null, [Validators.required, Validators.maxLength(100)]],
      group: [null, [Validators.required, Validators.maxLength(100)]],
      speciality: [null, [Validators.required, Validators.maxLength(100)]]
    };

    this.studentForm = this.fb.group(controls);
    if (this.id) {
      try {
        this.student = await this.studentService.getStudent(this.id);
      } catch (error) {
        console.log(error);
        return;
      }
      this.studentForm.patchValue(this.student);
    }
    else {
      this.studentForm.reset();
    }
  }

  async save() {
    if (this.id) {
      let student = this.studentForm.value;
      try {
        await this.studentService.putStudent(this.id, student);
        this.getData();
      }
      catch (error) {
       console.log(error);
      }
    } 
    else {
      let student = this.studentForm.value;
      try {
        const result = await this.studentService.postStudent(student);
        this.router.navigate([this.router.url, result.id]);
      }
      catch (error) {
       console.log(error);
      }
    }
  }

  async delete() {
    try {
      await this.studentService.deleteStudent(this.id!);
      this.router.navigate(['student']);
    } catch (error) {
      console.log(error);
    }
  }
}
