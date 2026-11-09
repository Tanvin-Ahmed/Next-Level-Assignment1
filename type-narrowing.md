# Type Narrowing in TypeScript

## Introduction

A union lets one variable hold more than one type. `string | number` is a simple case. TypeScript blocks string methods on that variable until you show which type is actually there. Type narrowing is that check. After it passes, the type inside the block gets smaller, and the matching methods become allowed.

## Checking the type

`typeof` is the usual check for primitives. It looks at the runtime type and narrows the union in that branch.

```ts
function double(value: string | number): string | number {
  if (typeof value === "string") {
    return value.trim();
  }
  return value * 2;
}
```

In the first branch, `value` is a string, so `trim` is safe. In the other branch it is a number, so multiplication is safe.

`instanceof` is for classes. It asks if the object was made from a given constructor. If `animal instanceof Dog` is true, TypeScript treats `animal` as a `Dog`, and `bark()` is allowed.

The `in` operator checks for a property name. That helps when two object types are not classes, but they have different keys.

```ts
type Car = { wheels: number };
type Boat = { sails: number };

function label(item: Car | Boat): string {
  if ("sails" in item) {
    return "Boat";
  }
  return "Car";
}
```

If `"sails"` exists, `item` is a `Boat`. Otherwise it is a `Car`.

## Conclusion

Narrowing does not change the stored value. It only tells the compiler which type is active in that block. Use `typeof` for primitives, `instanceof` for class instances, and `in` when a property name separates two objects. After the check, you can use the value without a type cast.
