import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // Données posts
  data = [
    {
      post: {
        image: 'http://worldaholic.fr/wp-content/uploads/2015/12/paysages-du-danube-serbie.jpg',
        title: 'Pont',
        content: 'Un paysage est une vue d\'une portion de l\'espace terrestre, représentée ou observée dans la majorité des cas à l\'horizontale et photographiquement par un observateur.',
        loveIts: '0',
        created_at: 'Sun Mar 25 2018 23:25:22 GMT+0200 (CEST)'
      }
    },
    {
      post: {
        image: 'https://i1.wp.com/olivierdouard.com/wp-content/uploads/2017/05/paysage-arrentiere-min-min.jpg',
        title: 'Rivière',
        content: 'Un paysage est une vue d\'une portion de l\'espace terrestre, représentée ou observée dans la majorité des cas à l\'horizontale et photographiquement par un observateur.',
        loveIts: '0',
        created_at: 'Sun Mar 25 2018 23:25:22 GMT+0200 (CEST)'
      }
    },
    {
      post: {
        image: 'https://favogram.com/wp-content/uploads/2015/11/8e67Foggy-Wonderlands-norway-1.jpg',
        title: 'Paysage',
        content: 'Un paysage est une vue d\'une portion de l\'espace terrestre, représentée ou observée dans la majorité des cas à l\'horizontale et photographiquement par un observateur.',
        loveIts: '0',
        created_at: 'Sun Mar 25 2018 23:25:22 GMT+0200 (CEST)'
      }
    },
    {
      post: {
        image: 'https://i1.wp.com/supertrampontheroad.com/wp-content/uploads/2017/02/DSC_3793-1-2.jpg',
        title: 'Montagne',
        content: 'SUn paysage est une vue d\'une portion de l\'espace terrestre, représentée ou observée dans la majorité des cas à l\'horizontale et photographiquement par un observateur.',
        loveIts: '0',
        created_at: 'Sun Mar 25 2018 23:25:22 GMT+0200 (CEST)'
      }
    },
    {
      post: {
        image: 'https://haruharu.fr/wp-content/uploads/2016/11/coree-automne-paysage-1200x625.jpg',
        title: 'Montagne',
        content: 'Un paysage est une vue d\'une portion de l\'espace terrestre, représentée ou observée dans la majorité des cas à l\'horizontale et photographiquement par un observateur.',
        loveIts: '0',
        created_at: 'Sun Mar 25 2018 23:25:22 GMT+0200 (CEST)'
      }
    },
  ];
}
