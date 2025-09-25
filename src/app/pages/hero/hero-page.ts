import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component({
    templateUrl: './hero-page.html',
    imports: [ UpperCasePipe ]
})
export class HeroPage {

    
    name = signal('Ironman');
    age = signal(45);

    /*getHeroDescription(): string {
        return `${this.name()} - ${this.age()}`;
    }*/
    heroDescription = computed(() => {
        const description = `${this.name()} - ${this.age()}`;
        return description;
    });


    capitalizedName = computed(() => this.name().toUpperCase());

    changeHero(): void {
        this.name.set('Spiderman');
        this.age.set(22);
    }
 
    resetForm(): void {
        this.name.set('Ironman');
        this.age.set(45);
    }

    changeEdge(): void {
        this.age.set(60);
    }
}