import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WarriorsComponent } from './warriors/app.warriors';
import { TeamComponent } from './Team/app.team';
import { ScheduleComponent } from './Schedule/app.schedule';
import { PracticeComponent } from './Practice/app.practice';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/warriors',
        pathMatch: 'full'
    },
    { path: 'warriors', component: WarriorsComponent },
    { path: 'team', component: TeamComponent },
    { path: 'schedule', component: ScheduleComponent },
    { path: 'practice', component: PracticeComponent },
    { path: '**', redirectTo: '/warriors', pathMatch: 'full' }
  ];

  @NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
