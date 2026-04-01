questions = [{'q1': ['o1','o2','o3','o4']}, {'q2': ['o1','o2','o3','o4']}, {'q3': ['o1','o2','o3','o4']}, {'q4': ['o1','o2','o3','o4']}, {'q5': ['o1','o2','o3','o4']}, {'q6': ['o1','o2','o3','o4']}, {'q7': ['o1','o2','o3','o4']}, {'q8': ['o1','o2','o3','o4']}, {'q9': ['o1','o2','o3','o4']}, {'q10': ['o1','o2','o3','o4']}]

answers = ['o1', 'o4', 'o2', 'o3', 'o1', 'o2', 'o4', 'o1', 'o2', 'o3', 'o2']

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


            
    
print("Marks obtained: ", marks)