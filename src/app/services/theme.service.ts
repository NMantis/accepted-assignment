import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private renderer: Renderer2;

    constructor(
        @Inject(DOCUMENT) private document: Document,
        private rendererFactory: RendererFactory2
    ) {
        this.renderer = rendererFactory.createRenderer(null, null);
        
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
        this.renderer.setAttribute(this.document.body, 'class', 'darkMode');
        localStorage.setItem('darkMode', 'enabled');
    }

    private disable() {
        this.renderer.setAttribute(this.document.body, 'class', '');
        localStorage.setItem('darkMode', 'disabled');
    }

    get darkModeEnabled(): boolean {
        return localStorage.getItem('darkMode') == 'enabled';
    }
}
