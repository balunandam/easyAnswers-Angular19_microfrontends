import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import OpenAI from 'openai';
import { environment } from '../../../../../environment';

@Injectable({
    providedIn: 'root'
})
export class OpenaiService {

    private openai: OpenAI;

    constructor() {
        this.openai = new OpenAI({
            apiKey: '', // Replace with your API key
            dangerouslyAllowBrowser: true,
        });
    }

    generateText(prompt: string): Observable<any> {
        return new Observable((observer) => {
            this.openai.chat.completions.create({
                messages: [{ role: 'user', content: prompt }],
                model: 'gpt-3.5-turbo',
                stream: true,
            }).then((response: any) => {
                for (const chunk of response) {
                    observer.next(chunk);
                }
                observer.complete();
            }).catch(error => {
                observer.error(error);
            });
        });
    }
}
