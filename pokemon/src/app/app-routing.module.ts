import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { OpponentComponent } from './opponent/opponent.component';
import { ResultComponent } from './result/result.component';
import { TrainerComponent } from './trainer/trainer.component';

const routes: Routes = [
  {path: "", component: NavComponent},
  {path: "opponent", component: OpponentComponent},
  {path: "result", component: ResultComponent},
  {path: "trainer", component: TrainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
