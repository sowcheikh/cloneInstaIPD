import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../models/User";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  public loginUser: string = 'fatima01';
  public imgUrl = [];
  public settingIcon: string =
    'M46.7 20.6l-2.1-1.1c-.4-.2-.7-.5-.8-1-.5-1.6-1.1-3.2-1.9-4.7-.2-.4-.3-.8-.1-1.2l.8-2.3c.2-.5 0-1.1-.4-1.5l-2.9-2.9c-.4-.4-1-.5-1.5-.4l-2.3.8c-.4.1-.8.1-1.2-.1-1.4-.8-3-1.5-4.6-1.9-.4-.1-.8-.4-1-.8l-1.1-2.2c-.3-.5-.8-.8-1.3-.8h-4.1c-.6 0-1.1.3-1.3.8l-1.1 2.2c-.2.4-.5.7-1 .8-1.6.5-3.2 1.1-4.6 1.9-.4.2-.8.3-1.2.1l-2.3-.8c-.5-.2-1.1 0-1.5.4L5.9 8.8c-.4.4-.5 1-.4 1.5l.8 2.3c.1.4.1.8-.1 1.2-.8 1.5-1.5 3-1.9 4.7-.1.4-.4.8-.8 1l-2.1 1.1c-.5.3-.8.8-.8 1.3V26c0 .6.3 1.1.8 1.3l2.1 1.1c.4.2.7.5.8 1 .5 1.6 1.1 3.2 1.9 4.7.2.4.3.8.1 1.2l-.8 2.3c-.2.5 0 1.1.4 1.5L8.8 42c.4.4 1 .5 1.5.4l2.3-.8c.4-.1.8-.1 1.2.1 1.4.8 3 1.5 4.6 1.9.4.1.8.4 1 .8l1.1 2.2c.3.5.8.8 1.3.8h4.1c.6 0 1.1-.3 1.3-.8l1.1-2.2c.2-.4.5-.7 1-.8 1.6-.5 3.2-1.1 4.6-1.9.4-.2.8-.3 1.2-.1l2.3.8c.5.2 1.1 0 1.5-.4l2.9-2.9c.4-.4.5-1 .4-1.5l-.8-2.3c-.1-.4-.1-.8.1-1.2.8-1.5 1.5-3 1.9-4.7.1-.4.4-.8.8-1l2.1-1.1c.5-.3.8-.8.8-1.3v-4.1c.4-.5.1-1.1-.4-1.3zM24 41.5c-9.7 0-17.5-7.8-17.5-17.5S14.3 6.5 24 6.5 41.5 14.3 41.5 24 33.7 41.5 24 41.5z';

  public userProfile: User = {
    userId: 'fatima01',
    userName: 'fatima',
    followedBy: ['cheikh', 'evish'],
    follows: ['cheikh', 'evish'],
    profilePhoto: '/assets/images/userdata/fatima.jpg',
    bio: { intro: 'Fatou_B_SARR❤❤', website: 'timashop.sn' },
    posts: [],
  };

  constructor(private userService: UserService, private route: ActivatedRoute,
              private router: Router) { }

/*  ngOnInit(): void {
    let userId;
    this.route.params.subscribe(params => {
      userId = params['user_id'];
    });

    this.userService.getUserProfile(userId).subscribe((response) => {
      if (response.length === 1) {
        this.userProfile.userId = response[0].userid;
        this.userProfile.userName = response[0].username;
        this.userProfile.followedBy = response[0].followedby;
        this.userProfile.follows = response[0].follows;
        this.userProfile.profilePhoto = this.imgUrl + response[0].profilephoto;
        this.userProfile.bio = response[0].bio;
        this.userProfile.posts = response[0].posts;
      }
    });
  }*/

  public handleEditProfile(): void {
    alert('This feature is not available right now!');
  }
  ngOnInit() {
  this.imgUrl= [
      {id: 1 , src: 'assets/images/userdata/sarojsh01_photo2.jpg'},
      {id: 2 , src: 'assets/images/userdata/sarojsh01_photo3.jpg'},
      {id: 3 , src: 'assets/images/userdata/sarojsh01_photo2.jpg'},
      {id: 4 , src: 'assets/images/userdata/rabi.lamichhane_profilephoto.jpg'},
      {id: 5 , src: 'assets/images/userdata/sarojsh01_profilephoto.jpg'},
      {id: 6 , src: 'assets/images/userdata/rebatov_photo1.jpg'},
    ]
  }

  goToHome() {
    this.router.navigate(['home'])
  }
}
