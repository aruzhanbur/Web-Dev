def find_runner_up():
    n = int(input().strip())  
    scores = list(map(int, input().split()))  

    max_score = max(scores)

    scores = [score for score in scores if score != max_score]

    runner_up_score = max(scores)

    print(runner_up_score)

find_runner_up()
