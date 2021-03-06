import { Injectable } from '@angular/core';
import { characterSheetDataInterface } from '../interfaces/characterSheetDataInterface';
import { hex3Interface } from '../interfaces/hexInterface';

@Injectable({
  providedIn: 'root',
})
export class PageService {
  id: string;

  stats: hex3Interface[] = [
    { type: 'life', title: 'Vida', description: '', rightNumber: 0, result: 0 },
    { type: 'stability', title: 'Estabilidade', description: '', rightNumber: 0, result: 0 },
    { type: 'armor', title: 'Armadura', description: '', rightNumber: 0, result: 0 },
    { type: 'damage', title: 'Dano', description: '', rightNumber: 0, result: 0 },
  ];

  data: characterSheetDataInterface = {
    apresentation: {
      name: '',
      motivation: '',
      age: '',
      photo: '',
    },
    gameplayCharacteristics: {
      currentlyEffects: {
        effects: [
          {
            state: false,
            color: 'orange',
            title: 'Bleeding',
            tooltip: 'Cuidado para não pegar uma infecção. Você perde 1 de vida a cada rodada',
          },
          {
            state: false,
            color: 'orange',
            title: 'Damaged',
            tooltip: 'Seu machucado está atrapalhando. Seu movimento é reduzido pela metade',
          },
          {
            state: false,
            color: 'red',
            title: 'Frightened',
            tooltip: 'Você está aterrorizado. Seu poder é diminuido pela metade',
          },
          {
            state: false,
            color: 'red',
            title: 'Weakened',
            tooltip: 'Você não está no seu melhor momento. Seus atributos são diminuidos pela metade',
          },
          {
            state: false,
            color: 'red',
            title: 'Unconscious',
            tooltip:
              'Você não tem ações disponíveis. Você precisa jogar um teste de constituição a cada rodada para acordar',
          },
          {
            state: false,
            color: 'red',
            title: 'Broken',
            tooltip:
              'Você está quase morrendo(Fisico ou mental). Você precisa fazer teste de poder a cada rodada para não morrer',
          },
          {
            state: false,
            color: 'blue',
            title: 'Frenzy',
            tooltip:
              'Algo está estranho, você se sente mais forte. Seu poder é aumentado em 25%. E inciativa tem prioridade',
          },
          {
            state: false,
            color: 'blue',
            title: 'Adrenaline',
            tooltip:
              'Algo está estranho, você se sente mais confiante. Sua destreza é aumentadA em 25%. E seu movimento é aumentado em 3',
          },
          {
            state: false,
            color: 'purple',
            title: 'Lucky',
            tooltip: 'Você está com sorte. As 4 próximas jogadas de dado serão com vantagem',
          },
          {
            state: false,
            color: 'purple',
            title: 'Keen',
            tooltip: 'Você está em seu atento. Você tem mais chances de encontrar coisas',
          },
        ],
        stats: [
          { title: 'Vida atual', description: '', value: 0 },
          { title: 'Estabilidade atual', description: '', value: 0 },
        ],
      },
      stats: this.stats,
    },
    attributes: {
      FOR: { title: 'Força', value: 0, description: 'Sua capacidade de carregar peso e socar alguém' },
      DES: { title: 'Destreza', value: 0, description: '' },
      CON: { title: 'Constituição', value: 0, description: '' },
      POR: { title: 'Porte', value: 0, description: '' },
      INT: { title: 'Inteligência', value: 0, description: '' },
      SAB: { title: 'Sabedoria', value: 0, description: '' },
      CAR: { title: 'Carisma', value: 0, description: '' },
      POD: { title: 'Poder', value: 0, description: '' },
    },
    specialAttributes: [
      { type: 'movement', title: 'Movimento', description: '', rightNumber: 0, result: 0 },
      { type: 'iniciative', title: 'Iniciativa', description: '', rightNumber: 0, result: 0 },
    ],
    secondaryAttributes: [
      { type: 'athletics', title: 'Atletismo', description: '', modifier: 0, result: 0 },
      { type: 'perception', title: 'Percepção', description: '', modifier: 0, result: 0 },
      { type: 'intimidation', title: 'Intimidação', description: '', modifier: 0, result: 0 },
      { type: 'bravery', title: 'Bravura', description: '', modifier: 0, result: 0 },
      { type: 'medicine', title: 'Medicina', description: '', modifier: 0, result: 0 },
      { type: 'survivalist', title: 'Sobrevivência', description: '', modifier: 0, result: 0 },
      { type: 'furtivity', title: 'Furtividade', description: '', modifier: 0, result: 0 },
      { type: 'therapy', title: 'Terapia', description: '', modifier: 0, result: 0 },
      { type: 'eletromechanics', title: 'Eletromecânica', description: '', modifier: 0, result: 0 },
      { type: 'luck', title: 'Sorte', description: '', modifier: 0, result: 0 },
    ],
    stability: {
      stabilitySources: [],
      stabilityEffects: [],
    },
    weapons: [],
    inventory: {
      inventory: '',
    },
    textAreas: {
      annotations: '',
      history: '',
    },
    template: {
      faId: -1,
      class: 0,
    },
  };

  defaultData = {
    data: this.data,
    id: '',
  };

  constructor() {}

  getDefaultData() {
    return this.defaultData;
  }

  setDefaultData(newData: any): void {
    this.defaultData = newData;
  }
}
