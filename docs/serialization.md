# Serialization

For serialization boilerplate use [class-transformer](https://www.npmjs.com/package/class-transformer) and global interceptor `ClassSerializerInterceptor`.

---

## Table of Contents

- [Hide private property](#hide-private-property)

---

## Hide private property

If you need to hide some property in the entity you can use `@Exclude({ toPlainOnly: true })` on the column.

```ts
// /src/users/entities/user.entity.ts

import { Exclude } from 'class-transformer';

@Entity()
export class User extends EntityHelper {
  // Some code here...

  @Column({ nullable: true })
  @Exclude({ toPlainOnly: true })
  password: string;

  // Some code here...
}

```

Previous: [Auth](auth.md)
