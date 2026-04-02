questions = [{'Which of the following is the correct extension of the Python file?': ['.python','.pl','.py','.p']}, {'How is a code block indicated in Python?': ['Brackets','Indentation','Key','None of the above']}, {'What will be the output of the following code snippet?\nprint(type(5 / 2))\nprint(type(5 // 2))': ['float and int','int and float','float and float','int and int']}, {'Which keyword is used to define a function in Python language?': ['Function','def','Fun','Define']}, {'Which of the following data types is used to store values in Key & Value format?': ['List','Tuple','Class','Dictionary']}, {'What will be the output of the expression 4 + 3 % 5?': ['7','2','4','1']}, {'Which of the following loops are not explicitly supported in Python?': ['for','while','do-while','None of the above']}, {'What will be the output of the following code snippet?\na = [1, 2]\nprint(a * 3)': ['Error','[1, 2]','[1, 2, 1, 2]','[1, 2, 1, 2, 1, 2]']}, {'As what data type are the *args stored, when passed into a function?': ['List','Tuple','Dictionary','None of the above']}, {'Which of the following statements is used to create an empty set in Python?': ['( )','[ ]','{ }','set()']}]

answers = ['.py', 'Indentation', 'float and int', 'def', 'Dictionary', '7', 'do-while', '[1, 2, 1, 2, 1, 2]', 'Tuple', 'set()']

c = 0
marks = 0
for i in questions: 
    c += 1
    for k, v in i.items():
        print(f"Question {c}:", k)
        print("Options: ")
        print(v)
        user_answer = int(input("Enter option number: "))
        if (user_answer == 1 or user_answer == 2 or user_answer == 3 or user_answer == 4):
            user_option = v[user_answer - 1]
            if user_option == answers[c - 1]:
                marks += 1
        else:
            print("Enter correct input (1 - 4)!")
        print("____________________________________________________________________________________________")


            
    
print("Marks obtained: ", marks)