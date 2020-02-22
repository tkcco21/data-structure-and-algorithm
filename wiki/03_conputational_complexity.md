# コードの計算量の求め方

参考：https://qiita.com/cotrpepe/items/1f4c38cc9d3e3a5f5e9c

## 計算量の求める

```ts
// 対象コード
type Count = number
const calculate = (n: Count): Count => { // NOTE: nは入力サイズを表す
  // ①
  let count = 0; // NOTE: 1回実行

  // ②
  for (let i = 0; i < n; i++) {
      count++; // NOTE: n回実行
  }

  // ③
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
          count++; // NOTE: n^2回実行
      }
  }

  // ④
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
          count++; // NOTE: n^2回実行
      }
  }

  // ⑤
  return count; // NOTE: 1回実行
}
```

---

**NOTE: 手順1） 各行のステップ数**
- 『ステップ数』とは、コンピュータプログラムの規模を測る指標の一つで、何らかの意味のある処理を行っているソースコードの行数

**NOTE: 手順2） プログラム全体のステップ数**
```js
プログラム全体のステップ数 = ① + ② + ③ + ④ + ⑤
                           = 1 + n + n^2 + n^2 + 1
                           = 2 + n + 2n^2
```
> 例えば n=2 なら、2 + 2 + 16 = 20  『これがステップ数』  

**NOTE: 手順3） 不要なものを除く**
- a. 最大次数の項以外を除く
  - 2+n+2n^2 => 2n^2
- b. 係数を除く
  - 2n^2 => n^2

**このコードの計算量は『 O(n^2) 』になる**

---

## ルールもあるよ
- 最大次数の項以外を除く
- 係数を除く
