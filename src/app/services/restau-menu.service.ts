import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, tap, throwError} from "rxjs";
import {IMenuItem} from "../models/menu";

@Injectable({
  providedIn: 'root'
})
export class RestauMenuService {
  private readonly MENU_API_URL = 'api/menu-item.json'
  private readonly SOUS_MENU_API_URL = 'api/sous-menu.json'


  constructor(private http : HttpClient) { }

  getListMenus(): Observable<IMenuItem[]>{
    return this.http.get<IMenuItem[]>(this.MENU_API_URL).pipe(
      tap(menu => console.log("Liste des menus: ", menu)),
      catchError(this.handleError)
    )
  }

  getListSousMenus(): Observable<IMenuItem[]>{
    return this.http.get<IMenuItem[]>(this.SOUS_MENU_API_URL).pipe(
      tap(menu => console.log("Liste des sous menus: ", menu)),
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
