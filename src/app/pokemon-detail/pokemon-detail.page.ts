import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './pokemon-detail.page.html',
  styleUrls: ['./pokemon-detail.page.scss'],
})
export class PokemonDetailPage implements OnInit {
  pokemon: any;
  name = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name')!;
    this.http.get(`https://pokeapi.co/api/v2/pokemon/${this.name}`)
      .subscribe(data => {
        this.pokemon = data;
      });
  }
  getPokemonTypes(): string {
  return this.pokemon?.types.map((t: any) => t.type.name).join(', ') ?? '';
}
}
