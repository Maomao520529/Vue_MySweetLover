export default function (num) {
  const date = new Date(num * 1000)
  return date.toLocaleDateString()
  // toLocaleDateString() 方法
  // 用來取得日期物件中，當地時間的日期部分，包含了星期幾與年月日
}
