import nda from 'images/nda_small.png';
import swift from 'images/swift-og.png';
import scanner from 'images/icon_scanner.jpg';
import wakeybackgrounds from 'images/wakeybackgrounds.png';
import calculator from 'images/calculator.jpg';
import portfolio from 'images/portfolio_kory.jpg';
import tomsmetal from 'images/tomsmetal.jpg';

// image can be any size. just make sure it is close to a 1:1 ratio - a square.

export default [
  {
    title: 'Second Year "Capstone" Project',
    description:
      'Due to the nature of the project I can\'t give much information regarding it but I can say that it is a proprietary CMS project, based in PHP and Javascript',
    skills: ['PHP', 'Javascript', 'JQuery', 'Jest', 'Apache', 'CSS3'],
    image: nda,
    // links: {
    //   github: 'https://github.com/vai0/travlr',
    //   preview: 'https://travlr.justinchi.me/',
    // },
  },
  {
    title: 'Battleship in the Console',
    description:
      'This project involved using swift in the console to recreate the famous game of battleship.',
    skills: ['Swift'],
    image: swift,
    links: {
       //github: 'https://github.com/vai0/travlr',
       preview: 'https://repl.it/@KoryPrior/Battlship',
     },
  },
  {
    title: 'Item Locator',
    description:
      'This is a small example of a grocery store item finder, but in your pocket! You can type in the barcode of the item and the app will tell you where its located in the store.',
    skills: ['Java'],
    image: scanner,
    links: {
      github: 'https://github.com/korprio/ItemLocator',
      //preview: 'https://repl.it/@KoryPrior/Battlship',
    },
  }
];
