# <img align="center"  width="80px" src="https://img.icons8.com/?size=96&id=wpZmKzk11AzJ&format=png" /> Typescript | Blogs 🚩

## 1. What are some differences between interfaces and types in TypeScript?

TypeScript offers two ways to define custom data structures: **interfaces** and **types**. But there is some differences and usecases too. <br>

---

### interface

interface used to describe the structure of an object. It’s useful when working with classes or objects only.

```ts
// simple interface for a User object
interface User {
  name: string;
  age: number;
}
```

### type

type is more flexiblle than interface. You can define union types, tuples, or even simple types with premitive data types also

```ts
type ID = string | number;

type Product = {
  title: string;
  price: number;
};
```

---

- We cant not Define custom premitive types using `interface`. but it possible by using `type`
- Implementing an Array / Function Types using `type` is easy , But it feel complex , when we implement the same thing using `interface`
- we can implement class with `interface` , but it is not possible with `types`
- `type` use `&` for intersection , inteface using extends for intersection

## How does TypeScript help in improving code quality and project maintainability?

TypeScript helps to make your code more safe and clear. It checks your code before runing, so you can catch many mistaks early. This saves time and helps avoid bugs in big projects. There is more.

- A Typescript code can be converted into any version of js project
- Typescript provide auto-completetion advantage as we define type
- Easy to refactor big codebase, since TypeScript keeps track of types and warns you if you miss something.
