v = int(input()) 
t = int(input())  

mkad_length = 109

position = (v * t) % mkad_length

position = (position + mkad_length) % mkad_length

print(position)
