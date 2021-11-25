import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: Array<any>
  email: string;
  constructor(private http: HttpClient, private route: ActivatedRoute) {  }

  ngOnInit(): void {  
   this.http.get<any>("http://localhost:3001/signupUsers")
      .subscribe(res => {

        console.log(res)
                   this.profile = res

    })
      
  }
// getListValue(index: number, data: any) {      
//            this.list_value[index].active = !this.list_value[index].active
//        }
}
