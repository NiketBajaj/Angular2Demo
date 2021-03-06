import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { TestModule } from './test.module';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EventBindingComponent } from './eventBinding/event.component';
import { EmployeeListComponent } from './employee/employeeList.component';
import { EmployeeTitlePipe } from './employee/employeeTitle.pipe';
import { EmployeeCountComponent } from './employee/employeeCount.component';
import { SimpleComponent } from './Others/simple.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './Others/pageNotFound.component';
import { CSSEventComponent } from './CSSEvent/CSSEvent.component';

import { EmployeeService } from './employee/employee.service';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'employeeslist', component: EmployeeListComponent },
    { path: 'employees', component: EmployeeComponent },
    { path: 'event', component: EventBindingComponent },
    { path: 'cssevent', component: CSSEventComponent },
    { path: 'employeeslist/:code', component: EmployeeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
]

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        TestModule], //, { useHash: true }
    declarations: [
        AppComponent, EmployeeComponent, EventBindingComponent, EmployeeListComponent,
        EmployeeTitlePipe, EmployeeCountComponent, SimpleComponent,
        HomeComponent, PageNotFoundComponent, CSSEventComponent],
    bootstrap: [AppComponent],
    providers: [EmployeeService]
})
export class AppModule { }
