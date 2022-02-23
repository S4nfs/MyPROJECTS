import random

def gameWin(cpu, player):
    if(cpu == player):
        return None  # tie
    elif(cpu == "s"):
        if(player == "s"):
            return False
        elif(player == "p"):
            return True
    elif(cpu == "p"):
        if(player == "s"):
            return False
        elif (player == "c"):
            return True
    elif(cpu == "c"):
        if(player == "p"):
            return False
        elif(player == "s"):
            return True


print("CPU turn: Stone(s) Paper(p) or Scissor(c)?")
randomNum = random.randint(1, 3)     #generates random no. 1 - 3
if(randomNum == 1):
    cpu = "s"
elif(randomNum == 2):
    cpu = "p"
elif(randomNum == 3):
    cpu = "c"

player = input("Your turn: Stone(s) Paper(p) or Scissor(c)?")
a = gameWin(cpu, player)

print(f"CPU choose {cpu}")
print(f"You choose {player}")


if a == None:
    print("Tie")
elif a:
    print("You Win!")
else:
    print("You Loose!")
