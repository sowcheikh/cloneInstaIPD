import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  stories = [
    {
      id:1,
      image: 'assets/images/userdata/sarojsh01_photo2.jpg',
      pseudo: 'Fatima'
    },
    {
      id:2,
      image: 'assets/images/userdata/_thehasinaaykahs__photo1.jpg',
      pseudo: 'Maina'
    },
    {
      id:3,
      image: 'assets/images/userdata/elna_stha_photo1.jpg',
      pseudo: 'Evish'
    },
    {
      id:4,
      image: 'assets/images/userdata/paraskhadka77_profilephoto.jpg',
      pseudo: 'Van'
    },
    {
      id:5,
      image: 'assets/images/userdata/pooza_singh91_photo1.jpg',
      pseudo: 'Abdoul_niang'
    },
    {
      id:6,
      image: 'assets/images/userdata/shrinkhala__profilephoto.jpg',
      pseudo: 'Yokademi'
    }
  ]
  constructor() { }
  getStories() {
    return this.stories;
  }
}
