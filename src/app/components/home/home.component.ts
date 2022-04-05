import { Component, OnInit } from '@angular/core';
 
interface user{
  id?:number;
  name:string;
  username:string;
  email:string
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

filterString :string ='';
newarray = [
  {name: 'Haresh'}, 
  {name: 'Paresh'}, 
  {name: 'Amit'},
  {name: 'Sunil'},
  {name: 'Lokesh'}
];

myarray = [
  {name: 'Haresh'}, 
  {name: 'Paresh'}, 
  {name: 'Amit'},
  {name: 'Sunil'},
  {name: 'Lokesh'}
];

  users=[
    {
    id : 1,
    name: "Rahul",
    username: "Bret",
    email: "Sincere@april.biz",
    },
    {
    id: 2,
    name: "Anuj",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    
    },
    {
    id: 3,
    name: "Pooja",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    },
    {
    id: 4,
    name: "Sunil",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    },
    {
    id: 5,
    name: "Vikram",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    },
    {
    id: 6,
    name: "Deepak",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
   
    },
    {
    id: 7,
    name: "Hitesh",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    
    },
    {
    id: 8,
    name: "Nicholas",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    
    },
    {
    id: 9,
    name: "Rakesh",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    
    },
    {
    id: 10,
    name: "Gaurav",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    
    }
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
