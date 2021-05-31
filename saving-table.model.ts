
export interface SavingTableInformation {
    goalDuration: SavingsTableTime;
    endDate: string;
    timeRemaining: SavingsTableTime;
    targetGoal: number;
    goalBalanceToDate: number;
    totalInterestToDate: number;
    lastInterestPaymentDate: string;
    lastThreeInterestPayments: SavingsInterestPayments[];
    currentBoostOffer: SavingsBoost[];
    enrolledBoost: SavingsBoost[];
    currentBoostRate: SavingsBoostRate[];
}

export interface SavingsTableTime {
    year: number;
    month: number;
    day: number;
}

export interface SavingsInterestPayments{
    amount: number;
            date: string;
}

export interface SavingsBoost {
    offerDescription: string;
}

export interface SavingsBoostRate {
    offerName: string;
}

export interface SavingStoreData {
    type: string;
    label: string;
    value: string;

}