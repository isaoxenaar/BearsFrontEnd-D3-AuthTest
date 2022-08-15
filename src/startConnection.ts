import * as signalR from "@microsoft/signalr";
import "./css/chatroom.css";

export default class startConnection {

    public divMessages: HTMLDivElement = document.querySelector("#divMessages") as HTMLDivElement;
    public tbMessage: HTMLInputElement = document.querySelector("#tbMessage") as HTMLInputElement;
    public btnSend: HTMLButtonElement = document.querySelector("#btnSend") as HTMLButtonElement;
    //public createDiv: (send: (username: string, value: string) => void) => void;
  
    private connection: signalR.HubConnection;
   
      constructor() {
        this.connection = new signalR.HubConnectionBuilder()
        .withUrl("https://localhost:7005/hub",  {
            skipNegotiation: true,
            transport: signalR.HttpTransportType.WebSockets
        })
        .withAutomaticReconnect()
        .build();
        this.connection.start().catch((err) => document.write(err));
      }
     
      public createDiv = (send:any) => {
        console.log("create div called.")
        this.connection.on("messageReceived", (username: string, message: string) => {
  
        const m = document.createElement("div");
        m.innerHTML = `<div class="message-author">${username}</div><div>${message}</div>`;
        console.log(m)
        this.divMessages.appendChild(m);
        this.divMessages.scrollTop = this.divMessages.scrollHeight;
  
      })};
  
      public send = (username:number, value:string) => {
        console.log("was send in chat")
        this.connection.send("newMessage", username, value)
          .then(() => {
            (value = "")});
      }    
}