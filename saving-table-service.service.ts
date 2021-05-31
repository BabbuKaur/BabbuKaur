import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SavingTableInformation } from './saving-table.model';

@Injectable({
  providedIn: 'root'
})
export class SavingTableServiceService {

  savingTable:SavingTableInformation[]=[
    {
      'goalDuration': {
          'year':1,
          'month':8,
          'day':2,
      },
      'endDate': '2021/12/12',
      'timeRemaining':{
          'year':1,
          'month':6,
          'day':5
      },
      'targetGoal': 6789.51,
      'goalBalanceToDate':2897.51,
      'totalInterestToDate': 1200.00,
      'lastInterestPaymentDate': 'Last Interest Payment Amount:',
      'lastThreeInterestPayments':[
          {
              'amount':1100.00,
              'date':'2021/12/12',
          },
          {
              'amount':50.00,
              'date':'2021/11/12'
          },
          {
              'amount':50.00,
              'date':'2021/10/12'
          }
      ],
      'currentBoostOffer':[{'offerDescription':'2% bonus interest rate when goal is achieved'}],
      'enrolledBoost':[{'offerDescription':'Prescott Dimonds'}],
      'currentBoostRate':[{'offerName': '$250.00'}]
  }
  ]

    initializeTable(): Observable<SavingTableInformation[]> {
       return of(this.savingTable);
   }
}

