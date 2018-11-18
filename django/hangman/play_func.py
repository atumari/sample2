def get_score(ans, correct, string, score):
    p = 1
    new_string = ""
    for i, c in enumerate(correct):
        if ans == c:
            p = 0
            new_string += ans
        else:
            new_string += string[i]
    score += p
    
    return score, new_string