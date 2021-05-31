import { Component, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-grpc-web",
  templateUrl: "./grpc-web.component.html"
})
export class GrpcWebComponent {
  info: HelloReply;

  constructor(http: HttpClient) {
    http.get<HelloReply>("http://localhost:4201/greetings/sayHello").subscribe(result => {
      this.info = result;
    }, error => console.error(error));
  }
}

class HelloReply {
  message: string;
}
