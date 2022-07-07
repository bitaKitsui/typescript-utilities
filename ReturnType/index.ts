/*
    ReturnType<T>
    関数の戻り値の型から新たな型を生成する
 */

const f1 = (): { a: number; b: string } => {
    return { a: 0, b: "" }
}

type T1 = ReturnType<typeof f1>
const t1: T1 = { a: 1, b: "test" }

// @ts-ignore
type NG = ReturnType<string>
type OK = ReturnType<() => string>