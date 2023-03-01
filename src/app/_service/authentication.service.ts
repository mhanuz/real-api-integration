import { Router } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "../_models/user";
import { HttpClient} from "@angular/common/http"


export class AuthenticationService {
    private userSubject: BehaviorSubject<User |null>
    public user: Observable<User | null>;

    constructor(
      private router: Router,
      private http: HttpClient
    ) {
      this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
      this.user = this.userSubject.asObservable();
    }

    public get userValue(){
        return  
    }
}