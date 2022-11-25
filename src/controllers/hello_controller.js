import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ['name'];
  greet() {
    const element = this.nameTarget;
    const value = element.value;
    console.log({ value, element });
    console.log({ value: this.name });
  }

  // simplifying controllers
  get name() {
    return this.nameTarget.value;
  }
}
