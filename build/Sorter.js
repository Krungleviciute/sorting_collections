"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        var length = this.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
// interface Sortable {
//   length: number;
//   swap(leftIndex: number, rightIndex: number): void;
//   compare(leftIndex: number, rightIndex: number): boolean;
// }
// export class Sorter {
//   constructor(public collection: Sortable) {}
//   sort(): void {
//     const { length } = this.collection;
//     for (let i = 0; i < length; i++) {
//       for (let j = 0; j < length - i - 1; j++) {
//         if (this.collection.compare(j, j + 1)) {
//           this.collection.swap(j, j + 1);
//         }
//       }
//     }
//   }
// }
