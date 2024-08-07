import { Injectable } from '@angular/core';
import {HEROES} from './mock-heroes'
import { Hero } from './hero.model';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private MessageService: MessageService){}

  getHeroes():Observable<Hero[]>{
    const heroes= of(HEROES);
    this.MessageService.add('HeroService: fetched heroes');
    return heroes
  }
}
