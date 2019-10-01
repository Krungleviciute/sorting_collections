import { LinkedList } from "./LinkedList";
import { CharactersCollection } from "./CharactersCollection";
import { Sorter } from "./Sorter";
import { NumberCollection } from "./NumberCollection";

const word = new CharactersCollection("lAbaDienA");
const array = new NumberCollection([100, 3, -5, 0]);
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

word.sort();
array.sort();
linkedList.sort();
console.log(array.data);
console.log(word.data);
linkedList.print();

//these was used when Sorter was regular class and not abstract
// const sorter = new Sorter(array);
// const sortword = new Sorter(word);
// const sorterLinkedList = new Sorter(linkedList);

// sortword.sort();
// sorter.sort();
// sorterLinkedList.sort();
