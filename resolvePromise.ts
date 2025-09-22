/*
 * So we need to take two async functions
 * */


async function resolvePromise(p1: Promise<number>, p2: Promise<number>): Promise<number> {
  return (await p1) + (await p2)
}

const p1 = new Promise<number>(resolve => setTimeout(() => resolve(10), 50))
const p2 = new Promise<any>(resolve => setTimeout(() => resolve(12), 30))
  ; (async () => {
    let x = await resolvePromise(p1, p2)
    console.log(x)
  })()
