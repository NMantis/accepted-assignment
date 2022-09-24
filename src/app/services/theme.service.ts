import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {

    constructor() {
        if (!localStorage.getItem('darkMode'))
            this.disable();

        if (this.darkModeEnabled) {
            this.enable();
        }
    }

    toggle() {
        if (!this.darkModeEnabled) {
            this.enable();
        }
        else {
            this.disable();
        }
    }

    private enable() {
        document.body.classList.add('darkMode');
        localStorage.setItem('darkMode', 'enabled');
    }

    private disable() {
        document.body.classList.remove('darkMode');
        localStorage.setItem('darkMode', 'disabled');
    }

    get darkModeEnabled(): boolean {
        return localStorage.getItem('darkMode') == 'enabled';
    }
}
