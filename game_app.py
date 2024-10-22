import random

def get_computer_choice():
    return random.choice(['rock', 'paper', 'scissors'])

def get_winner(player_choice, computer_choice):
    if player_choice == computer_choice:
        return 'tie'
    elif (player_choice == 'rock' and computer_choice == 'scissors') or \
         (player_choice == 'scissors' and computer_choice == 'paper') or \
         (player_choice == 'paper' and computer_choice == 'rock'):
        return 'win'
    else:
        return 'lose'

def main():
    score = {'win': 0, 'lose': 0, 'tie': 0}
    while True:
        player_choice = input("Enter rock, paper, or scissors (or 'quit' to stop playing): ").lower()
        if player_choice == 'quit':
            break
        if player_choice not in ['rock', 'paper', 'scissors']:
            print("Invalid input. Please try again.")
            continue
        
        computer_choice = get_computer_choice()
        print(f"Computer chose: {computer_choice}")
        
        result = get_winner(player_choice, computer_choice)
        score[result] += 1
        
        if result == 'win':
            print("You won this round!")
        elif result == 'lose':
            print("You lost this round!")
        else:
            print("This round is a tie!")
        
        print(f"Score: Wins - {score['win']}, Losses - {score['lose']}, Ties - {score['tie']}")
    
    print("Game over!")
    print(f"Final Score: Wins - {score['win']}, Losses - {score['lose']}, Ties - {score['tie']}")

if __name__ == "__main__":
    main()