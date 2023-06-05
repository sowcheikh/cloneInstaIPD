import { Component } from '@angular/core';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.scss']
})
export class SuggestionComponent {
  suggestions = [
    {
      id:1, name: 'bill_the_programmer.js', image: 'assets/images/userdata/rebatov_photo1.jpg', suivi_par: 'cheikh', nbrSuivi: 5
    },
    {
      id:2, name: 'eva_fashion', image: 'assets/images/userdata/pooza_singh91_photo1.jpg', suivi_par: 'evish', nbrSuivi: 9
    },
    {
      id:3, name: 'rangou_ther', image: 'assets/images/userdata/elna_stha_photo1.jpg', suivi_par: 'yokademi', nbrSuivi: 11
    }
  ]

}
