import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer =false;
  serverCreationStatus = 'No Server Created';
  serverName='lol';
  serverCreated = false;
  serversArray= ['T','F'];
  constructor() {
    // setTimeout( ()=> {
    //   this.allowNewServer =false;
    // }
    //   ,2000);
  }
  onCreateServer(){
    this.serverCreated=true;
    this.serversArray.push(this.serverName);
    this.serverCreationStatus=this.serverName;
  }
  onUpdateServerName(event : Event){
  this.serverName= (<HTMLInputElement>event.target).value;

  }
  ngOnInit(): void {
  }

}
