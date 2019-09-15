import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthGuardService as AuthGuard } from './core/services/auth-guard.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AddUserComponent } from "./components/add-user/add-user.component";
import { ListUserComponent } from "./components/list-user/list-user.component";
import { EditUserComponent } from "./components/edit-user/edit-user.component";
import { ChatComponent } from './components/chat/chat.component';

export const ROUTES: Routes = [
  { path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { 
    path: 'login', 
    component: LoginComponent

  },
  { 
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard] 
  },
  { 
    path: 'login',
    component: LoginComponent 
  },
  { 
    path: 'add-user', 
    component: AddUserComponent 
  },
  {
    path: 'list-user', 
    component: ListUserComponent 
  },
  { 
    path: 'edit-user',
    component: EditUserComponent 
  },
  { 
    path: 'chat',
    component: ChatComponent 
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule { }



