import Sets from "./sets-lv.json";

// export default class Game {
//   #score;
//   #lives;
//   #sets;
//   #Table

//   constructor() {
//     this.#score = 0;
//     this.#lives = 10;
//     //Create a new randomized set array for each game instance
//     this.#sets = (() => {
//       let array = new Array(...Sets);
//       let currentIndex = array.length;

//       while (currentIndex != 0) {
//         let randomIndex = Math.floor(Math.random() * currentIndex);
        
//         currentIndex--;

//         [array[currentIndex], array[randomIndex]] = [
//           array[randomIndex],
//           array[currentIndex]
//         ];
//       }
//       return array;
//     })();
//     this.#Table = class {
//         constructor(){
//             this.activeSets = [Game.showSets().pop()];
//             this.solvedSets = []
//         }

//         getActiveSets(){
//           return this.activeSets;
//         }
//     }
//   }

//   newTable() {
//     new this.#Table();
//   }

//   showSets() {
//     console.log(this.#sets);
//   }

//   setSets() {
//     this.#sets.push("ASSSHOLES");
//   }

//   getScore() {
//     console.log(this.#score);
//   }

// }

