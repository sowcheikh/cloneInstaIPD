import {Component, OnInit} from '@angular/core';
import { StoryService } from 'src/app/services/story.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
  stories = [];
  selectedStory: any;
  popupOpen: boolean = false;

  constructor(private storyService: StoryService) {
  }

  ngOnInit() {
    this.stories = this.storyService.getStories();
  }
  openPopup(story: any) {
    this.selectedStory = story;
    this.popupOpen = true;
  }

  closePopup() {
    this.popupOpen = false;
  }
}
