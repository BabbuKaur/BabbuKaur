import { Component, OnInit } from '@angular/core';
import { SavingTableServiceService } from './saving-table-service.service';
import { SavingStoreData, SavingTableInformation } from './saving-table.model';

@Component({
  selector: 'app-saving-table',
  templateUrl: './saving-table.component.html',
  styleUrls: ['./saving-table.component.scss']
})
export class SavingTableComponent implements OnInit {
  savingTable:SavingTableInformation[]=[]
  targetGoal:number;
  goalBalanceToDate:number;
  getPercentage:number;
  storeTableData:SavingStoreData[]=[];

  constructor(private savingTableServiceService: SavingTableServiceService) { }

  ngOnInit(): void {
    this.savingTableServiceService.initializeTable().subscribe(data=>{
              this.savingTable = data;
              console.log(data);

        const savingNewTable=this.savingTable[0];
        const tableKeys=Object.keys(this.savingTable);
        for(let i=0; i<tableKeys.length; i++){
          switch (tableKeys[i]){
            case'goalDuration':
            case 'timeRemaining':
              const {year, month, day} = savingNewTable[tableKeys[i]];
              this.storeTableData.push({
                label:this.convertToString(tableKeys[i]),
                type:'string',
                value:year + ' year ' + month + ' months ' + day + ' days '
              });
              break;
            case'endDate':
              this.storeTableData.push({
                label:this.convertToString(tableKeys[i]),
                type:'string',
                value:savingNewTable[tableKeys[i]]
              });
              break;
              case 'lastInterestPaymentDate':
                this.storeTableData.push({
                  label:this.convertToString(tableKeys[i]),
                  type:'string',
                  value:this.savingNewTable[tableKeys[i]]
                });
                break;
              default:
                this.storeTableData.push({
                  label:this.convertToString(tableKeys[i]),
                  type:'string',
                  value:this.savingNewTable[tableKeys[i]]
                })

          }        
        }

               
    this.targetGoal=this.savingTable[0]?.targetGoal;
    this.goalBalanceToDate=this.savingTable[0]?.goalBalanceToDate;

    this.getPercentage=parseInt(((this.goalBalanceToDate/this.targetGoal)*100).toFixed(0));

    console.log(this.savingTable[0]?.goalDuration);
    console.log(this.savingTable[0]?.endDate);
    });

  }
  convertToString(text:string) {
    const result=text.replace(/([A-Z])/g, ' $1');
    return result.charAt(0).toUpperCase() + result.slice(1);
  }

}
