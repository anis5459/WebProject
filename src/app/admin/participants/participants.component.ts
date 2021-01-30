import { Component, OnInit } from '@angular/core';
import { FakeFormateurServiceService } from '../fake-formateur-service.service';
@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {

  formateurItems ;
  constructor(private formateurItemService: FakeFormateurServiceService) { }
  ngOnInit(): void {
    this.formateurItems= this.formateurItemService.get();

}
}
