import { Component, Prop } from "@stencil/core";

@Component({
  tag: "my-component",
  styleUrl: "my-component.css",
  shadow: true
})
export class MyComponent {
  @Prop()
  time: string;
  @Prop()
  description: string;
  @Prop()
  topic: string;
  @Prop()
  location: string;
  @Prop()
  note: string;

  TimelineItem() {
    return (
      <li>
        <div class="timeline-item">
          <i class="fa" />
          <div class="timeline-detail">
            <li>{this.topic}</li>
            <li>{this.location}</li>
            <li>{this.note}</li>
            <li>{this.description}</li>
          </div>
        </div>
      </li>
    );
  }

  render() {
    return (
      <div class="vertical-timeline">
        <ul class="timeline-list">
          <li class="timeline-label">
            <span>{this.time}</span>
          </li>
          {this.TimelineItem()}
        </ul>
      </div>
    );
  }
}

// export class MyComponent {
//   @Prop() first: string;
//   @Prop() middle: string;
//   @Prop() last: string;

//   format(): string {
//     return (
//       (this.first || '') +
//       (this.middle ? ` ${this.middle}` : '') +
//       (this.last ? ` ${this.last}` : '')
//     );
//   }

//   render() {
//     return <div>Hello, World! I'm {this.format()}</div>;
//   }
// }
