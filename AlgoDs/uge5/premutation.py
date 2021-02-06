import random

numbers = []
correctNumbers = []
cycleAmount = 0
areaCounter = []


def createArray(num):
    for i in range(num):
        numbers.append(i)
    random.shuffle(numbers)


def cycleCounter():
    for i in numbers:
        if numbers[i] == i:
            areaCounter.append([i])
            print(i, " is in it's own cycle.")
        elif any(i in s for s in areaCounter):
            print("Pair already made for ", i)
            for innernumbers in areaCounter:
                if i and numbers[i] != innernumbers in innernumbers:
                    print(numbers[i], " not in ", innernumbers)
                    innernumbers.append(numbers[i])
        elif any(numbers[i] in s for s in areaCounter):
            for innernumbers in areaCounter:
                if numbers[i] in innernumbers:
                    print(innernumbers, numbers[i])
                    innernumbers.append(i)
        else:
            print("First pair between ", i, numbers[i])
            areaCounter.append([i, numbers[i]])


createArray(10)
print("Shuffled numbers ", numbers)
cycleCounter()
cycleAmount = len(areaCounter)
print("Total number of cycles is ", cycleAmount)
print("AREA COUNTER: ", areaCounter)

