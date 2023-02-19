import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Observable, Subscription, tap } from 'rxjs';
import { PasswordService } from 'src/app/services/password.service';

@Component({
  selector: 'app-password-validator',
  templateUrl: './password-validator.component.html',
  styleUrls: ['./password-validator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordValidatorComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  passwordSub!: Subscription;
  indicator!: string;

  @ViewChild('input') input!: ElementRef;
  @ViewChild('sect1') sect1!: ElementRef;
  @ViewChild('sect2') sect2!: ElementRef;
  @ViewChild('sect3') sect3!: ElementRef;

  constructor(private validate: PasswordService) {}

  ngOnInit(): void {
    this.passwordSub = this.validate.passwordStrength$
      .pipe(
        tap((el) => {
          this.indicator = el;
        })
      )
      .subscribe();
  }

  processUserInput() {
    if (this.input.nativeElement.value.length === 0) {
      this.indicator = 'void';
    }
    const password = this.input.nativeElement.value.trim();
    if (password.length > 0 && password.length < 8) {
      this.indicator = 'short';
    }
    this.validate.matchPassword(password);
  }

  ngOnDestroy(): void {
    this.passwordSub.unsubscribe();
  }
  ngAfterViewInit() {}
}
