import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Student } from './interfaces/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getStudents() : Promise<Student[]> {
    return this.http.get<Student[]>(`${environment.apiUrl}/students`).toPromise();
  }

  getStudent(id : number) : Promise<Student> {
    return this.http.get<Student>(`${environment.apiUrl}/students/${id}`).toPromise();
  }

  postStudent(data: Student) : Promise<Student> {
    return this.http.post<Student>(`${environment.apiUrl}/students`, data).toPromise();
  }

  putStudent(id : number, data: Student) : Promise<Student> {
    return this.http.put<Student>(`${environment.apiUrl}/students/${id}`, data).toPromise();
  }

  deleteStudent(id: number) : Promise<Student> {
    return this.http.delete<Student>(`${environment.apiUrl}/students/${id}`).toPromise();
  }
}