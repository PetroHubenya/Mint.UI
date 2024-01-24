import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ConfigService {

  apiUrl: string = "https://localhost:7113";

  constructor() { }
}
