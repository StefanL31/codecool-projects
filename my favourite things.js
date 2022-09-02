let MyFavBook  = {
    title: "The Stranger",
    author:"by Albert Camus ",
    year: 1942,
    description: "The book follows the life of Meursault, an indifferent citizen of Algeria, that goes through a complete psychological isolation regarding his culture and his life.",
};

console.log(MyFavBook); // ->
/*
{ title: "The Stranger",
  author: "by Albert Camus",
  year: 1942,
  description: "The book follows the life of Meursault, an indifferent citizen of Algeria, that goes through a complete psychological isolation regarding his culture and his life." }
*/

let MyFavMovie = {  
    title: "Predestination",
    director: "by Michael and Peter Spierig",
    year: 2014,
    description: "It is a movie describing the life of a time traveler.",
    actorName: "Sarah Snook, Ethan Hawke, Noah Tailor, Elise Jansen, Christopher Sommers",
    roleName: "The Unmarried Mother, The Barkeep, Mr. Robertson, Nurse, Mr Miller",
};

console.log(MyFavMovie); // ->
/*
{ title: "Predestination",
  director: "By Michael and Peter Spierig",
  year: 2014,
  description: "It is a movie describing the life of a time traveler." }
*/

let array1 = ["Sarah Snook, Ethan Hawke, Noah Tailor, Elise Jansen, Christopher Sommers"]; 
console.log(array1); // ->
/* 
{ "Sarah Snook, Ethan Hawke, Noah Tailor, Elise Jansen, Christopher Sommers" }
*/

let array2 = ["The Unmarried Mother, The Barkeep, Mr. Robertson, Nurse, Mr Miller"]; 
console.log(array2); // ->
/*
{ "The Unmarried Mother, The Barkeep, Mr. Robertson, Nurse, Mr Miller" }
*/

let MyFavSeries = {
    title: "Sandman",
    directors: "Neil Gaiman, David S. Goyer, Allan Heinberg",
    seasons: 1,
    startYear: 2022,
    episodes: 11,
    endYear: "Ongoing",
    description: "Morpheus, the lord of dreams, gets captured and has to return to his unattended kingdom, after nearly 100 years.",
    actorName: "Tom Sturridge, Gwendoline Christie, Jenna Coleman, Boyd Holbrook, Mason Alexander Park",
    roleName: "Dream, Lucifer, Johanna Constantine, The Corinthian, Desire",
};

console.log(MyFavSeries); // ->
/* 
{ title: "Sandman".
  directors: "Neil Gaiman, David S. Goyer, Allan Heinberg",
  seasons: 1,
  startYear: 2022,
  endYear: "ongoing",
  episodes: 11,
  description: "Morpheus, the lord of dreams, gets captured and has to return to his unattended kingdom, after nearly 100 years.",
  actorName: "Tom Sturridge, Gwendoline Christie, Jenna Coleman, Boyd Holbrook, Mason Alexander Park",
  roleName: "Dream, Lucifer, Johanna Constantine, The Corinthian, Desire" }
*/

let array3 = ["Tom Sturridge, Gwendoline Christie, Jenna Coleman, Boyd Holbrook, Mason Alexander Park"];
console.log(array3); // ->
/*
{ "Tom Sturridge, Gwendoline Christie, Jenna Coleman, Boyd Holbrook, Mason Alexander Park" }
*/

let array4 = ["Neil Gaiman, David S. Goyer, Allan Heinberg"];
console.log(array4); // ->
/*
{ "Neil Gaiman, David S. Goyer, Allan Heinberg" }
*/

let array5 = ["11, 2022, ongoing"];
console.log (array5); // ->
/*
{ "11, 2022, ongoing" }
*/

let Myfavs = {
    book: MyFavBook = {
          title:  "The Stranger",
          author:"by Albert Camus ",
          year: 1942,
          description: "The book follows the life of Meursault, an indifferent citizen of Algeria, that goes through a complete psychological isolation regarding his culture and his life.",
      },
    movie: MyFavMovie = {
           title: "Predestination",
           director: "by Michael and Peter Spierig",
           year: 2014,
           description: "It is a movie describing the life of a time traveler.",
           actorName: "Sarah Snook, Ethan Hawke, Noah Tailor, Elise Jansen, Christopher Sommers",
           roleName: "The Unmarried Mother, The Barkeep, Mr. Robertson, Nurse, Mr Miller",
    },
    series: MyFavSeries = {
            title: "Sandman",
            directors: "Neil Gaiman, David S. Goyer, Allan Heinberg",
            seasons: 1,
            startYear: 2022,
            episodes: 11,
            endYear: "Ongoing",
            description: "Morpheus, the lord of dreams, gets captured and has to return to his unattended kingdom, after nearly 100 years.",
            actorName: "Tom Sturridge, Gwendoline Christie, Jenna Coleman, Boyd Holbrook, Mason Alexander Park",
            roleName: "Dream, Lucifer, Johanna Constantine, The Corinthian, Desire",
    },
};
console.log(Myfavs); // ->
/* { book: MyFavBook = {
          title:  "The Stranger",
          author:"by Albert Camus ",
          year: 1942,
          description: "The book follows the life of Meursault, an indifferent citizen of Algeria, that goes through a complete psychological isolation regarding his culture and his life.",
      },
    movie: MyFavMovie = {
           title: "Predestination",
           director: "by Michael and Peter Spierig",
           year: 2014,
           description: "It is a movie describing the life of a time traveler.",
           actorName: "Sarah Snook, Ethan Hawke, Noah Tailor, Elise Jansen, Christopher Sommers",
           roleName: "The Unmarried Mother, The Barkeep, Mr. Robertson, Nurse, Mr Miller",
    },
    series: MyFavSeries = {
            title: "Sandman",
            directors: "Neil Gaiman, David S. Goyer, Allan Heinberg",
            seasons: 1,
            startYear: 2022,
            episodes: 11,
            endYear: "Ongoing",
            description: "Morpheus, the lord of dreams, gets captured and has to return to his unattended kingdom, after nearly 100 years.",
            actorName: "Tom Sturridge, Gwendoline Christie, Jenna Coleman, Boyd Holbrook, Mason Alexander Park",
            roleName: "Dream, Lucifer, Johanna Constantine, The Corinthian, Desire"
    },
}
*/
console.log(MyFavBook['title']); // -> The Stranger
roleName = "The Unmarried Mother";
console.log(roleName); // -> The Unmarried Mother
endYear = "ongoing";
console.log(endYear); // -> ongoing
for(let index =0; index < 12; index = index +1) {
    console.log(index);
} // ->
/*
1
2
3
4
5
6
7
8
9
10
11
*/
directors = "Neil Gaimal, David S. Goyer, Allan Heinberg";
length = 1;
if (length > 0) {
   directors = "Neil Gaimal, David S. Goyer, Allan Heinberg"
};