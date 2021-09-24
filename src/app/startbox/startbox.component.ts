import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ThingsToDoService, PriorityService, SeverityService, StatusService } from '../services/things-to-do.service';
import { Priority, Severity, Status, ThingsToDo } from './startbox';

@Component({
  selector: 'app-startbox',
  templateUrl: './startbox.component.html',
  styleUrls: ['./startbox.component.css'],
  providers: [ThingsToDoService, PriorityService, SeverityService, StatusService]
})
export class StartboxComponent implements OnInit {

  constructor(private thingsService: ThingsToDoService,
    private priorityService: PriorityService,
    private severityService: SeverityService,
    private statusService: StatusService) { }

  filterText = "";

  thingsToDo!: ThingsToDo[];
  priority!: Priority[];
  severity!: Severity[];
  status!: Status[];
  
  model: ThingsToDo = new ThingsToDo();

  ngOnInit(): void {
    this.thingsService.getThings().subscribe(data => {
      this.thingsToDo = data;
    });

    this.priorityService.getPriority().subscribe(data => {
      this.priority = data;
    });

    this.severityService.getSeverity().subscribe(data => {
      this.severity = data;
    })

    this.statusService.getStatus().subscribe(data => {
      this.status = data;
    })
  }

  

  add(form: NgForm) {
    this.thingsService.addToDo(this.model).subscribe(data=>{});
  }

}
