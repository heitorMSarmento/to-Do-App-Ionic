import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  isToastOpen = false;

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  public alertButtons = [
    { text: 'Voltar', role: 'cancel' },
    {
      text: 'Salvar',
      handler: (alertData: any) => {
        if (alertData.task != '') {
          this.taskService.addTask(alertData.task, alertData.date);
        } else {
          this.setOpen(true);
        }
      },
    },
  ];
  public alertInputsAdd = [
    {
      placeholder: 'Tarefa',
      name: 'task',
      type: 'text',
    },
    {
      type: 'date',
      name: 'date',
      value: 'Data',
      min: '2023-01-01',
      max: '2023-31-12',
    },
  ];
  constructor(public taskService: TaskService) {}
}
