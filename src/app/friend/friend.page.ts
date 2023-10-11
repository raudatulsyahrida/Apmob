import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.page.html',
  styleUrls: ['./friend.page.scss'],
})
export class FriendPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  friendList = [
    { nama: 'Rida', status: 'Add friend', img: "assets/img/1.jpg"},
    { nama: 'Desy', status: 'Unfriend', img: "assets/img/2.jpg"},
    { nama: 'Yanti', status: 'Accept', img: "assets/img/3.jpg"},
    { nama: 'Putri', status: 'Accept', img: "assets/img/4.jpg"},
    { nama: 'Janna', status: 'Accept', img: "assets/img/5.jpg"},
  ];
}