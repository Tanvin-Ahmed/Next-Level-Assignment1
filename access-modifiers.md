# Access Modifiers in TypeScript

## Introduction

A class often keeps some data hidden and exposes only a few methods. Access modifiers control that. TypeScript has `public`, `private`, `protected`, and `readonly`. They are checked while you compile, so a wrong read or write shows up before the code runs.

## How they limit access

`public` is the default. Any code that holds the object can call a public member. `private` is the opposite. Only the class that declared the field can use it. A child class cannot read a private field, and code outside the class cannot either.

`protected` sits in the middle. The class itself can use it, and so can a class that extends it. Outside code still cannot.

```ts
class Account {
  public branch: string;
  protected owner: string;
  private balance: number;

  constructor(branch: string, owner: string, balance: number) {
    this.branch = branch;
    this.owner = owner;
    this.balance = balance;
  }
}

class SavingsAccount extends Account {
  getOwner(): string {
    return this.owner;
  }
}
```

Any code that has the account can read `branch`, because that field is public. `SavingsAccount` can read `owner` because it is protected. It cannot read `balance`, because that field is private on `Account`. If other code needs the balance, add a public method that returns it.

`readonly` is separate from who can see the field. You may set it once, usually in the constructor, and you cannot assign it again later.

```ts
class User {
  readonly id: number;

  constructor(id: number) {
    this.id = id;
  }
}
```

## Conclusion

Use the smallest access that still lets the class work. Keep internal numbers `private`, share a field with child classes through `protected`, and leave `public` for methods other code should call. Add `readonly` when a value should stay fixed after the object is created.
