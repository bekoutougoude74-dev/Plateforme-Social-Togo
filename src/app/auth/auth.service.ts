import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private currentUserSubject = new BehaviorSubject<any>(null);
    public currentUser = this.currentUserSubject.asObservable();

    constructor() { }

    login(credentials: any): Observable<boolean> {
        // Mock login logic
        if (credentials.username === 'admin' && credentials.password === 'admin') {
            this.currentUserSubject.next({ username: 'admin', role: 'AGENT' });
            return of(true);
        }
        if (credentials.username === 'chef' && credentials.password === 'chef') {
            this.currentUserSubject.next({ username: 'chef', role: 'CHEF' });
            return of(true);
        }
        return of(false);
    }

    logout() {
        this.currentUserSubject.next(null);
    }

    isLoggedIn(): boolean {
        return !!this.currentUserSubject.value;
    }

    getRole(): string {
        return this.currentUserSubject.value?.role || '';
    }
}
