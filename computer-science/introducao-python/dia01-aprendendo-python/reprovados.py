students = open("students.txt", mode="r")

for student in students:
    name, grade = student.split()
    grade = float(grade)
    if grade < 6:
        print(f"{name} reprovado")

students.close()

recuStudents = []
with open("students.txt") as gradesFile:
    for line in gradesFile:
        student_grade = line
        student_grade = student_grade.split(" ")
        if int(student_grade[1]) < 6:
            recuStudents.append(student_grade[0] + "\n")


with open("recuStudents.txt", mode="w") as recuStudentsFile:
    print(recuStudents)
    recuStudentsFile.writelines(recuStudents)