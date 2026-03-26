
from abc import ABC,abstractmethod

import random

class BANK(ABC):
    @abstractmethod
    def create_account(self):
        pass
    
    @abstractmethod
    def Deposit(self):
        pass
    
    @abstractmethod
    def withdraw(self):
        pass
    
    @abstractmethod
    def check_balance(self):
        pass
    
    @abstractmethod
    def Details(self):
        pass
    
class SBI(BANK):
    __Holder_details = []  #  
    
    def create_account(self):
        new_holder = {}  # 
        
        new_holder['Holder_name']=input('Enter Holder name:')
        new_holder['Mobile'] = int(input('Enetr Mobile number:'))
        new_holder['Aadhaar_num'] = int(input('Enter Aadhaar number:'))
        
        new_holder['IFSC']='SBI01234'
        new_holder['Account_num'] = random.randint(10000000000,99999999999)
        
        n = input('select your Account (saving or zero)/:').lower()
        
        while True:
            if n=='saving':
                v1  = int(input('Your Account saving so Deposit 1000 /:'))
                
                if v1>=1000:
                    new_holder['Balance'] = v1
                    break
                    
                else:
                    print('------ Deposit 1000 -----')
                    
            elif n=='zero':
                v2  = int(input('your Account zero Deposit 500 Rupees/:'))
                
                if v2>=500:
                    new_holder['Balance']=v2
                    break
                else:
                    print('---- Deposit 500 Rupees/----')
        
        SBI.__Holder_details.append(new_holder)
        
        print(SBI.__Holder_details)  
        
        
    def Deposit(self):
        print('-----welcome to Deposit -----')
        
        while True:
            acc_f = False   #  True
            
            Acc_num = int(input('Enter Your Account Number:'))
            
            for x in SBI.__Holder_details:   #  x={2}
                if x['Account_num'] == Acc_num:
                    print('welcome ',x['Holder_name'])
                    
                    acc_f = True
                    
                    D_Amount = int(input('Enter Deposit Amount:'))
                    
                    x['Balance']+=D_Amount
                    
                    print('After Deposit Your Bank Balance:',x['Balance'])
                    
                    return
            
            if not acc_f:
                print('Enter Correct Account number-----')
            
    def withdraw(self):
        print('--- welcome to withdraw----')
        
        while True:
            acc_f = False   #  True
            
            acc_num = int(input('Enter Your Account number:'))
            
            for x in SBI.__Holder_details:
                if x['Account_num']==acc_num:  # 
                    acc_f= True   
                    print('welcome,',x['Holder_name'])
                    
                    w_amount = int(input('Enter Withdraw Amount:'))
                    
                    if x['Balance']>=w_amount:
                        x['Balance']-=w_amount 
                        print('After withdraw bank balance',x['Balance'])  
                    else:
                        print('---check your balance -----')  
                    return
            if not acc_f:
                print('Enter Correct Number-----')
                
    def check_balance(self):
        print('----welcome to checkbalance----')
        
        n = int(input('Enter Your Account number:'))
        for x in SBI.__Holder_details:
            if x['Account_num'] == n:
                print('Bank Balance:',x['Balance'])
                break
            else:
                print('Enter correct Account number---')
                
    def Details(self):
        print('----welcome to Details----')   
        n = int(input('Enter Your Account number:'))
        
        for x in SBI.__Holder_details:
            if x['Account_num'] == n:
                 print('----Your Details----')
                 print()
                 for k,v in x.items():
                     print(k,'==',v)
                     break
            else:
                print('Enter correct Account number----')           
        
  

obj = SBI()

while True:
    print('''
          1) create Account
          2) Deposit
          3) withdraw
          4) check_balance
          5) Details
          6) Exit''')
    n2 = int(input('select your options:')) 
    if n2 == 1:
        obj.create_account()
    
    elif n2==2:
        obj.Deposit() 
        
    elif n2==3:
        obj.withdraw()
    
    elif n2 == 4:
        obj.check_balance()
    
    elif n2==5:
        obj.Details()
        
    elif n2==6:
        break
    
    else:
        print('----select 1---6 options---')
        
        
        
    