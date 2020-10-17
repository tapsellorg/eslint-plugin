# The name of the injected service should be the camelCase form of the service (injected-service-name)

Please describe the origin of the rule here.

## Rule Details

This rule aims to...

Examples of **incorrect** code for this rule:

```ts
class Test {
  constructor(private user: UserService) {}
}
```

Examples of **correct** code for this rule:

```ts
class Test {
  constructor(private userService: UserService) {}
}
```

### Options

If there are any options, describe them here. Otherwise, delete this section.

## When Not To Use It

Give a short description of when it would be appropriate to turn off this rule.

## Further Reading

If there are other links that describe the issue this rule addresses, please include them here in a bulleted list.
