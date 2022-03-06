export class HelloWorld {
  private greeting = "Hello World";

  constructor(greetingMessage: string) {
    this.greeting = greetingMessage;
  }

  public greet() {
    return this.greeting;
  }
}
