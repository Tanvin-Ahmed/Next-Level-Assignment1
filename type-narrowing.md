# Type Narrowing in TypeScript

## Introduction

A union lets one value have more than one type, such as `string | number`. TypeScript blocks string methods until you show which type is there. That check is called type narrowing. Inside the branch, the type gets smaller.

## Checking the type

`typeof` checks a primitive and narrows the union in that branch.

```ts
function double(value: string | number): string | number {
  if (typeof value === "string") {
    return value.trim();
  }
  return value * 2;
}
```

In the first branch, `trim()` is safe. In the other branch the value is a number.

`instanceof` is for classes. It checks the constructor, then narrows to that class.

```ts
class Dog {
  bark(): string {
    return "woof";
  }
}

function speak(pet: Dog | string): string {
  if (pet instanceof Dog) {
    return pet.bark();
  }
  return pet.trim();
}
```

Inside the `if`, `bark()` is allowed. Otherwise `pet` is a string.

The `in` operator checks for a property. Use it when two object types have different keys.

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

If `sails` exists, `item` is a `Boat`. Otherwise it is a `Car`.

## Conclusion

Narrowing does not change the stored value. It tells the compiler which type is active in that block. Use `typeof` for primitives, `instanceof` for classes, and `in` when a property name separates two objects.
