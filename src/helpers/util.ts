export const shuffle = (array: any[]) => {
  const arr = [...array]
  let currentIndex = arr.length
  let randomIndex = 0
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ]
  }
  return arr
}
