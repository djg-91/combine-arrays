let arr_1 = ['he', 'she'];
let arr_2 = ['_'];
let arr_3 = ['gives', 'takes', 'fucks'];
let arr_4 = ['.'];
let arr_5 = ['you', 'me', 'us', 'them'];

arrs = [arr_1, arr_2, arr_3, arr_4, arr_5];

dummy_arr = arrs.shift();
final_arr = [];

while (arrs[0] != null) {
  for (let i in dummy_arr) {
    for (let j in arrs[0]) {
      final_arr.push(dummy_arr[i] + arrs[0][j]);
    }
  }
  dummy_arr = final_arr.slice();
  final_arr = [];
  arrs.shift();
}

final_arr = dummy_arr.slice();

console.log(final_arr)
