﻿import { Injectable } from '@angular/core';

@Injectable()
export class UserPreferencesService {

    constructor() {
        console.log("New Instance of Service created");
    }

    colourPreference: string = 'orange';
}