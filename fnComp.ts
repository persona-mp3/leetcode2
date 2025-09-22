/*
 * Take a list of functions, [f(x), g(y), h(z)]
 * */

function fnComposition(fns: Function[]): Function {
  return function(val: number) {
    if (fns.length == 0) {
      return val
    }

    let finalVal: any = val;
    for (let i = fns.length - 1; i >= 0; i--) {
      const fn = fns[i]
      finalVal = fn(finalVal)
    }
    return finalVal
  }
}

const compose = fnComposition(
  [
    (x: number) => 10 * x,
    (x: number) => 10 * x,
    (x: number) => 10 * x,
  ],

)
console.log(compose(1))
