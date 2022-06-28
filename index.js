arrs = [
  ['he', 'she'],
  ['_'],
  ['gives', 'takes', 'challenges'],
  ['.'],
  ['you', 'me', 'us', 'them']
]

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
