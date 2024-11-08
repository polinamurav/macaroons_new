import { Component } from '@angular/core';
import {AdvantageType} from "./types/advantage.type";
import {MacaroonType} from "./types/macaroon.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public advantages: AdvantageType[] = [
    {
      title: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      title: 'Много вкусов',
      description: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      title: 'Бисквитное тесто',
      description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      title: 'Честный продукт',
      description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    },
  ];

  public macaroons: MacaroonType[] = [
    {
      image: '1.png',
      title: 'Макарун с малиной',
      amount: '1 шт.',
      price: '1,70 руб.',
    },
    {
      image: '2.png',
      title: 'Макарун с манго',
      amount: '1 шт.',
      price: '1,70 руб.',
    },
    {
      image: '3.png',
      title: 'Пирог с ванилью',
      amount: '1 шт.',
      price: '1,70 руб.',
    },
    {
      image: '4.png',
      title: 'Пирог с фисташками',
      amount: '1 шт.',
      price: '1,70 руб.',
    },
  ];

  public formValues = {
    macaroonTitle: '',
    name: '',
    phone: '',
  }

  public showPresent: boolean = true;
  public phoneNumber: string = '+375 (29) 368-98-68';
  public linkInsta: string = 'https://instagram.com/';

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth" });
  }

  public addToCart(macaroon: MacaroonType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.macaroonTitle = macaroon.title.toUpperCase();
  }

  public isMenuOpen: boolean = false;
  public mobileMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
