import { Component } from '@angular/core';
import { UsersService } from '../../shared/service/users.service';
import { UsersResponse } from '../../shared/models/UsersResponse';
import { catchError, finalize, of, tap } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

  public usuarios!:UsersResponse

  constructor(private usersService:UsersService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.generarData()
  }

  generarData(){
    this.usersService.consultarUsuarios().pipe(
      tap((data) => {
      }),
      catchError((err) => {
        console.error("Error ", err)
        return of(null)
      }),
      finalize(() => console.log("Se finalizo"))
    )
  }
}
