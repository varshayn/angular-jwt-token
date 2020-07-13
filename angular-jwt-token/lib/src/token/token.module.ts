import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenComponent } from './token.component';
import { TokenService } from './token.service';

@NgModule({
    imports: [CommonModule],
    declarations: [TokenComponent],
    exports: [TokenComponent]
})
export class TokenModule {
    public static forRoot(configOptions): ModuleWithProviders {
        return {
            ngModule: TokenModule,
            providers: [TokenService,
                { provide: 'configOptions', useValue: configOptions }],
        };
    }
}