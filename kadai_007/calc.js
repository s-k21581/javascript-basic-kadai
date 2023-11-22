// 変数の宣言と値
let num = Math.floor(Math.random() * 100);


// 変数(num)の値が3と5の倍数であれば、「3と5の倍数です」という文字列を出力する
if (num % 3 == 0 && num % 5 == 0) {
  console.log("3と5の倍数です");
}
// 変数(num)の値が3の倍数であれば、「3の倍数です」という文字列を出力する
else if (num % 3 == 0) {
  console.log("3の倍数です");
}
// 変数(num)の値が5の倍数のであれば、「5の倍数です」という文字列を出力する
else if (num % 5 == 0) {
  console.log("5の倍数です");
}
// 変数(num)の値が3と5の倍数であれば、「3と5の倍数です」という文字列を出力する
else if (num % 3 && num % 5) {
  console.log("3と5の倍数です");
}
// それ以外の時は変数numを表示する
else {
  console.log(num);
}