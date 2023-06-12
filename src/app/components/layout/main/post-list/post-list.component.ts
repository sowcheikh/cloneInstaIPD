import {Component, OnInit} from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit{
  nbrLike = 0;
  isLiked: boolean = false;
  likeCount: number = 0;
  postComment: any;
  posts = [];

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.posts = this.postService.getAllPosts();
  }

  toggleLike() {
    this.isLiked = !this.isLiked;
    if (this.isLiked) {
      this.likeCount++;
    } else {
      this.likeCount--;
    }
  }
}
