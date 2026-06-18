import { Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;

    readonly emailField;
readonly passwordField;
readonly signInButton;
    constructor(Page: Page){
        this.page=Page;

        
       this.emailField=this.page.getByLabel('Email');
     this.passwordField=this.page.getByLabel('password')
     this.signInButton=this.page.getByRole('button',{name:'Sign in'});

        
    }
 async goto(){
    await this.page.goto('https://whenwise.agileway.net/sign-in')
 }
    async login(email: string, password: string){
            await this.emailField.fill(email);
            await this.passwordField.fill(password);
            await this.signInButton.click();   
    }
}