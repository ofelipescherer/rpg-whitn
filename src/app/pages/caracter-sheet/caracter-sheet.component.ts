import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pageInterface } from 'src/app/interfaces/pageInterface';
import { FirestoreServiceService } from 'src/app/services/firestore-service.service';
import { PageService } from 'src/app/services/page.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-caracter-sheet',
  templateUrl: './caracter-sheet.component.html',
  styleUrls: ['./caracter-sheet.component.scss'],
})
export class CaracterSheetComponent implements OnInit {
  data: pageInterface;
  listSheets: any;
  hasPage: boolean = false;
  savedData: pageInterface;
  sheetId: string;

  constructor(
    private route: ActivatedRoute,
    private pageService: PageService,
    private firestoreService: FirestoreServiceService,
    private snackbarService: SnackBarService
  ) {
    this.data = pageService.getDefaultData();
    this.route.params.subscribe((params) => (this.data.id = params.id));
  }

  getSheetList() {
    this.firestoreService.getCharacterSheetList(this.data).subscribe((elem: pageInterface) => {
      console.log(elem);
      if (elem && elem.id == this.data.id) {
        this.hasPage = true;
        this.savedData = elem;
      }
      if (!this.hasPage) {
        this.firestoreService.createCharacterSheet(this.data);
      } else {
        this.data = this.savedData;
        this.data.data.apresentation;
      }
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((val) => (this.sheetId = val.id));
    this.getSheetList();
  }
}
