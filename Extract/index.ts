/*
    Extract<T, U>
    TからUに割り当て可能な全てのUnionメンバーを抽出して型を構築する
 */

type T0 = Extract<"a" | "b" | "c", "a" | "f">;

const t0: T0 = "a"

type T1 = Extract<string | number | (() => void), Function>

const t1: T1 = () => console.log()