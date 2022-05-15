import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppSnackBarComponent } from '../../components/app-snack-bar/app-snack-bar.component';
import { MatDialog } from '@angular/material/dialog';
import { AppDialogComponent } from '../../components/app-dialog/app-dialog.component';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ];

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''
  }

  constructor(private heroeService: HeroesService, 
              private activateRouter: ActivatedRoute, 
              private snackBar: MatSnackBar,
              private router: Router,
              public dialog: MatDialog) { }


  ngOnInit(): void {
    /* if(this.isEdit) {
      this.getHeroe();
    } */
    this.getHeroe();
  }

  addOrEdit() {
    if(this.heroe.superhero.trim().length === 0) {
      return;
    }

    if(!this.heroe.id) {
      this.heroeService.addHeroe(this.heroe).subscribe({
        next: (heroe) => {
          /* this.snackBar.openFromComponent(AppSnackBarComponent, {
            duration: 2500,
            data: {message: `${this.heroe.superhero} fue agregado con exito`}
          }); */
          this.message(`${this.heroe.superhero} fue agregado con exito`, 'snackBar-success')
          this.router.navigate(['/heroes/edit', heroe.id]);
        },
        error: (err) => console.log(err)
      });
    } else {
      this.heroeService.editHeroe(this.heroe).subscribe({
        next: () => {
          /* this.snackBar.openFromComponent(AppSnackBarComponent, {
            duration: 2500,
            data: {message: `El heroe fue actulaizado con exito`}
          }); */
          this.message(`El heroe fue actulaizado con exito`, 'snackBar-success');
        }
      })
    }

  }

  deleteHeroe(): void {

    const dialog = this.dialog.open(AppDialogComponent, {
      data: this.heroe
    });

    dialog.afterClosed().subscribe(
      (result) => {
        if(result) {
          this.heroeService.deleteHeroe(this.heroe.id).subscribe({
            next: () => {
              /* this.snackBar.openFromComponent(AppSnackBarComponent, {
                duration: 2500,
                data: {message: `${this.heroe.superhero} fue eliminado con exito`}
              }); */
              this.message(`${this.heroe.superhero} fue eliminado con exito`, 'snackBar-fail');
              this.router.navigate(['/heroes']);
            }
          });
        }
      }
    )
  }

  getHeroe(): void {

    if(!this.router.url.includes('edit')){
      return;
    }

    this.activateRouter.params 
      .pipe(
        switchMap(( { id } ) => this.heroeService.getHeroeById(id))
      )
      .subscribe({
        next: (heroe) => {
          this.heroe = heroe;
        },
        error: (err) => {console.log(err)}
      })
  }

  message(msg: string, styles: string): void {
    this.snackBar.open(msg, 'ok!', {
      duration: 5000,
      panelClass: [styles]
    });
  }

  /* get isEdit(): boolean {
    const path = [];

    this.activateRouter.url.forEach((value)=> {
      value.forEach((value)=>{
        path.push(value.path);
      })
    })
    return path[0] === "edit" ? true : false;
  } */

}
