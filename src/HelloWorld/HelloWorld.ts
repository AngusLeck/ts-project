export class HelloWorld {
  private greeting;

  constructor(greetingMessage: string = "Hello World") {
    this.greeting = greetingMessage;
  }

  public greet() {
    return this.greeting;
  }
}
