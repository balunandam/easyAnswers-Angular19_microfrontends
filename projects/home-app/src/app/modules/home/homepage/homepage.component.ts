import { Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
    import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'app-homepage',
  standalone: false,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit{
  @ViewChild('remoteContainer', { read: ViewContainerRef, static: true })
      remoteContainer!: ViewContainerRef;
      async ngOnInit(): Promise<void> {
        await this.loadRemoteComponent();
      }

      
      async loadRemoteComponent(): Promise<void> {
        const remoteModule = await loadRemoteModule({
          type: 'module',
          remoteEntry: 'http://localhost:4203/remoteEntry.js',
          exposedModule: './Component',
        });

        this.remoteContainer.createComponent(remoteModule.AppComponent);
      }
}
