import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { patterns } from 'src/assets/regex/schemas';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  constructor() {}
  private broadcastStrength = new BehaviorSubject<string>('');
  passwordStrength$ = this.broadcastStrength.asObservable();

  matchPassword(password: string): any {
    for (let key in patterns) {
      if (patterns[key as keyof typeof patterns].test(password)) {
        this.broadcastStrength.next(this.ratePassword(key));
      }
    }
  }

  ratePassword(strength: any): string {
    let string;
    if (strength === 'strong') {
      string = 'strong';
    } else if (strength.includes('medium')) {
      string = 'medium';
    } else {
      string = 'easy';
    }
    return string;
  }
}
