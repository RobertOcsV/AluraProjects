import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.scss']
})
export class DropdownUfComponent {
  @Input() label: string = '';
  @Input() prefixIcon: string = '';
  filteredOptions = []
}
